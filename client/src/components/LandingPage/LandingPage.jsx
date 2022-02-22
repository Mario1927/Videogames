import React, {useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames, getGenres, getPlatforms } from '../../actions/index';
import { LandingTitle, LandingWrapper, LandingButton, LandingLink } from "../Styled/LandingPage";

export default function LandingPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getGames())
        dispatch(getPlatforms())
    }, [dispatch]);

    return (
        <LandingWrapper>
            <LandingTitle>
                WELCOME TO VIDEOGAME'S APP
            </LandingTitle>
            <LandingLink to={'/games'}>
                <LandingButton type="submit">ENTER</LandingButton>
            </LandingLink>
        </LandingWrapper>
    )
};