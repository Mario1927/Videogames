require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db.js');

const getAllGames = async (req, res, next) => {
    if(req.query.name){
        try {
            const requestAPI = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${req.query.name}`);
            const requestBD = await Videogame.findAll({include: Genre});

            if(requestAPI || requestBD) {
                
                const requestFormated = requestAPI.data.results?.map(game => {
                    return {
                        name: game.name,
                        image: game.background_image,
                        id: game.id,
                        genres: game.genres.map(genre => genre.name),
                        created: false
                    }
                });

                const responseBD = requestBD?.filter(game => {
                    
                    if(game.name.includes(req.query.name)){
                        return {
                            name: game.name,
                            description: game.description,
                            releasedDate: game.releaseDate,
                            rating: game.rating,
                            platforms: game.platforms,
                            created: game.created,
                            genres: game.genres?.map(genre => genre.name),
                            image: ''
                        }
                    }
                })
    
                const results = [...requestFormated, ...responseBD]
    
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
                            created: false
                        }
                    });
                    responseAPI = [...responseAPI, ...requestFormated];
                    requestAPI = await axios.get(requestAPI.data.next);
                }

                const responseBD = requestBD?.map(game => {
                    game.genres.map(name => console.log(name.name));
                    
                    return {
                        name: game.name,
                        description: game.description,
                        releasedDate: game.releaseDate,
                        rating: game.rating,
                        platforms: game.platforms,
                        created: game.created,
                        genres: game.genres?.map(genre => genre.name),
                        image: ''
                    }
                })
                
                const results = [...responseAPI, ...responseBD];

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
                const requestFormated = {
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
    const {name, description, image, released, rating, genres, platforms} = req.query;
    
    const createdGame = await Videogame.create({
        name, 
        description,
        image,
        released,
        rating,
        platforms,
        created: true
    });

    genres.split(', ').map(async genre => {
        const genreBD = await Genre.findOne({where: {name: genre}});
        await createdGame.addGenre(genreBD);
    });

    return res.sendStatus(200);
};

module.exports = {
    getGameDetail,
    getAllGames,
    createGame
}