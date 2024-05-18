import React from 'react';
import './Profile.css';

const ProfileInformation = ({ isEditing, username, pronouns, about, handleRegularInputChange }) => {
    return (
        <div className="profile-right">
            <div id="user-info">
                <h2 className="info-category" id="username-heading">Username</h2>
                <div className="info-box">
                    {isEditing ? (
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleRegularInputChange}
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
                            onChange={handleRegularInputChange}
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
                            onChange={handleRegularInputChange}
                            className="text-box"
                            id="about"
                        />
                    ) : (
                        <p className="text-box" id="about">{about}</p>
                    )}
                </div>
                
            </div>
        </div>
    );
    
};

export default ProfileInformation;