import React, {useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGames, getGenres } from '../../actions/index'; 


export default function LandingPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getGames())
    }, [dispatch]);

    return (
        <div>
            <h2>Welcome to Videogames App</h2>
            <Link to='/games'>
                <button type="submit">Enter</button>
            </Link>
        </div>
    )
};