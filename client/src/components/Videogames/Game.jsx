import React from 'react';

export default function Game({name, image, genres}) {

    return (
        <div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <img src={image} alt='Game'/>
            </div>
            <div>
                <p>{genres}</p>
            </div>
        </div>
    )
}