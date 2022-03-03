import React from "react";
import { PaginationButton, PaginationWrapper } from "../Styled/Pagination";

export default function Pagination({ gamesPerPage, totalGames, currentPage, setCurrentPage, loading }) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pageNumbers.push(i);
    }

    if(!loading){
        var buttons = document.querySelectorAll(`.PagButton`);
        buttons?.forEach(button => button.classList.remove('active'));

        var button = document.querySelector(`.B${currentPage}`);
        button?.classList.add('active');
    }
   
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    return (
        <PaginationWrapper>
            {pageNumbers.map(number => (
                <PaginationButton key={number} className={`PagButton B${number}`} onClick={() => paginate(number)}>{number}</PaginationButton>
            ))}
        </PaginationWrapper>
    )
}