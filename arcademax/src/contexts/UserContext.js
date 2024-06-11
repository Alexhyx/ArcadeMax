import React, {createContext, useState, useEffect, useContext} from "react";
import { auth } from '../firebase'


export const UserContext = createContext();

export function useUserContext(){
    return useContext(UserContext);
}

export const UserProvider = ({children}) =>{
    const [userName, setUserName] = useState('');
    const [bookMarked, addBookMarked] = useState([]);

    useEffect(()=>{/*Connect to the database here*/},[]);

    const clickAddBookMark = (location) => {
        addBookMarked([...bookMarked, location]);
        console.log(bookMarked);
    };

    const changeUsername = (username) => {
        setUserName(username);
        console.log(userName);
    }

    return(
        <UserContext.Provider value={{userName, bookMarked, clickAddBookMark, changeUsername}}>
            {children}
        </UserContext.Provider>
    );
}; 