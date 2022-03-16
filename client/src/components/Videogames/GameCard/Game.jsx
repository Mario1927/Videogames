import React from 'react';
import { GameCardName, GameCardWrapper, GameCardImg, GameCardGenres, GameCardLink, GameCardRating } from '../../Styled/Game';

export default function Game({name, image, genres, rating, id}) {

    return (
        <GameCardWrapper>
            <GameCardName>
                {name}
            </GameCardName>
            <GameCardLink to={`/games/${id}`}>
                <GameCardImg src={image} alt='Game'/>
            </GameCardLink>
            <GameCardGenres>
                <React.Fragment>🔖{genres}</React.Fragment>
                <GameCardRating>⭐{rating}</GameCardRating>
            </GameCardGenres>
        </GameCardWrapper>
    )
}