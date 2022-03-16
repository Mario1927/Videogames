import React, { useEffect, useState } from "react";
import Game from "../GameCard/Game";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import Loanding from "../../Loading/Loading";
import NotFound from "../../NotFound/NotFound";
import { getGames, getGenres } from '../../../actions/index';
import { GamesCard, GamesTitle, GamesTitleWrapper, GamesWrapper } from "../../Styled/Games";
import Filters from "../../Filters/Filters";

export default function Games() {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getGames()).then(() => setLoading(false))
    }, [dispatch]);

    useEffect(() => {
        setCurrentPage(1);
    }, [games])

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    return (
        <GamesWrapper>
            <GamesTitleWrapper className="GamesTitleWrapper">
                <div className="Paginate">
                    <Pagination className="Paginate" gamesPerPage={gamesPerPage} totalGames={games.length} currentPage={currentPage} setCurrentPage={setCurrentPage} loading={loading}/>
                </div>
                <GamesTitle className="Title">
                    <h1>Games Database</h1>
                    <span>Over hundred games displayed and 500.000 searcheables</span>
                </GamesTitle>
                <div className="Filter">
                   <Filters /> 
                </div>
            </GamesTitleWrapper>
            
            
            <div className="GamesTitleResponsive">
                <GamesTitle className="Title">
                    <h1>Games Database</h1>
                </GamesTitle>
                <Pagination className="Paginate" gamesPerPage={gamesPerPage} totalGames={games.length} currentPage={currentPage} setCurrentPage={setCurrentPage} loading={loading}/>
                <Filters className="Filter"/>
            </div>
            

            <GamesCard>
                {loading ? <Loanding/> : currentGames.length ? currentGames.map(game => <Game key={game.id} name={game.name} image={game.image} genres={game.genres.join(', ')} rating={game.rating} id={game.id} />) : <NotFound/>}
            </GamesCard>
        </GamesWrapper>
    )
};