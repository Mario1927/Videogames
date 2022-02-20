import styled from "styled-components";
import { Link } from "react-router-dom";

export const GameCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 33vw;
    margin-left: 1vw;
`

export const GameCardName = styled.h2`
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 20px;
`

export const GameCardImg = styled.img`
    width: 30vw;
    height: 35vh;
`

export const GameCardGenres = styled.p`
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 15px;
`

export const GameCardLink = styled(Link)`
    text-decoration: none;
`