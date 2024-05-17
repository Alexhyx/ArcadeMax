import React from "react";
import './NavBar.css';

const NavBar = () => {
    return(
        <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="forum.html">Forum</a></li>
            <li><a href="search.html">Search</a></li>
            <li><a href="settings.html">Settings</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
        </nav>
    );
}
 
export default NavBar;