import styled from "styled-components";
import { Link } from "react-router-dom";

export const GameCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
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
    width: 20vw;
    height: 25vh;
    border: 1px solid white;
    border-radius: 5px;

    &:hover {
        border: 2px solid red;
        opacity: 0.9;
    }
`

export const GameCardGenres = styled.div`
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 15px;
    display: grid;
    grid-template-columns: 5fr 1fr;
    width: 100%;
    height: 35px;
    align-items: center;
    justify-items: left;
    margin-left: 15px;
    color: #00D1FF;
`

export const GameCardLink = styled(Link)`
    text-decoration: none;
`

export const GameCardRating = styled.div`
    position: relative;
    color: #00D1FF;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 2px;
    padding: 1px;
`