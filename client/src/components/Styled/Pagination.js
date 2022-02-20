import styled from "styled-components";

export const PaginationWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`

export const PaginationButton = styled.button`
    color: #111827;
    background-color: #fff;
    width: 35px;
    height: 35px;
    border: 1px solid black;
    border-radius: 1px;
    margin: 5px;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1.2px;
    box-sizing: border-box;
    transition: .3s;

    &:hover {
    border-color: #06f;
    color: #06f;
    fill: #06f;
    cursor: pointer;
    }
`