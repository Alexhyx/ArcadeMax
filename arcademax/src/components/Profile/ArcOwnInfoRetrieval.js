import React, { useState } from 'react';


const ArcOwnInfoRetrieval = () => {
    const [ArcadeAdress, setArcadeAdress] = useState('');
    const [ArcadeGames, setArcadeGames] = useState([]);
    const [specificGame, setSpecificGame] = useState('');

    const submitAdress =(e)=>{
        e.preventDefault();
        //Calls the passed function that will be called outside of the object (see postboard's PostCreator object)
        console.log("Here is the Address: ", ArcadeAdress);

    };
    
    const addGameToList = (e) =>{
        e.preventDefault();
        setArcadeGames([...ArcadeGames, specificGame]);
        
        setSpecificGame('');
        
    }

    
    return (
        <div className = "ArcOwnInfo">
            <form onSubmit={submitAdress}>
                <input
                type = 'text'
                value = {ArcadeAdress}
                placeholder="Please Input Address like: [Street Number & Name], [City], [State], [Country], [Postal Code]"
                onChange={(e)=>setArcadeAdress(e.target.value)}
                />
                <button type="submit">Set Address</button>
            </form>

            <form onSubmit = {addGameToList}>
                <input
                type = 'text'
                value = {specificGame}
                placeholder="Please Input an Arcade Game to add to Game List"
                onChange={(e)=>setSpecificGame(e.target.value)}
                />
                <button type="submit">Add Game</button>
                
            </form>

            
        </div>
    );
    
}
 
export default ArcOwnInfoRetrieval;