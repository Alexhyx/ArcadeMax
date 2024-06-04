import React, { useState } from 'react';
import { ArcadeInfoProvider } from '../../stubData/ArcadeInfoHandler';
import GameLocationDropdowns from './GameLocationDropdowns';
import Map from './Map';
import ArcadeInputForm from '../ArcadeInput/ArcadeInput';
import './search.css';

function Search() {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <h1 className='title' id='search-title'>Arcade Search</h1>
            <ArcadeInfoProvider>
                <Map location={selectedLocation} />
                <GameLocationDropdowns onLocationSelect={setSelectedLocation} />
            </ArcadeInfoProvider>
            
            {/* Pop-up Window for Arcade Input Form */}
            <div className="centered-container">
                <button onClick={togglePopup}>Show Input Form</button>
            </div>
            {showPopup && <ArcadeInputForm onClose={togglePopup} />}

        </div>
    );
}

export default Search;
