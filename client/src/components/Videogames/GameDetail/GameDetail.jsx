import React, { useEffect } from 'react';
import { searchGameById } from '../../../actions/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GameDetailWrapper, GameDetailImg, GameDetailDescription, GameDetailTitle, GameDetailWrapperOthers, GameDetailOthers } from '../../Styled/GameDetail.js';

export default function GameDetail() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.gameDetail)
    const { idCiudad } = useParams();

    useEffect(() => {
        dispatch(searchGameById(idCiudad))
    }, [dispatch, idCiudad]);

    return (
        <GameDetailWrapper>
            <GameDetailTitle>
                {state.name}
            </GameDetailTitle>
            <GameDetailImg src={state.image} alt='Game'/>
            <GameDetailWrapperOthers>
                <GameDetailOthers>
                    Genres:
                    {state.genres}
                </GameDetailOthers>
                <GameDetailOthers>
                    Release date:
                    {state.releaseDate ? state.releaseDate : 'N/A'}
                </GameDetailOthers>
                <GameDetailOthers>
                    Rating:
                    {state.rating ? state.rating : 'N/A'}
                </GameDetailOthers>
            </GameDetailWrapperOthers>
            <GameDetailDescription>
                {state.description}
            </GameDetailDescription>
            <GameDetailOthers>
                Platforms:
                {state.platforms ? state.platforms : 'N/A'}
            </GameDetailOthers>
        </GameDetailWrapper>
    )
}