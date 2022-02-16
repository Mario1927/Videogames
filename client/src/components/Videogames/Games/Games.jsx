import React, { useEffect } from "react";
import Game from "../GameCard/Game";
import { useSelector, useDispatch } from "react-redux";
import { filterGamesByCreator, filterGamesByGenre, getGames, getGenres, sortGamesByName, sortGamesByRating } from '../../../actions/index'; 

export default function Games() {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)
    const genres = useSelector(state => state.genres)
    // const sorted = useSelector(state => state)

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getGames())
    }, [dispatch]);

    function handlerSortByName(event) {
        dispatch(sortGamesByName(event.target.value))
        document.querySelector('.SortByRating').selectedIndex = '0';
    }

    function handlerSortByRating(event) {
        dispatch(sortGamesByRating(event.target.value))
        document.querySelector('.SortByName').selectedIndex = '0';
    }

    function handlerFilterByGenre(event) {
        dispatch(filterGamesByGenre(event.target.value))
        document.querySelector('.SortByName').selectedIndex = '0';
        document.querySelector('.SortByRating').selectedIndex = '0';
    }

    function handlerFilterByCreated(event) {
        dispatch(filterGamesByCreator(event.target.value))
        document.querySelector('.SortByName').selectedIndex = '0';
        document.querySelector('.SortByRating').selectedIndex = '0';
    }

    return (
        <div>
            <div>
                <select onChange={(event) => handlerFilterByGenre(event)}>
                    <option value={'All'}>All</option>
                    {genres.map(genre => {
                        return <option key={genre.id} value={genre.name}>{genre.name}</option>
                    })}
                </select>
            </div>
            <div>
                <select onChange={(event) => handlerFilterByCreated(event)}>
                    <option value='All'>All</option>
                    <option value={true}>Created</option>
                    <option value={false}>Existing</option>
                </select>
            </div>
            <div>
                <select className="SortByName" onChange={(event) => handlerSortByName(event)}>
                    <option value='None'>None</option>
                    <option value='ASC'>Ascendent</option>
                    <option value='DESC'>Descendent</option>
                </select>
            </div>
            <div>
                <select className="SortByRating" onChange={(event) => handlerSortByRating(event)}>
                    <option value='None'>None</option>
                    <option value='ASC'>Ascendent</option>
                    <option value='DESC'>Descendent</option>
                </select>
            </div>
            <div>
                {games.length ? games.map(game => <Game key={game.id} name={game.name} image={game.image} genres={game.genres.join(', ')} id={game.id} />) : <h2>Loading</h2>}
            </div>
        </div>
    )
};