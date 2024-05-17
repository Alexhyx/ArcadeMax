import React, { useState } from 'react';
import './Profile.css';

const Profile = ({ user }) => {
    const [username, setUsername] = useState('peter');
    const [pronouns, setPronouns] = useState('she/her');
    const [about, setAbout] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    const [profilePicture, setProfilePicture] = useState('profile-picture.png');
    const [originalValues, setOriginalValues] = useState({ username, pronouns, about, profilePicture });
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
        // Store original values for cancel functionality
        setOriginalValues({ username, pronouns, about, profilePicture });
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        // Revert back to original values
        setUsername(originalValues.username);
        setPronouns(originalValues.pronouns);
        setAbout(originalValues.about);
        setProfilePicture(originalValues.profilePicture);
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'pronouns') {
            setPronouns(value);
        } else if (name === 'about') {
            setAbout(value);
        }
    };

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile">
            <div className="profile-left">
                <div className="profile-picture-section">
                    {isEditing && (
                        <input
                            type="file"
                            accept="image/*"
                            className="picture-input"
                            onChange={handlePictureChange}
                        />
                    )}
                    <img
                        src={profilePicture}
                        alt="Profile Picture"
                        className={isEditing ? "editable-picture" : ""}
                        onClick={() => isEditing && document.getElementById('profile-picture-input').click()}
                    />
                </div>
                {isEditing ? (
                    <div>
                        <button id="save-profile-button" onClick={handleSaveClick}>Save</button>
                        <button id="cancel-profile-button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                ) : (
                    <button id="edit-profile-button" onClick={handleEditClick}>Edit Profile</button>
                )}
                <input
                    type="file"
                    id="profile-picture-input"
                    accept="image/*"
                    className="picture-input"
                    onChange={handlePictureChange}
                />
            </div>
        
            <div className="profile-right">
                <div id="user-info">
                    <h2 className="info-category" id="username-heading">Username</h2>
                    <div className="info-box">
                        {isEditing ? (
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleInputChange}
                                className="text-box"
                                id="username"
                            />
                        ) : (
                            <p className="text-box" id="username">{username}</p>
                        )}
                    </div>
        
                    <h2 className="info-category" id="pronouns-heading">Pronouns</h2>
                    <div className="info-box">
                        {isEditing ? (
                            <input
                                type="text"
                                name="pronouns"
                                value={pronouns}
                                onChange={handleInputChange}
                                className="text-box"
                                id="pronouns"
                            />
                        ) : (
                            <p className="text-box" id="pronouns">{pronouns}</p>
                        )}
                    </div>
            
                    <h2 className="info-category" id="about-heading">About</h2>
                    <div className="info-box">
                        {isEditing ? (
                            <textarea
                                name="about"
                                value={about}
                                onChange={handleInputChange}
                                className="text-box"
                                id="about"
                            />
                        ) : (
                            <p className="text-box" id="about">{about}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
