import React, { useContext, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useState } from "react";

//I am following this tutorial: https://www.youtube.com/watch?v=WpIDez53SK4&t=25s
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, SetUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setCurrentUser({...user});
                SetUserLoggedIn(true);
            }else{
                setCurrentUser(null);
                SetUserLoggedIn(false);
            }
            setLoading(false);
        });
        
        

        return unsubscribe;
    }, [])

    /*async function initializeUser(user){
        if(user){
            setCurrentUser({...user});
            SetUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            SetUserLoggedIn(false);
        }
        setLoading(false);

        const value = {
            currentUser, userLoggedIn, loading
        }*/


    const value = {
        currentUser,
        userLoggedIn,
        loading
    };

    return(
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
        );
}