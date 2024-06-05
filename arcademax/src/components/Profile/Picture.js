import React from 'react';
import './Picture.css';

const ProfilePicture = ({ isEditing, profilePicture }) => (
    <div className="profile-picture-section">
        <img
            src={profilePicture}
            alt="Profile Picture"
            className={isEditing ? "editable-picture" : ""}
            onClick={() => isEditing && document.getElementById('profile-picture-input').click()}
        />
    </div>
);

export default ProfilePicture;