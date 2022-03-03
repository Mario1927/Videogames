import React from "react";
import { FiltersWrapper, FilterSelects, FilterWrapper, FilterLogo } from "../Styled/Filters";
import { filterGamesByCreator, filterGamesByGenre, sortGamesByName, sortGamesByRating } from '../../actions/index';
import FilterPNG from "../images/Filter.png";
import { useDispatch, useSelector } from "react-redux";

export default function Filters() {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    function onClick(event){
        event.preventDefault();
        document.querySelector(`.Logo`).classList.toggle('active')
        document.querySelector(`.Filters`).classList.toggle('active')
    }

    function handlerSortByName(event) {
        dispatch(sortGamesByName(event.target.value))
        document.querySelector('.SortByRating').selectedIndex = '0';
    }

    function handlerSortByRating(event) {
        dispatch(sortGamesByRating(event.target.value))
        document.querySelector('.SortByName').selectedIndex = '0';
    }

    function handlerFilterByGenre(event) {
        dispatch(filterGamesByGenre(event.target.value))
        document.querySelector('.SortByName').selectedIndex = '0';
        document.querySelector('.SortByRating').selectedIndex = '0';
    }

    function handlerFilterByCreated(event) {
        dispatch(filterGamesByCreator(event.target.value))
        document.querySelector('.SortByName').selectedIndex = '0';
        document.querySelector('.SortByRating').selectedIndex = '0';
    }

    return (
        <React.Fragment>
            <FilterLogo src={FilterPNG} alt="Filter" className="Logo active" onClick={onClick}/>
            <FiltersWrapper className="Filters active">
                <FilterWrapper>
                    <FilterSelects className="Genre" onChange={(event) => handlerFilterByGenre(event)}>
                    <option value={'All'}>Genres</option>
                    {genres.map(genre => {
                        return <option key={genre.id} value={genre.name}>{genre.name}</option>
                    })}
                    </FilterSelects>
                    <FilterSelects className="Created" onChange={(event) => handlerFilterByCreated(event)}>
                        <option value='All'>Origin</option>
                        <option value={true}>Created</option>
                        <option value={false}>Existing</option>
                    </FilterSelects>
                    <FilterSelects className="SortByName" onChange={(event) => handlerSortByName(event)}>
                        <option value='None'>Alphabetical</option>
                        <option value='ASC'>A-Z</option>
                        <option value='DESC'>Z-A</option>
                    </FilterSelects>
                    <FilterSelects className="SortByRating" onChange={(event) => handlerSortByRating(event)}>
                        <option value='None'>Rating</option>
                        <option value='ASC'>Ascendent</option>
                        <option value='DESC'>Descendent</option>
                    </FilterSelects>
                </FilterWrapper>
            </FiltersWrapper>
        </React.Fragment>
    )
}