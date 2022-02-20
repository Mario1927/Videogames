import styled from "styled-components";

export const GamesWrapper = styled.div`
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
`

export const GamesCard = styled.div`
    display: grid;
    grid-auto-columns: 33.33%;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . .";
`