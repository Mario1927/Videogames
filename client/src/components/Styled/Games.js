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

export const GamesTitleWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    width: 96vw;
    grid-template-areas: 
        ". a .";
    margin-bottom: 15px;
    
    & > .Paginate{
        align-self: center;
        justify-self: start;
    }

    & > .Filter{
        align-self: center;
        justify-self: end;
    }
`

export const GamesTitle = styled.div`
    color: white;
    align-self: center;
    justify-self: center;
    text-align: center;
`