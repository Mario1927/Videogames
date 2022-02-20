import React from 'react';
import { GameCardName, GameCardWrapper, GameCardImg, GameCardGenres, GameCardLink } from '../../Styled/Game';

export default function Game({name, image, genres, id}) {

    return (
        <GameCardWrapper>
            <GameCardName>
                {name}
            </GameCardName>
            <GameCardLink to={`/games/${id}`}>
                <GameCardImg src={image} alt='Game'/>
            </GameCardLink>
            <GameCardGenres>
                {genres}
            </GameCardGenres>
        </GameCardWrapper>
    )
}