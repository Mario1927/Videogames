require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const { Op } = require('sequelize');
const { Videogame, Genre, Platform } = require('../db.js');
const Platforms = require('../models/Platforms.js');

const getAllGames = async (req, res, next) => {
    if(req.query.name){
        try {
            const requestAPI = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${req.query.name}`);
            const requestBD = await Videogame.findAll({where: {
                name: {
                    [Op.iLike]: `%${req.query.name}%`
                } 
            }, include: Genre});

            if(requestAPI || requestBD) {
                
                const requestFormated = requestAPI.data.results?.map(game => {
                    return {
                        name: game.name,
                        image: game.background_image,
                        id: game.id,
                        genres: game.genres.map(genre => genre.name),
                        rating: game.rating,
                        created: false
                    }
                });

                const responseBD = requestBD?.map(game => {
                    return {
                        name: game.name,
                        description: game.description,
                        releasedDate: game.releaseDate,
                        rating: game.rating,
                        platforms: game.platforms,
                        created: game.created,
                        genres: game.genres.map(genre => genre.name),
                        image: '',
                        id: game.id
                    }
                });
    
                const results = [...responseBD, ...requestFormated]
    
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
            var requestAPI = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
            var requestBD = await Videogame.findAll({include: Genre});

            if(requestAPI || requestBD) {

                let responseAPI = []; let requestFormated = [];

                while (responseAPI.length < 100 && requestAPI.data.results) {
                    
                    requestFormated = requestAPI.data.results.map(game => {
                        return {
                            name: game.name,
                            image: game.background_image,
                            id: game.id,
                            genres: game.genres.map(genre => genre.name),
                            rating: game.rating,
                            created: false
                        }
                    });
                    responseAPI = [...responseAPI, ...requestFormated];
                    requestAPI = await axios.get(requestAPI.data.next);
                }

                const responseBD = requestBD?.map(game => {
                    
                    return {
                        name: game.name,
                        description: game.description,
                        releasedDate: game.releaseDate,
                        rating: game.rating,
                        platforms: game.platforms,
                        created: game.created,
                        genres: game.genres?.map(genre => genre.name),
                        image: '',
                        id: game.id
                    }
                })
                
                const results = [...responseBD, ...responseAPI];

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

    if(id.includes('-')) {
        try {
            
            const requestBD = await Videogame.findOne({
                where: {
                    id: id
                },
                include: Genre
            });

            var responseBD = []; responseBD.push(requestBD)
            
            if(requestBD) {
                responseBD = responseBD.map(game => {
                    return {
                        name: game.name,
                        description: game.description,
                        releasedDate: game.releaseDate,
                        rating: game.rating,
                        platforms: game.platforms,
                        created: game.created,
                        genres: game.genres.map(genre => genre.name).join(', '),
                        image: '',
                        id: game.id
                    }
                })
                res.json(...responseBD)  
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
                const {name, description_raw, background_image, released, rating, genres, platforms, id} = requestAPI.data;        
                const requestFormated = {
                    name,
                    description: description_raw,
                    image: background_image,
                    releaseDate: released,
                    rating,
                    genres: genres.map(genre => genre.name).join(', '),
                    platforms: platforms.map(p => p.platform.name).join(', '),
                    id,
                    created: false
                };
                return res.json(requestFormated);
            } else {
                return res.json('API Error');
            };
        } catch (error) {
            next(error)
        };
    };
};

const createGame = async (req, res, next) => {

    console.log(req.body)

    const {name, description, image, released, rating, genres, platforms} = req.body;
    
    const createdGame = await Videogame.create({
        name, 
        description,
        image,
        released,
        rating,
        created: true
    });

    genres.map(async genre => {
        const genreBD = await Genre.findOne({where: {name: genre}});
        await createdGame.addGenre(genreBD);
    });

    platforms.map(async platform => {
        const platformBD = await Platform.findOne({where: {name: platform}});
        await createdGame.addPlatform(platformBD);
    });

    return res.status(200).send('Game created succesfully');
};

module.exports = {
    getGameDetail,
    getAllGames,
    createGame
}