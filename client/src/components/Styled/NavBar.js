import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 0.5fr 0.5fr 0.5fr 2fr;
    justify-items: center;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.7);
    /* position: fixed;
    top: 0;
    width: 100%; */
`

export const NavLogo = styled.img`
    height: 5vh;
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
`

export const NavForm = styled.form`
    padding: 0px;
    margin-left: 30px;
`
export const NavLink = styled(Link)`
    text-decoration: none;
`
export const NavInput = styled.input`
    height: 20px;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 15px;
    border-radius: 4px;
    border: 2px solid #00D1FF;
    background: none;
    color: white;
    ::placeholder{
        color: lightgray;
    }
`