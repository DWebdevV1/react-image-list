import React from "react";
import './Navbar.scss';

export default function Navbar() {
    return (
        <div className="Navbar-Wrapper">
            <nav>
                <span><a href="http://localhost:3000/">Images</a></span>
                <span><a href="http://localhost:3000/">List</a></span>
                <span><a href="http://localhost:3000/">About</a></span>
                <span><a href="http://localhost:3000/">Help</a></span>
            </nav>
        </div>
    );
}
