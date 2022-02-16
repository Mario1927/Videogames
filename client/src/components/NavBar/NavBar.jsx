import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";



export default function NavBar() {

    const [name, setName] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        setName('');
    };

    return (
        <div>
            <h4>Videogames App</h4>
            <Link to={'/games'}>
                <span>Home</span>
            </Link>
            <form>
                <input 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder='Search games by name...'
                    type='text'
                />
                <Link to={`/search/${name}`}>
                    <button type="submit" onSubmit={(event) => submitHandler(event)}>Search</button>
                </Link>
            </form>
            <Outlet />
        </div>
    )
}