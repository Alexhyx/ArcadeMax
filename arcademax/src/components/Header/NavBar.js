import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import LoginButton from './LoginButton';  // Ensure LoginButton is exported correctly from its file

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/forum">Forum</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><LoginButton /></li>  // Adding LoginButton to the navbar
            </ul>
        </nav>
    );
}

export default NavBar;
