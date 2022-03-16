import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavButton, NavForm, NavInput, NavLink, NavWrapper, NavInputButton, NavLogo, OpenLinksButton, NavLinkWrapper, OpenDivWrapper } from "../Styled/NavBar";
import LogoMario from "../images/Gamepedia.png"

export default function NavBar() {

    const [name, setName] = useState('');
    const [extendedNavBar, setExtendedNavBar] = useState(false);

    const Logo = LogoMario;

    function submitHandler(event) {
        event.preventDefault();
    };

    function onClick(event) {
        event.target.classList.toggle('active')
    }

    return (
        <React.Fragment>
            <NavWrapper>
                <NavLink to={'/games'}>
                    <NavLogo src={Logo} alt='Logo'/>
                </NavLink>
                <NavLinkWrapper>
                    <NavLink to={'/games'}>
                        <NavButton onClick={(event) => onClick(event)}>Home</NavButton>
                    </NavLink>
                    <NavLink to={'/create'}>
                        <NavButton>Create Game</NavButton>
                    </NavLink>
                    <NavLink to={'/about'}>
                        <NavButton>About</NavButton>
                    </NavLink>
                </NavLinkWrapper>
                <NavForm>
                    <NavInput 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder='Search by name...'
                        type='text'
                    />
                    <NavLink to={`/search/${name}`}>
                        <NavInputButton type="submit" onSubmit={(event) => submitHandler(event)}>Search</NavInputButton>
                    </NavLink>
                </NavForm>
                    <OpenLinksButton onClick={() => {setExtendedNavBar((state) => !state)}}>&#8801;</OpenLinksButton>
            </NavWrapper>
            { extendedNavBar ? 
                <OpenDivWrapper>
                    <NavLink to={'/games'}>
                        <NavButton onClick={(event) => onClick(event)}>Home</NavButton>
                    </NavLink>
                    <NavLink to={'/create'}>
                        <NavButton>Create Game</NavButton>
                    </NavLink>
                    <NavLink to={'/about'}>
                        <NavButton>About</NavButton>
                    </NavLink>
                </OpenDivWrapper> : null
            }
            <Outlet/>
        </React.Fragment>
    )
}