import styled from "styled-components";
import GamesBackground from '../images/Dark-Background.jpg'

export const GamesWrapper = styled.div`
    /* background-image: url(${GamesBackground}); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100vw;
`

export const GamesFiltersWrapper = styled.div`
    display: flex;
    margin-top: 10px;
`

export const GamesSelects = styled.select`
    margin-left: 2.5px;
    margin-right: 2.5px;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    border-color: #00D1FF;
`

export const GamesCard = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    align-items: center;
    grid-template-areas:
        ". . .";
`