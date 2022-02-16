import React, { useEffect } from "react";
import Game from "../GameCard/Game";
import { useSelector, useDispatch } from "react-redux";
import { filterGamesByCreator, filterGamesByGenre, getGames, getGenres } from '../../../actions/index'; 

export default function Games() {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)
    const genres = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getGames())
    }, [dispatch]);

    function handlerFilterByGenre(event) {
        dispatch(filterGamesByGenre(event.target.value))
    }

    function handlerFilterByCreated(event) {
        dispatch(filterGamesByCreator(event.target.value))
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
                    <option value='Created'>Created</option>
                    <option value='Existing'>Existing</option>
                </select>
            </div>
            <div>
                {games.length ? games.map(game => <Game key={game.id} name={game.name} image={game.image} genres={game.genres.join(', ')} id={game.id} />) : <h2>Loading</h2>}
            </div>
        </div>
    )
};