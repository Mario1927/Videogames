import styled from "styled-components";
import GamesBackground from '../images/Dark-Background.jpg'

export const GamesWrapper = styled.div`
    /* background-image: url(${GamesBackground}); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    @media (max-width: 800px) {
        & .GamesTitleWrapper {
            display: none;
        }
    }

    @media (min-width: 800px) {
        & .GamesTitleResponsive {
            display: none;
        }
    }
`

export const GamesCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 10px 10px;
    grid-auto-flow: row;
    align-items: center;
    grid-template-areas:
        ". . . .";
    margin-bottom: 5px;

    @media (max-width: 1500px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
        ". . .";
    }

    @media (max-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
        ". .";
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
`

export const GamesTitleWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    width: 80vw;
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
        display: flex;
    }
`

export const GamesTitle = styled.div`
    color: white;
    align-self: center;
    justify-self: center;
    text-align: center;
`