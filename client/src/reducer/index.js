import { GET_ALL_GAMES, GET_GAMES_BY_NAME, GET_GAME_BY_ID, GET_ALL_GENRES, FILTER_BY_GENRE, FILTER_BY_CREATOR } from '../types/types.js';

const initialState = {
    games: [],
    gameDetail: {},
    gamesByName: [],
    allGames: [],
    genres: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_GAMES:
            return {
                ...state, games: action.payload, allGames: action.payload
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
        case FILTER_BY_CREATOR:
            const  allGamesCreator = state.allGames;
            const filteredGamesCreator = action.payload === 'Created' ? allGamesCreator.filter(game => game.created) : allGamesCreator.filter(game => !game.created)

            return {
                ...state, games: action.payload === 'All' ? allGamesCreator : filteredGamesCreator
            }
        case FILTER_BY_GENRE:
            const allGamesGenre = state.allGames;
            const filteredGamesGenre = action.payload === 'All' ? allGamesGenre : allGamesGenre.filter(game => game.genres.includes(action.payload))

            return {
                ...state, games: filteredGamesGenre
            }
        default:
            return state
    }
}

export default rootReducer;