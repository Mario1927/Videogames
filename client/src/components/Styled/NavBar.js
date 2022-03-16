import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr 2fr;
    justify-items: center;
    height: 55px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    align-content: center;

    @media (max-width: 800px) {
        grid-template-columns: 15% 70% 15%
    }
`

export const NavLinkWrapper = styled(NavWrapper)`
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 800px) {
        display: none;
    }
`

export const NavLogo = styled.img`
    height: 40px;

    @media (max-width: 800px) {
        width: 40px;
    }
`


export const NavButton = styled.button`
    color: whitesmoke;
    background: none;
    border: none;
    padding: 5px 10px;
    font-size: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 8px;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;

    &:hover{
        border: none;
        background: rgba(0, 0, 0, 0.4);
        background: #fff;
        color: #1b1b1b;
        cursor: pointer;
    }
`
export const NavInputButton = styled(NavButton)`
    color: #00D1FF;

    @media (max-width: 800px) {
        display: none;
    }
`

export const NavForm = styled.form`
    padding: 0px;
    height: 55px;
    display: flex;
    align-items: center;
    margin: 0;
    justify-content: center;
`
export const NavLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
`
export const NavInput = styled.input`
    height: 20px;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 15px;
    border-radius: 4px;
    border: 1px solid #00D1FF;
    background: none;
    color: white;
    ::placeholder{
        color: lightgray;
    }
`

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 55px;
    background: none;
    border: none;
    color: #00D1FF;
    font-size: 45px;
    line-height: 55px;
    cursor: pointer;

    @media (min-width: 800px) {
        display: none;
    }
`

export const OpenDivWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;

    @media (min-width: 800px) {
        display: none;
    }
`