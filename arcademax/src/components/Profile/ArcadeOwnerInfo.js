import React, { useState } from 'react';
import './Profile.css';
import round1Data from './round1Data';
import ArcOwnInfoRetrieval from './ArcOwnInfoRetrieval';

const OwnerInformation = ({ isEditing, username, about, handleArcOwnerInputChange }) => {
    const [arcades, setArcades] = useState(round1Data);
    const [editingArcadeId, setEditingArcadeId] = useState(null);
    const [editedArcade, setEditedArcade] = useState({});

    const [newArcade, setNewArcade] = useState({ address: '', games: [] });

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
    };

    const setArcadeAddress = (address) => {
        setNewArcade(prevState => ({ ...prevState, address }));
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
        <div className='profile-right'>
            <div className='profile-info'>
                <div id="user-info">
                    <h2 className="info-category" id="username-heading">Establishment</h2>
                    <div className="info-box">
                        {isEditing ? (
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleArcOwnerInputChange}
                                className="text-box"
                                id="username"
                            />
                        ) : (
                            <p className="text-box" id="username">{username}</p>
                        )}
                    </div>
            
                    <h2 className="info-category" id="about-heading">About</h2>
                    <div className="info-box">
                        {isEditing ? (
                            <textarea
                                name="about"
                                value={about}
                                onChange={handleArcOwnerInputChange}
                                className="text-box"
                                id="about"
                            />
                        ) : (
                            <p className="text-box" id="about">{about}</p>
                        )}
                    </div>
                </div>
            </div>
                <div>
                    <h2 className="info-category" id="arcade-heading">Arcade Locations</h2>
                    <div className='info-box' id='arcade-lists'>
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
                                                <div >
                                                    <li key={index}>{game}</li>
                                                </div>
                                            ))}
                                        </div>
                                        <button onClick={() => handleEditArcade(arcade.id)}>Manage</button>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div>
                            <h2 className="info-category">Add New Arcade</h2>
                            <div className='info-box'>
                                <input
                                    type="text"
                                    placeholder="Arcade Name"
                                    value={newArcade.name}
                                    onChange={handleNewArcadeNameChange}
                                />
                                <ArcOwnInfoRetrieval
                                    setArcadeAddress={setArcadeAddress}
                                    addGameToList={addGameToList}
                                />
                                <button onClick={handleAddArcade}>Add Arcade</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
    
};

export default OwnerInformation;