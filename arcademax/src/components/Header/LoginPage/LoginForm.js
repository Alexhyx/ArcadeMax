import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; 
import Profile from '../../Profile/ProfilePage';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const UsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const PasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        navigate('/ProfilePage', { state: { username: username } });
        console.log('Login Submitted:', username, password);
    };

    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={UsernameChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={PasswordChange} required />
                </div>
                <div className="form-actions">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
