import React from "react";
import { PaginationButton, PaginationWrapper } from "../Styled/Pagination";

export default function Pagination({ gamesPerPage, totalGames, paginate }) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <PaginationWrapper>
            {pageNumbers.map(number => ( number === 1 ?
                <PaginationButton key={number} className={`Button${number} active`} onClick={() => paginate(number)}>{number}</PaginationButton> :
                <PaginationButton key={number} className={`Button${number}`} onClick={() => paginate(number)}>{number}</PaginationButton>
            ))}
        </PaginationWrapper>
    )
}