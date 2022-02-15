import axios from "axios"
import { GET_ALL_GAMES, GET_GAMES_BY_NAME, GET_GAME_BY_ID, GET_ALL_GENRES } from '../types/types.js'

export function getGames() {
    return async function(dispatch) {
        const response = await axios(`http://localhost:3001/videogames`)
        return dispatch({type: GET_ALL_GAMES, payload: response.data})
    }
}

export function searchGamesByName(name) {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        return dispatch({type: GET_GAMES_BY_NAME, payload: response.data})
    }
}

export function searchGameById(id) {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames/${id}`);
        return dispatch({type: GET_GAME_BY_ID, payload: response.data})
    }
}

export function getGenres() {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/genres`)
        return dispatch({type: GET_ALL_GENRES, payload: response.data})
    }
}
