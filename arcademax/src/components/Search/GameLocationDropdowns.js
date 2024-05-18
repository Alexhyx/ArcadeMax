import React from "react";
import { useArcadeInfoHandler } from "../../stubData/ArcadeInfoHandler";
import { useState } from "react";

const GameLocationDropdowns = () =>{
    const {gameLocations} = useArcadeInfoHandler();
    const [games] = useState(Object.keys(gameLocations))

    const displayLocations =(e)=>{
        console.log(e.target.value)
    }
    

    return(
        <div className="dropdowns">
            <select id = "allGames" onChange={displayLocations}>
                {games.map((game, index)=>(
                    <option key = {index} value = {game} > {game} </option>
                ))}
            </select>
        </div>
    );
};

export default GameLocationDropdowns;