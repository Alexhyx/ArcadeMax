import React from "react";
import { useArcadeInfoHandler } from "../../stubData/ArcadeInfoHandler";
import { useState } from "react";
import './GameLocationDropdowns.css';


const GameLocationDropdowns = ({onLocationSelect}) =>{
    const {gameLocations} = useArcadeInfoHandler();

    console.log("hi ", localStorage.getItem("gameLocations"))
    const [games] = useState(Object.keys(gameLocations))
    const [showLocations, setShowLocations] = useState(false);
    const [locations, setLocations] = useState([])

   

    const displayLocations =(e)=>{
        console.log(e.target.value);
        const key = e.target.value;
        setShowLocations(true);
        setLocations(gameLocations[key]);
    }
    
    const changeMap = (location) =>{
        console.log(location);
        onLocationSelect(location);
    }
    

    return(
        <div className="dropdowns">
            <select id = "allGames" onChange={displayLocations}>
                {games.map((game, index)=>(
                    <option key = {index} value = {game}> {game} </option>
                ))}
            </select>
            
            {showLocations && (
                <ul>
                {locations.map((location, index)=>(
                    <>
                    <li key={index} value={location} onClick={() => changeMap(location)} className="list-item">{location}</li>
                    </>
                    
                ))}
                </ul>
            )}
            
        </div>
    );
};

export default GameLocationDropdowns;