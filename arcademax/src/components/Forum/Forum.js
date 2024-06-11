import React, { useState } from 'react';
import PostBoard from './PostBoard/PostBoard';

const Forum = ({ signedIn }) => {
    const [selectedLocation, setSelectedLocation] = useState('');

    return (
        <div>
          <PostBoard signedIn={signedIn} />
        </div>
      );
}

export default Forum;

