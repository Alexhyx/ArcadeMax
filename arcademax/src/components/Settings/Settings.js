
import React from './react'
import editSettings from 'EditSettings.js'

const Settings = () => {

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        if(!isEditing)
            {
                setIsEditing(true);
            }
    }

    const handleCancelClick = () => {
        if(isEditing)
            {
                setIsEditing(false);
            }
    }

    const handleSaveClick = () => {
        if(isEditing)
            {
                setIsEditing(false);
            }
    }

    //Starting with header will change to clickable objects
    return (
        <div>
            <div class = "list-area" id = "setting-side-bar">
                <h3>Account</h3>
                <h3>Appearance</h3>
                <h3>Notification</h3>
            </div>
            <editSettings
                isEditing={isEditing}
                handleSaveClick={handleSaveClick}
                handleCancelClick={handleCancelClick}
                handleEditClick={handleEditClick}/>
            
        </div>

    );
}

export default Settings;


