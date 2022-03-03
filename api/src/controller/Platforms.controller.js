require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const { Platform } = require('../db');

const getAllPlatforms = async (req, res, next) => {
    try {
        const requestAPI = await axios.get(`https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`);
        if(requestAPI) {
            let requestFormated = [];

            requestFormated = requestAPI.data.results?.map(platform => {
                return {
                    id: platform.id,
                    name: platform.name
                }
            });

            requestFormated?.map(platform => Platform.findOrCreate({where: {name: platform.name}}))

            const results = await Platform.findAll();

            res.json(results);
        }else {
            return res.status(500).send('API Error')
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllPlatforms
}