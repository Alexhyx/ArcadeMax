// ProfilePage.js
import React from 'react';
import './Profile.css';
import ProfilePicture from './Picture';
import ProfileInformation from './RegularInfo';
import OwnerInformation from './ArcadeOwnerInfo';
import EditButtons from './EditButtons';
import useProfileState from './userProfileState';

const Profile = () => {
    const {
        userType,
        username,
        pronouns,
        about,
        profilePicture,
        isEditing,
        handleEditClick,
        handleSaveClick,
        handleCancelClick,
        handleRegularInputChange,
        handleArcOwnerInputChange,
        handlePictureChange
    } = useProfileState();

    return (
        <div>
            <h1 className='info-category' id='profile-page'>Establishment Profile</h1>
            <div className="profile">
                <div className='profile-left'>
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
                </div>
                
                {(userType === 'regular' || userType === 'admin') && (
                    <ProfileInformation
                        isEditing={isEditing}
                        username={username}
                        pronouns={pronouns}
                        about={about}
                        handleRegularInputChange={handleRegularInputChange}
                    />
                )}
                {userType === 'arcadeOwner' && (
                    <OwnerInformation
                        isEditing={isEditing}
                        username={username}
                        about={about}
                        handleArcOwnerInputChange={handleArcOwnerInputChange}
                    />
                )}
            </div>
        </div>
    );
}

export default Profile;