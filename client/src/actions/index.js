import axios from "axios"
import { GET_ALL_GAMES, GET_GAMES_BY_NAME, GET_GAME_BY_ID, GET_ALL_GENRES, FILTER_BY_GENRE, FILTER_BY_CREATOR, ORDER_BY_NAME, ORDER_BY_RATING, GET_ALL_PLATFORMS } from '../types/types.js'

export function getGames() {
    return async function(dispatch) {
        const response = await axios(`/videogames`)
        return dispatch({type: GET_ALL_GAMES, payload: response.data})
    }
}

export function getPlatforms() {
    return async function(dispatch) {
        const response = await axios(`/platforms`)
        return dispatch({type: GET_ALL_PLATFORMS, payload: response.data})
    }
}

export function searchGamesByName(name) {
    return async function(dispatch) {
        const response = await axios.get(`/videogames?name=${name}`)
        return dispatch({type: GET_GAMES_BY_NAME, payload: response.data})
    }
}

export function searchGameById(id) {
    return async function(dispatch) {
        const response = await axios.get(`/videogames/${id}`);
        return dispatch({type: GET_GAME_BY_ID, payload: response.data})
    }
}

export function getGenres() {
    return async function(dispatch) {
        const response = await axios.get(`/genres`)
        return dispatch({type: GET_ALL_GENRES, payload: response.data})
    }
}

export function filterGamesByGenre(payload) {
    return {
        type: FILTER_BY_GENRE, payload
    }
}

export function filterGamesByCreator(payload) {
    return {
        type: FILTER_BY_CREATOR, payload
    }
}

export function sortGamesByName(payload) {
    return {
        type: ORDER_BY_NAME, payload
    }
}

export function sortGamesByRating(payload) {
    return {
        type: ORDER_BY_RATING, payload
    }
}