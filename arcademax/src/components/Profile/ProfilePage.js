import React from 'react';
import './Profile.css';
import ProfilePicture from './Picture';
import ProfileInformation from './RegularInfo';
import OwnerInformation from './ArcadeOwnerInfo';
import EditButtons from './EditButtons';
import useProfileState from './userProfileState';
import { useUserContext } from '../../contexts/UserContext';

const Profile = ({ userId }) => {
    const {
        user,
        isEditing,
        editingArcadeId,
        handleEditClick,
        handleSaveClick,
        handleCancelClick,
        handleInputChange,
        handlePictureChange,
        setEditingArcadeId,
    } = useProfileState(userId);

    const { userName, bookMarked } = useUserContext();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className='info-category' id='profile-page'>Profile</h1>
            <div className="profile">
                <div className='profile-left'>
                    <ProfilePicture
                        isEditing={isEditing}
                        profilePicture={user.profilePicture}
                    />
                    <EditButtons
                        isEditing={isEditing}
                        handleEditClick={handleEditClick}
                        handleCancelClick={handleCancelClick}
                        handlePictureChange={handlePictureChange}
                        handleSaveClick={handleSaveClick}
                    />
                </div>
                
                {(user.userType === 'regular' || user.userType === 'admin') && (
                    <>
                    <ProfileInformation
                        isEditing={isEditing}
                        username={user.username}
                        pronouns={user.pronouns}
                        about={user.about}
                        handleRegularInputChange={handleInputChange}
                    />
                    <div id="user-info">
                        <h2 className="info-category" id="bookmarked-heading">Bookmarked Locations</h2>
                        <div className="info-box">
                            <div>
                                {bookMarked.map((location, index) => (
                                    <li key={index} className="text-box">{location}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                    </>
                )}
                {user.userType === 'arcadeOwner' && (
                    <OwnerInformation
                        isEditing={isEditing}
                        editingArcadeId={editingArcadeId}
                        setEditingArcadeId={setEditingArcadeId}
                        username={user.username}
                        about={user.about}
                        handleArcOwnerInputChange={handleInputChange}
                    />
                )}
            </div>
        </div>
    );
}

export default Profile;
