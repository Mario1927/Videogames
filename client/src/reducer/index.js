import { GET_ALL_GAMES, GET_GAMES_BY_NAME, GET_GAME_BY_ID, GET_ALL_GENRES, FILTER_BY_GENRE, FILTER_BY_CREATOR, ORDER_BY_NAME, ORDER_BY_RATING, GET_ALL_PLATFORMS } from '../types/types.js';

const initialState = {
    games: [],
    gameDetail: {},
    gamesByName: [],
    allGames: [],
    genres: [],
    platforms: [],
    filters: {filteredByCreator: 'All', filteredByGenre: 'All'},
    filteredByCreator: [],
    filteredByGenre: []
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
        case GET_ALL_PLATFORMS:
            return {
                ...state, platforms: action.payload
            }
        case ORDER_BY_NAME:
            var sortByName = []

            if(action.payload === 'ASC') sortByName = [...state.games.sort((a, b) => {return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0})]
            else if(action.payload === 'DESC') sortByName = [...state.games.sort((a, b) => {return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 0})]
            else sortByName = state.games

            return {
                ...state, games: sortByName
            }
        case ORDER_BY_RATING:
            var sortByRating = []

            if(action.payload === 'ASC') sortByRating = [...state.games.sort((a, b) => {return a.rating - b.rating})]
            else if(action.payload === 'DESC') sortByRating = [...state.games.sort((a, b) => {return b.rating - a.rating})]
            else sortByRating = state.games

            return {
                ...state, games: sortByRating
            }
        case FILTER_BY_CREATOR:
            var filteredByCreator = action.payload === 'All' ? state.allGames : state.allGames.filter(game => game.created.toString() === action.payload);
            var resultByCreator = filteredByCreator;

            for (let key in state.filters) {
                if(key !== 'filteredByCreator' && state.filters[key] !== 'All') resultByCreator = resultByCreator.filter(g => state[key].some(g2 => g2.id === g.id));
            }

            return {
                ...state, games: resultByCreator, filteredByCreator, filters: {...state.filters, filteredByCreator: action.payload} 
            }
        case FILTER_BY_GENRE:
            var filteredByGenre = action.payload === 'All' ? state.allGames : state.allGames.filter(game => game.genres.includes(action.payload));
            var resultByGenre = filteredByGenre;
            
            for (let key in state.filters) {
                if(key !== 'filteredByGenre' && state.filters[key] !== 'All') resultByGenre = resultByGenre.filter(g => state[key].some(g2 => g2.id === g.id));
            }
            
            return {
                ...state, games: resultByGenre, filteredByGenre, filters: {...state.filters, filteredByGenre: action.payload}
            }
        default:
            return state
    }
}

export default rootReducer;