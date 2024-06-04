import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';



const NavBar = () => {
    return(
        <nav>
        <ul>
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
            <li>
                <Link to = "/LoginForm">Login</Link>
            </li>
            
            
        </ul>
        </nav>
    );
}
 
export default NavBar;
