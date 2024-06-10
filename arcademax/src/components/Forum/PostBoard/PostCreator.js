import React, { useState } from "react";
import './PostCreator.css'; 

const PostCreator =({createPost})=>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const submitPost =(e)=>{
        e.preventDefault();
        createPost(title, content);
        setTitle("");
        setContent("");
    };

    return (
        <form className="post-creator-form" onSubmit={submitPost}>
            <h2>Title</h2>
            <input
                type = 'text'
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <br></br>
            <h2>Body</h2>
            <textarea
                className="post-body-textarea"
                value = {content}
                onChange = {(e)=>setContent(e.target.value)}
            />
            <button type="submit">Post</button>
        </form>
    );
};

export default PostCreator;
