import { GET_ALL_GAMES, GET_GAMES_BY_NAME, GET_GAME_BY_ID, GET_ALL_GENRES } from '../types/types.js';

const initialState = {
    games: [],
    gameDetail: [],
    gamesByName: [],
    genres: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_GAMES:
            return {
                ...state, games: action.payload
            };
        case GET_GAME_BY_ID:
            return {
                ...state, gameDetail: action.payload
            };
        case GET_GAMES_BY_NAME:
            return {
                ...state, gamesByName: action.payload
            }
        case GET_ALL_GENRES:
            return {
                ...state, genres: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;