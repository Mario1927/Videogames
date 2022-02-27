import styled from "styled-components";

export const GameDetailWrapper = styled.div`
    width: 50vw;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    border: 2px solid black;
    border-radius: 5px;
    position: absolute;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 25px;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.75);
`

export const GameDetailTitle = styled.h2`
    font-size: 30px;
    font-weight: 800;
    justify-content: center;
    display: flex;
    color: white;
`

export const GameDetailImg = styled.img`
    width: 50vw;
    height: auto;
`

export const GameDetailDescription = styled.p`
    color: whitesmoke;
    font-size: 15px;
    text-align: justify;
    font-weight: 200;
`

export const GameDetailWrapperOthers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . .";
`

export const GameDetailOthers = styled.p`
    justify-content: center;
    display: flex;
    padding-top: 10px;
    border: 1px solid black;
    background-color: antiquewhite;
`

export const GameDetailLabel = styled.span`
    justify-content: center;
    display: flex;
`