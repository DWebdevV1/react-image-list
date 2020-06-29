import React from "react";
import './Navbar.scss';
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="NavBar-Wrapper">

            <NavLink to="/images" activeClassName="Active-Link">
                <span>Images</span>
            </NavLink>

            <NavLink to="/more" activeClassName="Active-Link">
                <span>More</span>
            </NavLink>

            <NavLink to="/about" activeClassName="Active-Link">
                <span>About</span>
            </NavLink>

            <NavLink to="/help" activeClassName="Active-Link">
                <span>Help</span>
            </NavLink>

        </div>
    );
}
