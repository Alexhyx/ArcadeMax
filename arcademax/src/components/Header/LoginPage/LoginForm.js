import React, { useState } from 'react';
import './LoginForm.css'; 

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        if(onLogin) {
            onLogin(username, password);
        }
        console.log('Login Submitted:', username, password);
    };

    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <div className="form-actions">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
