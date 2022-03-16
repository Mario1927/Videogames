import styled from "styled-components";
import { Link } from "react-router-dom";

export const GameCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    align-items: center;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.75);
`

export const GameCardName = styled.h2`
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 20px;
    color: #00D1FF;
`

export const GameCardImg = styled.img`
    width: 100%;
    height: auto;
    border: 1px solid white;
    border-radius: 5px;

    &:hover {
        border: 2px solid red;
        opacity: 0.9;
    }

    @media (min-width: 800px) {
        height: 300px;
    }

    
`

export const GameCardGenres = styled.div`
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 15px;
    display: grid;
    grid-template-columns: 5fr 1fr;
    width: auto;
    height: 35px;
    align-items: center;
    justify-items: center;
    margin-left: 0px;
    color: #00D1FF;
`

export const GameCardLink = styled(Link)`
    text-decoration: none;
    width: 100%;
`

export const GameCardRating = styled.div`
    position: relative;
    color: #00D1FF;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 2px;
    padding: 1px;
`