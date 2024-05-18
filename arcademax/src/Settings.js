
import React from './react'
import HeaderComp from './components/Header/HeaderComponent';
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

    return (
        <div>
            <HeaderComp/>
            <editSettings
            isEditing/>
            
        </div>

    );
}

export default Settings;


