import styled from "styled-components";

export const GamesByNameWrapper = styled.div`
    display: grid;
    grid-auto-columns: 33.33%;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . .";
`