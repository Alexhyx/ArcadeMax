import React from "react";
import { Link } from 'react-router-dom';

const LoginButton = () => {
    return (
        <div className="auth-buttons">
            <Link to="/login">
                <button id="loginBtn">Login/Sign Up</button>
            </Link>
        </div>
    );
}

export default LoginButton;
