import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavButton, NavForm, NavInput, NavLink, NavWrapper } from "../Styled/NavBar";

export default function NavBar() {

    const [name, setName] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        setName('');
    };

    return (
        <React.Fragment>
            <NavWrapper>
                <NavLink to={'/games'}>
                    <NavButton>Home</NavButton>
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
                        <NavButton type="submit" onSubmit={(event) => submitHandler(event)}>Search</NavButton>
                    </NavLink>
                </NavForm>
            </NavWrapper>
            <Outlet/>
        </React.Fragment>
    )
}