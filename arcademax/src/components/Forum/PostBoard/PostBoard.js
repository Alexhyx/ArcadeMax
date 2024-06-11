import React, { useState } from "react";
import Post from "./Post";
import PostCreator from "./PostCreator";
import './PostBoard.css'; 
import './PostButton.css';

const PostBoard = ({ signedIn }) => {
  const [posts, setPosts] = useState([
    {id:0, title:"Post 1", content:"Content yahh", likes:0, category: 'General'}, 
    {id:1, title:"Post 2", content:"Content yahhh", likes:0, category: 'Dance Dance Revolution'}
  ]);
  const [viewMorePostId, setViewMorePostId] = useState(null);
  const [showCreateBoard, setShowCreateBoard] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'Dance Dance Revolution', 'Pump It Up', 'DanceMania'];

  const increaseLikes = (id, likeAdded) => {
    const likedPosts = posts.map((post, i) =>
      i === id ? { ...post, likes: likeAdded } : post
    );
    setPosts(likedPosts);
  };

  const addPost = (title, content, category) => {
    const postToAdd = {id: posts.length, title: title, content: content, likes: 0, category: category};
    const allPosts = [...posts, postToAdd];
    setPosts(allPosts);
  };

  const handleViewMore = (id) => {
    setViewMorePostId(id);
  };

  const handleViewLess = () => {
    setViewMorePostId(null);
  };

  const togglePostCreator = () => {
    setShowCreateBoard(!showCreateBoard);
  };

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="grid-container">
      <div className="menu">
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="posts">
        <h1 className='info-category' id='profile-page'>Forum</h1>
        {filteredPosts.map(post => (
          viewMorePostId === null || viewMorePostId === post.id ? (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              likes={post.likes}
              likeClick={increaseLikes}
              onViewMore={handleViewMore}
              onViewLess={handleViewLess}
              signedIn={signedIn}
            />
          ) : null
        ))}
      </div>

      {signedIn && showCreateBoard && (
        <div className="create-form">
          <PostCreator createPost={addPost} />
        </div>
      )}
      
      {signedIn && viewMorePostId === null && (
        <button className="create-button" onClick={togglePostCreator}>
          {showCreateBoard ? "Close" : "Create Post"}
        </button>
      )}
    </div>
  );
};

export default PostBoard;