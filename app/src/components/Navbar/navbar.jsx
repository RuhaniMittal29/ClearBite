import React from "react";
import './navbar.css';
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar fixed-top">
            <div className="desktopMenu">
                <NavLink to="/" className="desktopMenuListItem" activeClassName="active">Home</NavLink>
                <NavLink to="/analysis" className="desktopMenuListItem" activeClassName="active">Analysis</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;