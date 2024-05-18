import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';



const NavBar = () => {
    return(
        <nav>
        <ul>
<<<<<<< Updated upstream
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to = "/Search">Search</Link>
            </li>
            <li>
                <Link  to ="/Forum">Forum</Link>
            </li>
            <li>
                <Link to = "/ProfilePage">Profile</Link>
            </li>
            <li>
                <Link to = "/About">About</Link>
            </li>
            
            
=======
            <li><a href="app.js">Home</a></li>
            <li><a href="forum.js">Forum</a></li>
            <li><a href="search.html">Search</a></li>
            <li><a href="Settings.js">Settings</a></li>
            <li><a href="about.html">About</a></li>
>>>>>>> Stashed changes
        </ul>
        </nav>
    );
}
 
export default NavBar;