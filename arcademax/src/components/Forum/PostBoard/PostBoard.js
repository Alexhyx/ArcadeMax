import React, { useState } from "react";
import Post from "./Post";
import PostCreator from "./PostCreator";
import './PostBoard.css'; 
import './PostButton.css';

const PostBoard = () => {
  const [posts, setPosts] = useState([{id:0, title:"Post 1", content:"Content yahh", likes:0}, {id:1, title:"Post 2", content:"Content yahhh", likes:0}]);
  const [viewMorePostId, setViewMorePostId] = useState(null);
  const [showCreateBoard, setShowCreateBoard] = useState(false);

  const increaseLikes = (id, likeAdded) =>{
    const likedPosts = posts.map((post, i) =>
      i === id ? { ...post, likes: likeAdded } : post
    );
    setPosts(likedPosts);
  }

  const addPost =(title, content)=>{
    const postToAdd = {id:posts.length, title:title, content:content, likes:0};
    const allPosts = [...posts, postToAdd];
    setPosts(allPosts);
  }

  const handleViewMore = (id) => {
    setViewMorePostId(id);
  };

  const handleViewLess = () => {
    setViewMorePostId(null);
  };

  const togglePostCreator = () => {
    setShowCreateBoard(!showCreateBoard);
  };

  return(
    <div className="grid-container">
      <div className="menu">
        <p>menu</p>
      </div>

      <div className="posts">
        {posts.map(post => (
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
            />
          ) : null
        ))}
      </div>

      {showCreateBoard && (
        <div className="create-form">
          <PostCreator createPost={addPost} />
        </div>
      )}
      
      <button className="create-button" onClick={togglePostCreator}>
        {showCreateBoard ? "Close" : "Create Post"}
      </button>
    </div>
  );
}

export default PostBoard;
