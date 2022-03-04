import React from "react";
import { FiltersWrapper, FilterSelects, FilterWrapper, FilterLogo } from "../Styled/Filters";
import { filterGamesByCreator, filterGamesByGenre, sortGamesByName, sortGamesByRating } from '../../actions/index';
import FilterPNG from "../images/Filter.png";
import { useDispatch, useSelector } from "react-redux";

export default function Filters() {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    function handlerSortByName(value) {
        dispatch(sortGamesByName(value))
        document.querySelector('.SortByRating').selectedIndex = '0';
    }

    function handlerSortByRating(value) {
        dispatch(sortGamesByRating(value))
        document.querySelector('.SortByName').selectedIndex = '0';
    }

    function handlerFilterByGenre(value) {
        dispatch(filterGamesByGenre(value))
        document.querySelector('.SortByName').selectedIndex = '0';
        document.querySelector('.SortByRating').selectedIndex = '0';
    }

    function handlerFilterByCreated(value) {
        dispatch(filterGamesByCreator(value))
        document.querySelector('.SortByName').selectedIndex = '0';
        document.querySelector('.SortByRating').selectedIndex = '0';
    }

    return (
        <React.Fragment>
            <FilterLogo src={FilterPNG} alt="Filter" className="Logo active"/>
            <FiltersWrapper className="Filters active">
                <FilterWrapper>
                    <FilterSelects className="Genre" onChange={(event) => handlerFilterByGenre(event.target.value)}>
                    <option value={'All'}>Genres</option>
                    {genres.map(genre => {
                        return <option key={genre.id} value={genre.name}>{genre.name}</option>
                    })}
                    </FilterSelects>
                    <FilterSelects className="Created" onChange={(event) => handlerFilterByCreated(event.target.value)}>
                        <option value='All'>Creator</option>
                        <option value={true}>Created</option>
                        <option value={false}>Existing</option>
                    </FilterSelects>
                    <FilterSelects className="SortByName" onChange={(event) => handlerSortByName(event.target.value)}>
                        <option value='None'>Alphabetical</option>
                        <option value='ASC'>A-Z</option>
                        <option value='DESC'>Z-A</option>
                    </FilterSelects>
                    <FilterSelects className="SortByRating" onChange={(event) => handlerSortByRating(event.target.value)}>
                        <option value='None'>Rating</option>
                        <option value='DESC'>Highest</option>
                        <option value='ASC'>Lowest</option>
                    </FilterSelects>
                </FilterWrapper>
            </FiltersWrapper>
        </React.Fragment>
    )
}