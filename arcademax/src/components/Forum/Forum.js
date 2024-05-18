import React, { useState } from 'react';
import PostBoard from './PostBoard/PostBoard';

function Forum() {
    const [selectedLocation, setSelectedLocation] = useState('');

    return (
        <div className='Forum'>
            <PostBoard/> 
        </div>
    );
}

export default Forum;

