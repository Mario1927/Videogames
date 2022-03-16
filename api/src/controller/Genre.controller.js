require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const { Genre } = require('../db.js');

const getAllGenres = async (req, res, next) => {
    try {
      const requestAPI = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
      if(requestAPI) {
        requestAPI.data.results?.map(gender => Genre.findOrCreate({where: {name: gender.name}}));
      }else {
          return res.status.json('Api Error')
      }
    } catch (error) {
        next(error);
    }

    const results = await Genre.findAll();
    
    res.json(results)
}

const createGenre = async (req, res, next) => {

  var name = req.body.name;

  try {
    
    const newGenre = await Genre.findOrCreate({
      where: {
        name: name
      }
    });

    return res.status(200).send(newGenre);

  } catch (error) {
    next(error)
  }

}

module.exports = {
    getAllGenres,
    createGenre
}