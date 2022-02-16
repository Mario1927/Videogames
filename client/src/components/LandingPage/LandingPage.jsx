import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div>
            <h2>Welcome to Videogames App</h2>
            <Link to='/games'>
                <button type="submit">Enter</button>
            </Link>
        </div>
    )
};