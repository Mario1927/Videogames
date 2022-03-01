import React, { useEffect, useState } from "react";
import Game from "../GameCard/Game";
import { useSelector, useDispatch } from "react-redux";
import { searchGamesByName } from '../../../actions/index'; 
import { useParams } from "react-router-dom";
import { GamesByNameWrapper } from "../../Styled/GamesByName";
import Loanding from "../../Loading/Loading";
import NotFound from "../../NotFound/NotFound";

export default function GamesByName() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.gamesByName)
    const { name } = useParams();
    const [loading, setLoadig] = useState(true);

    useEffect(() => {
        dispatch(searchGamesByName(name)).then(() => setLoadig(false)).catch(() => setLoadig(false))
    }, [dispatch, name]);

    return (
        <GamesByNameWrapper>
            {loading ? <Loanding /> : !state.length ? <NotFound/> : state.map(game => <Game key={game.id} name={game.name} image={game.image} genres={game.genres.join(', ')} id={game.id} rating={game.rating}/>)}
        </GamesByNameWrapper>
    )
};