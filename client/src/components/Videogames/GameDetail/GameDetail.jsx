import React, { useEffect, useState } from 'react';
import { searchGameById } from '../../../actions/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GameDetailWrapper, GameDetailImg, GameDetailDescription, GameDetailTitle, GameDetailWrapperOthers, GameDetailOthers, Wrapper } from '../../Styled/GameDetail.js';
import NotFound from '../../NotFound/NotFound.jsx';
import Loanding from '../../Loading/Loading.jsx';

export default function GameDetail() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.gameDetail)
    const { idCiudad } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(searchGameById(idCiudad)).then(() => setLoading(false)).catch(setLoading(false))
    }, [dispatch, idCiudad]);

    return (
        loading ? <Loanding/> : !state.name ? <NotFound/> :
        <Wrapper>
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
        </Wrapper>
    )
}