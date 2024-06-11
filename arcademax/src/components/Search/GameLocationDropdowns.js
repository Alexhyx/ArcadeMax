import React, { useState } from "react";
import { useArcadeInfoHandler } from "../../stubData/ArcadeInfoHandler";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './GameLocationDropdowns.css';
//this is new
import { useUserContext } from "../../contexts/UserContext";
import { click } from "@testing-library/user-event/dist/click";

const GameLocationDropdowns = ({ onLocationSelect }) => {
  const { gameLocations } = useArcadeInfoHandler();
  const [games] = useState(Object.keys(gameLocations));
  const [showLocations, setShowLocations] = useState(false);
  const [locations, setLocations] = useState([]);

  const { clickAddBookMark } = useUserContext();

  const displayLocations = (event, value) => {
    if (value) {
      setShowLocations(true);
      setLocations(gameLocations[value]);
    } else {
      setShowLocations(false);
      setLocations([]);
    }
  };

  const handleLocationClick = (location) => {
    onLocationSelect(location);
  };

  const bookmarkLocation = (location) =>{
    clickAddBookMark(location);
  }
  return (
    <div className="dropdowns">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={games}
        sx={{ width: 300 }}
        onChange={displayLocations}
        renderInput={(params) => <TextField {...params} label="Game" />}
      />

      {showLocations && (
        <ul className="address-list">
          {locations.map((location, index) => (
            <>
            <li
              key={index}
              value={location}
              onClick={() => handleLocationClick(location)}
              className="list-item"
            >
              {location}
            </li>
            <button onClick={()=> bookmarkLocation(location)}>Bookmark Location</button>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameLocationDropdowns;
