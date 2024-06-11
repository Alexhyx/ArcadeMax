import React, { useState } from 'react';

const ArcOwnInfoRetrieval = ({ setArcadeAddress, addGameToList, addressSubmitted, submittedAddress, gameList }) => {
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
            {!addressSubmitted && (
                <form onSubmit={submitAddress}>
                    <input
                        type='text'
                        value={ArcadeAddress}
                        // placeholder="Please Input Address like: [Street Number & Name], [City], [State], [Country], [Postal Code]"
                        placeholder='Location Address'
                        onChange={(e) => setArcadeAddressState(e.target.value)}
                    />
                    <button type="submit">Set Address</button>
                </form>
            )}
            {addressSubmitted && (
                <div>
                    <p><b>Address:</b> {submittedAddress}</p>
                </div>
            )}
            <form onSubmit={addGame}>
                <input
                    type='text'
                    value={specificGame}
                    // placeholder="Please Input an Arcade Game to add to Game List"
                    placeholder='Game Name'
                    onChange={(e) => setSpecificGame(e.target.value)}
                />
                <button type="submit">Add Game</button>
            </form>
            {gameList.length > 0 && (
                <div>
                    <h4>Games List:</h4>
                    {gameList.map((game, index) => (
                        <div key={index}>
                        <li>{game}</li>
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ArcOwnInfoRetrieval;
