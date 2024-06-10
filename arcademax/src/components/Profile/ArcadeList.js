import React, { useState } from 'react';
import './Profile.css';
import users from '../../stubData/usersData';
import ArcOwnInfoRetrieval from './ArcOwnInfoRetrieval';

const ArcadeListInfo = ({ isEditing, editingArcadeId, setEditingArcadeId }) => {
    const arcadeOwner = users.find(user => user.userType === 'arcadeOwner');
    const [arcades, setArcades] = useState(arcadeOwner.arcadeLocations);
    const [editedArcade, setEditedArcade] = useState({});
    const [newArcade, setNewArcade] = useState({ name: '', address: '', games: [] });
    const [addressSubmitted, setAddressSubmitted] = useState(false);

    const handleEditArcade = (location_id) => {
        setEditingArcadeId(location_id);
        const arcade = arcades.find(arcade => arcade.location_id === location_id);
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
                arcade.location_id === editedArcade.location_id ? editedArcade : arcade
            )
        );
        setEditingArcadeId(null);
        setEditedArcade({});
    };

    const handleAddArcade = () => {
        setArcades([...arcades, { ...newArcade, location_id: arcades.length + 1 }]);
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
            <div className="arcade-list">
                {arcades.map(arcade => (
                    <div key={arcade.location_id} className="arcade-item">
                        {editingArcadeId === arcade.location_id ? (
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={editedArcade.name}
                                    onChange={handleArcadeChange}
                                    placeholder="Arcade Name"
                                />
                                <input
                                    type="text"
                                    name="address"
                                    value={editedArcade.address}
                                    onChange={handleArcadeChange}
                                    placeholder="Address"
                                />
                                <input
                                    type="text"
                                    name="games"
                                    value={editedArcade.games.join(', ')}
                                    onChange={handleArcadeChange}
                                    placeholder="Games (comma separated)"
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
                                {isEditing && <button onClick={() => handleEditArcade(arcade.location_id)}>Manage</button>}
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
