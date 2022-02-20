import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: lightgray;
    height: 50px;
`
export const NavButton = styled.button`
    color: whitesmoke;
    background:rgba(0, 0, 0, 0.5);
    padding:5px 10px;
    font-size:15px;
    letter-spacing:2px;
    text-transform:uppercase;
    margin: 8px;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;

    &:hover{
        border:none;
        background:rgba(0, 0, 0, 0.4);
        background:#fff;
        color:#1b1b1b;
        cursor: pointer;
    }
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
`