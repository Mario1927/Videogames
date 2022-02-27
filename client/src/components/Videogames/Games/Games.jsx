import React, { useEffect, useState } from "react";
import Game from "../GameCard/Game";
import { useSelector, useDispatch } from "react-redux";
import { filterGamesByCreator, filterGamesByGenre, getGames, getGenres, sortGamesByName, sortGamesByRating } from '../../../actions/index';
import Pagination from "../../Pagination/Pagination";
import Loanding from "../../Loading/Loading";
import NotFound from "../../NotFound/NotFound";
import { GamesCard, GamesTitle, GamesTitleWrapper, GamesWrapper, PaginationTop } from "../../Styled/Games";
import Filters from "../../Filters/Filters";

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
            <GamesTitleWrapper>
                <div className="Paginate">
                    <Pagination className="Paginate" gamesPerPage={gamesPerPage} totalGames={games.length} paginate={paginate}/>
                </div>
                <GamesTitle className="Title">
                    <h1>Games Database</h1>
                    <span>Over hundred games displayed and 500.000 searcheables</span>
                </GamesTitle>
                <div className="Filter">
                   <Filters handlerFilterByGenre={handlerFilterByGenre} handlerFilterByCreated={handlerFilterByCreated} handlerSortByName={handlerSortByName} handlerSortByRating={handlerSortByRating} genres={genres}/> 
                </div>
            </GamesTitleWrapper>
            
            <GamesCard>
                {loading ? <Loanding/> : currentGames.length ? currentGames.map(game => <Game key={game.id} name={game.name} image={game.image} genres={game.genres.join(', ')} id={game.id} />) : <NotFound/>}
            </GamesCard>
            <Pagination gamesPerPage={gamesPerPage} totalGames={games.length} paginate={paginate}/>
        </GamesWrapper>
    )
};