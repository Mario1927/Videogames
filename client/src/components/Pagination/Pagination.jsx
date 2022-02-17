import React from "react";

export default function Pagination({ gamesPerPage, totalGames, paginate }) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            {pageNumbers.map(number => (
                <li key={number}>
                    <button onClick={() => paginate(number)}>{number}</button>
                </li>
            )
            )}
        </div>
    )
}