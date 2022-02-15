import React, { useEffect } from 'react';
import { searchGameById } from '../../actions/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function GameDetail() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.gameDetail)
    const { idCiudad } = useParams();

    useEffect(() => {
        dispatch(searchGameById(idCiudad))
    }, [dispatch, idCiudad]);

    return (
        <div>
            <div>
                <h2>{state.name}</h2>
            </div>
            <div>
                <img src={state.image} alt='Game'/>
            </div>
            <div>
                <p>{state.genres}</p>
            </div>
            <div>
                <p>{state.description}</p>
            </div>
            <div>
                <p>{state.releaseDate}</p>
            </div>
            <div>
                <p>{state.rating}</p>
            </div>
            <div>
                <p>{state.platforms}</p>
            </div>
        </div>
    )
}