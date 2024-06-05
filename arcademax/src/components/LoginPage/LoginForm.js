import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; 
import Profile from '../Profile/ProfilePage';
import { useAuth0 } from "@auth0/auth0-react";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated} = useAuth0();

    const navigate = useNavigate();

    const UsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const PasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        localStorage.setItem("username", username)
        
        navigate('/ProfilePage', { state: { username: username } });
        
    };

    return (
        <div className="login-form-container">
            
            <button onClick={() => loginWithRedirect()}>Login</button>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
            {isAuthenticated && (<p>{user.name}</p>)}
        </div>
    );
}

export default LoginForm;
