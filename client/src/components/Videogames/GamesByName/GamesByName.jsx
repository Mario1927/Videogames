import React, { useEffect } from "react";
import Game from "../GameCard/Game";
import { useSelector, useDispatch } from "react-redux";
import { searchGamesByName } from '../../../actions/index'; 
import { useParams } from "react-router-dom";
import { GamesByNameWrapper } from "../../Styled/GamesByName";

export default function GamesByName() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.gamesByName)
    const { name } = useParams();

    useEffect(() => {
        dispatch(searchGamesByName(name))
    }, [dispatch, name]);

    return (
        <GamesByNameWrapper>
            {state.length ? state.map(game => <Game key={game.id} name={game.name} image={game.image} genres={game.genres.join(', ')} id={game.id} rating={game.rating}/>) : <h2>Loading</h2>}
        </GamesByNameWrapper>
    )
};