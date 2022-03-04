require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const { Op } = require('sequelize');
const { Videogame, Genre, Platform } = require('../db.js');

const getAllGames = async (req, res, next) => {
    
        try {
            var promisesAPI = [];

            for(let i = 1; i <= 5; i++){
                promisesAPI.push(axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`));
            }

            var promisesBD = Videogame.findAll({include: Genre});

            var responseAPIPromises = await Promise.all([...promisesAPI, promisesBD])
            var responsePromiseBD = responseAPIPromises.pop();

            let responseAPI = []; let responseBD = [];

            responseAPIPromises.forEach(promiseResponse => responseAPI = [...responseAPI, ...promiseResponse.data.results?.map(game => {
                return {
                    name: game.name,
                    image: game.background_image,
                    id: game.id,
                    genres: game.genres.map(genre => genre.name),
                    rating: game.rating,
                    created: false
                }
            })]
            )

            responseBD = responsePromiseBD?.map(game => {
                return {
                    name: game.name,
                    rating: game.rating,
                    created: game.created,
                    genres: game.genres?.map(genre => genre.name),
                    image: game.image,
                    id: game.id
                }
            })

            const results = [...responseBD, ...responseAPI];
            return res.json(results);
        } catch (error) {
            next(error)
        }
};

const getGamesByName = async (req, res, next) => {
    
    try {
        const promiseAPI = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${req.params.name}`);
        const promiseBD = Videogame.findAll({where: {
            name: {
                [Op.iLike]: `%${req.params.name}%`
            } 
        }, include: Genre});

        var [responseAPIPromises, responsePromiseBD] = await Promise.all([promiseAPI, promiseBD]);

        let responseAPI = []; let responseBD = [];

        responseAPI = responseAPIPromises.data.results?.map(game => {
        return {
            name: game.name,
            image: game.background_image,
            id: game.id,
            genres: game.genres?.map(genre => genre.name),
            rating: game.rating,
            created: false
        }
        });

        responseBD = responsePromiseBD?.map(game => {
            return {
                name: game.name,
                rating: game.rating,
                created: game.created,
                genres: game.genres?.map(genre => genre.name),
                image: game.image,
                id: game.id
            }
        });

        const results = [...responseBD, ...responseAPI]
        return res.json(results);

    } catch (error) {
        next(error)
    }
}

const getGameDetail = async (req, res, next) => {
    const id = req.params.idVideogame;

    if(id.includes('-')) {
        try {
            
            const requestBD = await Videogame.findOne({
                where: {
                    id: id
                },
                include: [Platform, Genre]
            });

            var responseBD = []; responseBD.push(requestBD)
            
            if(requestBD) {
                responseBD = responseBD.map(game => {
                    console.log(game);
                    return {
                        name: game.name,
                        description: game.description,
                        releaseDate: game.releaseDate,
                        rating: game.rating,
                        platforms: game.platforms?.map(platform => platform.name).join(', '),
                        created: game.created,
                        genres: game.genres?.map(genre => genre.name).join(', '),
                        image: game.image,
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
                    genres: genres?.map(genre => genre.name).join(', '),
                    platforms: platforms?.map(p => p.platform.name).join(', '),
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

    var {name, description, image, releaseDate, rating, genres, platforms} = req.body;
    name = name.replace(/\s{2,}/g, ' '); description = description.replace(/\s{2,}/g, ' ');

    image = !image ? 'https://www.diariovivo.com/wp-content/uploads/2019/11/blog_game_on_feature_image_2019-750x450.jpg' : image;
    
    try {
        const createdGame = await Videogame.create({
            name, 
            description,
            image,
            releaseDate,
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
    } catch (error) {
        res.status(500).send('Game not created');
        next(error);
    }
};

module.exports = {
    getGameDetail,
    getGamesByName,
    getAllGames,
    createGame
}