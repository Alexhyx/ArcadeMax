import React, { useState } from 'react';
import './Profile.css';
import ProfilePicture from './Picture';
import ProfileInformation from './RegularInfo';
import OwnerInformation from './ArcadeOwnerInfo';
import ArcOwnInfoRetrieval from './ArcOwnInfoRetrieval'
import EditButtons from './EditButtons';

const Profile = () => {
    const [userType, setUserType] = useState('arcadeOwner'); // Possible values: 'regular', 'admin,' 'arcadeOwner'
    const [username, setUsername] = useState('peter');
    const [pronouns, setPronouns] = useState('');
    const [about, setAbout] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    const [profilePicture, setProfilePicture] = useState('round1-pfp.png');
    const [isEditing, setIsEditing] = useState(false);
    const [originalValues, setOriginalValues] = useState({ username, pronouns, about, profilePicture });

    const handleEditClick = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            // Store original values for cancel functionality
            setOriginalValues({ username, pronouns, about, profilePicture });
        }
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

    const handleRegularInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'pronouns') {
            setPronouns(value);
        } else if (name === 'about') {
            setAbout(value);
        }
    };

    const handleArcOwnerInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'about') {
            setAbout(value);
        }
    }

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
            <ProfilePicture
                isEditing={isEditing}
                profilePicture={profilePicture}
            />
            <EditButtons
                isEditing={isEditing}
                handleEditClick={handleEditClick}
                handleCancelClick={handleCancelClick}
                handlePictureChange={handlePictureChange}
                handleSaveClick={handleSaveClick}
            />
            {(userType === 'regular' || userType === 'admin') && (
                <>
                    <ProfileInformation
                        isEditing={isEditing}
                        username={username}
                        pronouns={pronouns}
                        about={about}
                        handleRegularInputChange={handleRegularInputChange}
                    />
                </>
                
            )}
            {userType === 'arcadeOwner' && (
                <>
                    <OwnerInformation
                        isEditing={isEditing}
                        username={username}
                        about={about}
                        handleArcOwnerInputChange={handleArcOwnerInputChange}
                    />
                    {/* <ArcadeUserInputResponse/>
                    <ArcOwnInfoRetrieval/> */}
                </>
            )}
        </div>
        
    );

}

export default Profile;