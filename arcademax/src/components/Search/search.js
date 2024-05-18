import React, { useState } from 'react';
import { ArcadeInfoProvider } from '../../stubData/ArcadeInfoHandler';
import GameLocationDropdowns from './GameLocationDropdowns';
import Map from './Map';

function Search() {
    const [selectedLocation, setSelectedLocation] = useState('');

    return (
        <div>
            <ArcadeInfoProvider>
                <Map location={selectedLocation} />
                <GameLocationDropdowns onLocationSelect={setSelectedLocation} />
            </ArcadeInfoProvider>
            
        </div>
    );
}

export default Search;

