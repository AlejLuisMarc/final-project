// Main
import React from "react";
import { Link } from "react-router-dom";
// CSS
import './Navbar.css';

export function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/music'>Music</Link>
                <Link to='/shows'>Shows</Link>
                <Link to='/merch'>Merch</Link>
            </div>
        </>
    );
};