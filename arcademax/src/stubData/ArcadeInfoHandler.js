import React from "react";
import { createContext, useState, useContext } from 'react';

export const ArcadeInfoContext = createContext();

//TODO:
// 1) Make sure this file returns the same kind of information (so as to not break search)
// 2) Change so that it takes 
// 3) Need to account for adding games in the profile as well
// Might need to make a new file
// I will do this later :sob: :dying:
// Use axios for this -> check tutorial
export const ArcadeInfoProvider = ({children}) => {
    const [gameLocations, addGameLocation]= useState({
        "Pump It Up":["29033 Arroyo Drive, Irvine, CA", "2800 N Main St #1100, Santa Ana, CA"],
        "DDR":["4560 Oregon St, San Diego, CA"],
        "DanceMania":["260 Aldrich Hall Irvine, CA"]
    });

    
    const addInformation=(arcadeLocation, gameList)=>{
        gameList.forEach(game=>{
            if(game in gameLocations) {
                addGameLocation(addressesInList=>({
                    ...addressesInList,
                    [game]: [...addressesInList[game], arcadeLocation]
                }));
            }
            else{
                addGameLocation(addressesInList=>({
                    ...addressesInList,
                    [game]: [arcadeLocation]
                }));
            }
        });

        console.log(gameLocations);
    }

    

    return(
        <ArcadeInfoContext.Provider value={{gameLocations, addInformation }}>
            {children}
        </ArcadeInfoContext.Provider>

    );

    
};
 
export const useArcadeInfoHandler =()=> useContext(ArcadeInfoContext);