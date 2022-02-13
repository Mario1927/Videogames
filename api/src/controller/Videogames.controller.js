require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db.js');
const validator = require('validator');

const getAllGames = async (req, res, next) => {
    if(req.query.name){
        try {
            const requestAPI = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${req.query.name}`);
            const requestBD = await Videogame.findAll({include: Genre});
    
            if(requestAPI || requestBD) {
                
                const request_formated = requestAPI.data.results?.map(game => {
                    return {
                        name: game.name,
                        image: game.background_image,
                        id: game.id,
                        genres: game.genres.map(genre => genre.name),
                        created: false
                    }
                });
    
                const results = [...request_formated, requestBD]
    
                return res.json(results);
            }
            else {
                return res.json('API Error');
            }
        } catch (error) {
            next(error)
        }
    }else {
        try {
            const requestAPI = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
            const requestBD = await Videogame.findAll({include: Genre});

            if(requestAPI || requestBD) {
                const request_formated = requestAPI.data.results?.map(game => {
                    return {
                        name: game.name,
                        image: game.background_image,
                        id: game.id,
                        genres: game.genres.map(genre => genre.name),
                        created: false
                    }
                });

                const results = [...request_formated, requestBD]

                return res.json(results);
            }
            else {
                return res.json('API Error');
            }
        } catch (error) {
            next(error)
        }
    }
};

const getGameDetail = async (req, res, next) => {
    const id = req.params.idVideogame;
    const isUUID = validator.isUUID(id);

    if(isUUID) {
        try {
            const requestBD = await Videogame.findOne({
                where: {
                    id: id
                },
                include: Genre
            });
            if(requestBD) {
                res.json(...requestBD)
            }else {
                res.json('Not found on Database')
            };
        } catch (error) {
            next(error)
        };
    }else {
        try {
            const requestAPI = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            if(requestAPI) {
                const {name, description, background_image, released, rating, genres, platforms, id} = requestAPI.data;        
                const request_formated = {
                    name,
                    description,
                    image: background_image,
                    releaseDate: released,
                    rating,
                    genres: genres.map(genre => genre.name),
                    platforms: platforms.map(p => p.platform.name),
                    id,
                    created: false
                };
                return res.json(request_formated);
            } else {
                return res.json('API Error');
            };
        } catch (error) {
            next(error)
        };
    };
};

module.exports = {
    getGameDetail,
    getAllGames
}