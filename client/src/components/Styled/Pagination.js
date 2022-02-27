import styled from "styled-components";

export const PaginationWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`

export const PaginationButton = styled.button`
    color: white;
    background-color: transparent;
    width: 25px;
    height: 25px;
    border: 1px solid white;
    border-radius: 20px;
    margin: 5px;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.2px;
    box-sizing: border-box;
    transition: .2s;

    &:hover {
    border-color: #00D1FF;
    color: #06f;
    fill: #06f;
    cursor: pointer;
    }

    &.active {
        color: #00D1FF;
        border-color: #00D1FF;
        transition: 0.05s;
    }
`