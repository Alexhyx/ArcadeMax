import React from 'react';
import './Profile.css';

const EditButtons = ({isEditing, handlePictureChange, handleEditClick, handleCancelClick, handleSaveClick }) => (
    
    <div>
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
);

export default EditButtons;
