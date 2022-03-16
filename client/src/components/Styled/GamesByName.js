import styled from "styled-components";

export const GamesByNameWrapper = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 10px 15px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . . .";
    align-items: center;
    justify-content: center;
    width: 100vw;

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