import React from 'react';
import './Profile.css';

const OwnerInformation = ({ isEditing, username, about, handleArcOwnerInputChange }) => (
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
            <h2 className="info-category" id="arcade-heading">About</h2>
            <div className='arcade-list'>

            </div>
        </div>
    </div>
)

export default OwnerInformation;