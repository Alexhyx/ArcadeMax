import React, { useState } from 'react';

const ArcOwnInfoRetrieval = ({ setArcadeAddress, addGameToList }) => {
    const [ArcadeAddress, setArcadeAddressState] = useState('');
    const [specificGame, setSpecificGame] = useState('');

    const submitAddress = (e) => {
        e.preventDefault();
        setArcadeAddress(ArcadeAddress);
        setArcadeAddressState('');
    };

    const addGame = (e) => {
        e.preventDefault();
        addGameToList(specificGame);
        setSpecificGame('');
    };

    return (
        <div className="ArcOwnInfo">
            <form onSubmit={submitAddress}>
                <input
                    type='text'
                    value={ArcadeAddress}
                    placeholder="Please Input Address like: [Street Number & Name], [City], [State], [Country], [Postal Code]"
                    onChange={(e) => setArcadeAddressState(e.target.value)}
                />
                <button type="submit">Set Address</button>
            </form>

            <form onSubmit={addGame}>
                <input
                    type='text'
                    value={specificGame}
                    placeholder="Please Input an Arcade Game to add to Game List"
                    onChange={(e) => setSpecificGame(e.target.value)}
                />
                <button type="submit">Add Game</button>
            </form>
        </div>
    );
};

export default ArcOwnInfoRetrieval;