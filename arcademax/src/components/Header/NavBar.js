import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ signedIn }) => {
    return(
        <nav>
            <ul className="navbar-ul">
                <li className="navbar-li">
                    <Link to="/">Search</Link>
                </li>
                <li className="navbar-li">
                    {signedIn && <li><Link to="/Forum">Forum</Link></li>}
                </li>
                <li className="navbar-li">
                    <Link to="/ProfilePage">Profile</Link>
                </li>
                <li className="navbar-li">
                    <Link to="/About">About</Link>
                </li>
                <li className="navbar-li">
                    <Link to="/LoginForm">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
