import React, { useState } from "react";
import { useArcadeInfoHandler } from "../../stubData/ArcadeInfoHandler";
import './GameLocationDropdowns.css';

const GameLocationDropdowns = ({ onLocationSelect }) => {
    const { gameLocations } = useArcadeInfoHandler();
    const [games] = useState(Object.keys(gameLocations));
    const [showLocations, setShowLocations] = useState(false);
    const [locations, setLocations] = useState([]);

    const displayLocations = (e) => {
        console.log(e.target.value);
        const key = e.target.value;
        setShowLocations(true);
        setLocations(gameLocations[key]);
    };

    const changeMap = (location) => {
        console.log(location);
        onLocationSelect(location);
    };

    return (
        <div className="dropdowns">
            <select id="allGames" onChange={displayLocations} defaultValue="">
                <option value="" disabled hidden>Select a game</option>
                {games.map((game, index) => (
                    <option key={index} value={game}> {game} </option>
                ))}
            </select>

            {showLocations && (
                <ul className="address-list">
                    {locations.map((location, index) => (
                        <li key={index} value={location} onClick={() => changeMap(location)} className="list-item">
                            {location}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GameLocationDropdowns;
