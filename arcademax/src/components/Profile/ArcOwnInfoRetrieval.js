import React, { useState } from 'react';
import axios from "axios";

const ArcOwnInfoRetrieval = ({ setArcadeAddress, addGameToList, addressSubmitted }) => {
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

    const postGame = async(address, game) => {
        address.preventDefault();
        game.preventDefault();

        const postData = {
            name: specificGame,
            address: ArcadeAddress 
        }
        /* Pseudo-code:
        If name is in the json file, need to add it to the list
        If it's not, then I make a new entry
        Access database directly, and just query it?
        Just add to database directly (don't have to worry about it)
        */

        //Should be database link later
        await axios.post('http://localhost:4000/game_output', postData)
        .then(res => console.log(res))

        setSpecificGame('');
        setArcadeAddressState('');
    }
   

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
        </div>
    );
};

export default ArcOwnInfoRetrieval;
