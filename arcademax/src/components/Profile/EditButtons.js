import React from 'react';
import './EditButtons.css';

const EditButtons = ({isEditing, handlePictureChange, handleEditClick, handleCancelClick, handleSaveClick }) => (
    <div>
        {isEditing ? (
            <div>
                <button className="profileButtons" id="save-profile-button" onClick={handleSaveClick}>Save</button>
                <button className="profileButtons" id="cancel-profile-button" onClick={handleCancelClick}>Cancel</button>
            </div>
        ) : (
            <button className="profileButtons" id="edit-profile-button" onClick={handleEditClick}>Edit Profile</button>
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
