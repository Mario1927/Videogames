import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingWrapper = styled.div`
    background-image: url('https://wallpaper.dog/large/20525140.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const LandingTitle = styled.h1`
    color: rgb(236, 253, 253);
    align-items: center;
    align-content: center;
    font-family: "Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;
    font-size: 50px;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
`

export const LandingLink = styled(Link)`
    text-decoration: none;
`

export const LandingButton = styled.button`
    color: black;
    background-color: #fff;
    width: 125px;
    height: 35px;
    border: 2px solid black;
    border-radius: 1px;
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

