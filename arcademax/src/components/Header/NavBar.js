import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';



const NavBar = () => {
    return(
        <nav>
        <ul>
            <li><a href="app.js">Home</a></li>
            <li><a href="forum.js">Forum</a></li>
            <li><a href="search.html">Search</a></li>
            <li><a href="Settings.js">Settings</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
        </nav>
    );
}
 
export default NavBar;