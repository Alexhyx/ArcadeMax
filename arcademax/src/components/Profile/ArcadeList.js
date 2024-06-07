import React, { useState } from 'react';
import './Profile.css';
import round1Data from './round1Data';
import ArcOwnInfoRetrieval from './ArcOwnInfoRetrieval';

const ArcadeListInfo = ({ isEditing, editingArcadeId, setEditingArcadeId }) => {
    const [arcades, setArcades] = useState(round1Data);
    const [editedArcade, setEditedArcade] = useState({});
    const [newArcade, setNewArcade] = useState({ name: '', address: '', games: [] });
    const [addressSubmitted, setAddressSubmitted] = useState(false);

    const handleEditArcade = (id) => {
        setEditingArcadeId(id);
        const arcade = arcades.find(arcade => arcade.id === id);
        setEditedArcade(arcade);
    };

    const handleArcadeChange = (e) => {
        const { name, value } = e.target;
        if (name === 'games') {
            setEditedArcade(prevState => ({
                ...prevState,
                [name]: value.split(',')
            }));
        } else {
            setEditedArcade(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSaveArcade = () => {
        setArcades(prevArcades =>
            prevArcades.map(arcade =>
                arcade.id === editedArcade.id ? editedArcade : arcade
            )
        );
        setEditingArcadeId(null);
        setEditedArcade({});
    };

    const handleAddArcade = () => {
        setArcades([...arcades, { ...newArcade, id: arcades.length + 1 }]);
        setNewArcade({ name: '', address: '', games: [] });
        setAddressSubmitted(false);
    };

    const setArcadeAddress = (address) => {
        setNewArcade(prevState => ({ ...prevState, address }));
        setAddressSubmitted(true);
    };

    const addGameToList = (game) => {
        setNewArcade(prevState => ({
            ...prevState,
            games: [...prevState.games, game]
        }));
    };

    const handleNewArcadeNameChange = (e) => {
        setNewArcade(prevState => ({ ...prevState, name: e.target.value }));
    };

    return (
        <div>
            <h2 className="info-category" id="arcade-heading">Arcade Locations</h2>
            <div>
                {arcades.map(arcade => (
                    <div key={arcade.id} className="arcade-item">
                        {editingArcadeId === arcade.id ? (
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={editedArcade.name}
                                    onChange={handleArcadeChange}
                                />
                                <input
                                    type="text"
                                    name="address"
                                    value={editedArcade.address}
                                    onChange={handleArcadeChange}
                                />
                                <input
                                    type="text"
                                    name="games"
                                    value={editedArcade.games}
                                    onChange={handleArcadeChange}
                                />
                                <button onClick={handleSaveArcade}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <p><b>Name:</b> {arcade.name}</p>
                                <p><b>Address:</b> {arcade.address}</p>
                                <div>
                                    <h4>Games:</h4>
                                    {arcade.games.map((game, index) => (
                                        <div key={index}>
                                            <li>{game}</li>
                                        </div>
                                    ))}
                                </div>
                                {isEditing && <button onClick={() => handleEditArcade(arcade.id)}>Manage</button>}
                            </div>
                        )}
                    </div>
                ))}
                {isEditing && (
                    <div>
                        <h2 className="info-category">Add New Arcade</h2>
                        <div>
                            <p>Please Input Address like: [Street Number & Name], [City], [State], [Country], [Postal Code].<br/>
                                Please submit the address before adding any games into your list
                            </p>
                            <input
                                type="text"
                                placeholder="Arcade Name"
                                value={newArcade.name}
                                onChange={handleNewArcadeNameChange}
                            />
                            <ArcOwnInfoRetrieval
                                setArcadeAddress={setArcadeAddress}
                                addGameToList={addGameToList}
                                addressSubmitted={addressSubmitted}
                            />
                            <button onClick={handleAddArcade}>Add Arcade</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ArcadeListInfo;
