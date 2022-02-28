import styled from "styled-components";

export const FiltersWrapper = styled.div`
    display: none;
    margin-top: 10px;
    justify-content: right;
    align-items: center;
    &.active {
        display: flex;
    }
`

export const FilterSelects = styled.select`
    margin-left: 2.5px;
    margin-right: 2.5px;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    border-color: #00D1FF;
    border-radius: 3px;
    width: 130px;
`

export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const FilterLogo = styled.img`
    display: block;
    width: 75px;
    height: 85px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    align-self: flex-end;

    &:hover {
        cursor: pointer;
        border: 2px solid #00D1FF;
    }

    &.active {
        border: 2px solid #00D1FF;
    }
`