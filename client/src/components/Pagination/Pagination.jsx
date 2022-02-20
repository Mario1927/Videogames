import React from "react";
import { PaginationButton, PaginationWrapper } from "../Styled/Pagination";

export default function Pagination({ gamesPerPage, totalGames, paginate }) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <PaginationWrapper>
            {pageNumbers.map(number => (
                <PaginationButton key={number} onClick={() => paginate(number)}>{number}</PaginationButton>
            ))}
        </PaginationWrapper>
    )
}