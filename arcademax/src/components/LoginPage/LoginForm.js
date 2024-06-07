import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; 
import { auth } from '../../firebase';

import SignUp from './SignUp';
import SignOut from './SignOut';
import SignIn from './SignIn';




function LoginForm() {

    const [signedIn, setSignedIn] =  useState(false);
    const [signUp, setSignedUp] = useState(false);

    useEffect(()=>{
        const userState = auth.onAuthStateChanged(user => {
            if (user) {
                setSignedIn(true);
            } else {
                setSignedIn(false);
            }
        });

        return () => userState();
    }, []);

    const handleSignUpComponent = ()=>{
        if (signUp === false){
            setSignedUp(true);
        }
        else{
            setSignedUp(false);
        }
        
    };
    
    
    
    

    return (
        <div className="login-form-container">
            

            
            
            {!signedIn && !signUp && (
                <>
                <p>Sign In:</p>
                <SignIn/>
                <p>Don't have an Account?</p>
                <p onClick={handleSignUpComponent} style={{ cursor: 'pointer', color: 'blue'}}>
                    Sign Up!
                </p>
                </>
            )}

            {signUp && (
                <>
                <p>Sign Up:</p>
                <SignUp/>
                <br></br>
                </>
            )}


            {signedIn && (
                <>
                <SignOut/>
                </>
            )}
        </div>
    );
}

export default LoginForm;