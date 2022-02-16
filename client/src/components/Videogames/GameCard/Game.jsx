import React from 'react';
import { Link } from 'react-router-dom';

export default function Game({name, image, genres, id}) {

    return (
        <div>
            <div>
                <h2>{name}</h2>
            </div>
            <Link to={`/games/${id}`}>
                <div>
                    <img src={image} alt='Game'/>
                </div>
            </Link>
            
            <div>
                <p>{genres}</p>
            </div>
        </div>
    )
}