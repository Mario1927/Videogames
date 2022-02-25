import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavButton, NavForm, NavInput, NavLink, NavWrapper, NavInputButton, NavLogo } from "../Styled/NavBar";
import LogoMario from "../images/Gamepedia.png"

export default function NavBar() {

    const [name, setName] = useState('');

    const Logo = LogoMario;

    function submitHandler(event) {
        event.preventDefault();
        setName('');
    };

    function onClick(event) {
        event.target.classList.toggle('active')
        console.log(event.target.classList)
    }

    return (
        <React.Fragment>
            <NavWrapper>
                <NavLink to={'/games'}>
                    <NavLogo src={Logo} alt='Logo'/>
                </NavLink>
                <NavLink to={'/games'}>
                    <NavButton onClick={(event) => onClick(event)}>Home</NavButton>
                </NavLink>
                <NavLink to={'/create'}>
                    <NavButton>Create Game</NavButton>
                </NavLink>
                <NavLink to={'/about'}>
                    <NavButton>About</NavButton>
                </NavLink>
                <NavForm>
                    <NavInput 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder='Search games by name...'
                        type='text'
                    />
                    <NavLink to={`/search/${name}`}>
                        <NavInputButton type="submit" onSubmit={(event) => submitHandler(event)}>Search</NavInputButton>
                    </NavLink>
                </NavForm>
            </NavWrapper>
            <Outlet/>
        </React.Fragment>
    )
}