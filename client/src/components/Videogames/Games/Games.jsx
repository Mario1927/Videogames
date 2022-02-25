import React, { useEffect, useState } from "react";
import Game from "../GameCard/Game";
import { useSelector, useDispatch } from "react-redux";
import { filterGamesByCreator, filterGamesByGenre, getGames, getGenres, sortGamesByName, sortGamesByRating } from '../../../actions/index';
import Pagination from "../../Pagination/Pagination";
import Loanding from "../../Loading/Loading";
import NotFound from "../../NotFound/NotFound";
import { GamesCard, GamesFiltersWrapper, GamesSelects, GamesWrapper } from "../../Styled/Games";

export default function Games() {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)
    const genres = useSelector(state => state.genres)
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getGames()).then(() => setLoading(false))
    }, [dispatch]);

    

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        setCurrentPage(1);
    }

    function handlerFilterByCreated(event) {
        dispatch(filterGamesByCreator(event.target.value))
        document.querySelector('.SortByName').selectedIndex = '0';
        document.querySelector('.SortByRating').selectedIndex = '0';
        setCurrentPage(1);
    }

    return (
        <GamesWrapper>
            <GamesFiltersWrapper>
                <GamesSelects onChange={(event) => handlerFilterByGenre(event)}>
                    <option value={'All'}>All</option>
                    {genres.map(genre => {
                        return <option key={genre.id} value={genre.name}>{genre.name}</option>
                    })}
                </GamesSelects>
                <GamesSelects onChange={(event) => handlerFilterByCreated(event)}>
                    <option value='All'>All</option>
                    <option value={true}>Created</option>
                    <option value={false}>Existing</option>
                </GamesSelects>
                <GamesSelects className="SortByName" onChange={(event) => handlerSortByName(event)}>
                    <option value='None'>None</option>
                    <option value='ASC'>Ascendent</option>
                    <option value='DESC'>Descendent</option>
                </GamesSelects>
                <GamesSelects className="SortByRating" onChange={(event) => handlerSortByRating(event)}>
                    <option value='None'>None</option>
                    <option value='ASC'>Ascendent</option>
                    <option value='DESC'>Descendent</option>
                </GamesSelects>
            </GamesFiltersWrapper>
            <GamesCard>
                {loading ? <Loanding/> : currentGames.length ? currentGames.map(game => <Game key={game.id} name={game.name} image={game.image} genres={game.genres.join(', ')} id={game.id} />) : <NotFound/>}
            </GamesCard>
            <Pagination gamesPerPage={gamesPerPage} totalGames={games.length} paginate={paginate}/>
        </GamesWrapper>
    )
};