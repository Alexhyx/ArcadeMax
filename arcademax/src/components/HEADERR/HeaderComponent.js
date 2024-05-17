import React from "react";
import './HeaderComponent.css';
import NavBar from './NavBar';
import LoginButton from './LoginButton'

const HeaderComp = () => {

    return (
        <header className="App-header">
            <LoginButton/>
            <NavBar/>
        </header>
    );
}

export default HeaderComp;
