import React from "react";

export default function Pagination({ gamesPerPage, totalGames, paginate }) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            {pageNumbers.map(number => (
                <button key={number} onClick={() => paginate(number)}>{number}</button>
            )
            )}
        </div>
    )
}