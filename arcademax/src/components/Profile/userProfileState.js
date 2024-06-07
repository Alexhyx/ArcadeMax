import { useState, useEffect } from 'react';
import users from '../../stubData/usersData';

const useProfileState = (userId) => {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [originalValues, setOriginalValues] = useState({});

    useEffect(() => {
        const currentUser = users.find(u => u.id === userId);
        if (currentUser) {
            setUser(currentUser);
            setOriginalValues(currentUser);
        }
    }, [userId]);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            setOriginalValues(user);
        }
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setUser(originalValues);
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser(prevUser => ({
                    ...prevUser,
                    profilePicture: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return {
        user,
        isEditing,
        handleEditClick,
        handleSaveClick,
        handleCancelClick,
        handleInputChange,
        handlePictureChange
    };
};

export default useProfileState;
