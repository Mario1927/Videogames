import React, { useEffect } from "react";
import Game from "./Game";
import { useSelector, useDispatch } from "react-redux";
import { getGames } from '../../actions/index.js'; 

export default function Games() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.games)

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch]);

    return (
        <div>
            {state.length? state.map(game => <Game name={game.name} image={game.image} genres={game.genres.toString()} />) : <h2>Loading</h2>}
        </div>
    )
}