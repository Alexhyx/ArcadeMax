import React, { useState } from 'react';
import { ArcadeInfoProvider } from '../../stubData/ArcadeInfoHandler';
import GameLocationDropdowns from './GameLocationDropdowns';
import Map from './Map';
import ArcadeInputForm from '../ArcadeInput/ArcadeInput';

function Search() {
    const [selectedLocation, setSelectedLocation] = useState('');

    return (
        <div>
            <ArcadeInfoProvider>
                <Map location={selectedLocation} />
                <GameLocationDropdowns onLocationSelect={setSelectedLocation} />
            </ArcadeInfoProvider>
            
            <ArcadeInputForm/>
            
        </div>
    );
}

export default Search;

