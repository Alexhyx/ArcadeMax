import React from './react'

const editSettings = ({isEditing, handleSaveClick, handleCancelClick, handleEditClick}) => {

    return (
    <div> {isEditing ? (

        <div id="setting-buttons">
                <button id="save-settings-button" onClick={handleSaveClick}>Save</button>
                <button id="cancel-settings-button" onClick={handleCancelClick}>Cancel</button>
            </div>
        ) : (
            <button id="edit-settings-button" onClick={handleEditClick}>Edit Settings</button>)}

    </div>
);

}

export default editSettings ;