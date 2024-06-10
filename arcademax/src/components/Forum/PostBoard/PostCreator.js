import React, { useState } from "react";
import './PostCreator.css'; 

const PostCreator =({createPost})=>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('General');

    const submitPost =(e)=>{
        e.preventDefault();
        createPost(title, content, category);
        setTitle("");
        setContent("");
        setCategory("General");
    };

    return (
        <form className="post-creator-form" onSubmit={submitPost}>
            <h2>Title</h2>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <h2>Body</h2>
            <textarea
                className="post-body-textarea"
                value = {content}
                onChange = {(e)=>setContent(e.target.value)}
            />
            <h2>Category</h2>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Dance Dance Revolution">Dance Dance Revolution</option>
                <option value="Pump It Up">Pump It Up</option>
                <option value="DanceMania">DanceMania</option>
            </select>
            <button type="submit">Post</button>
        </form>
    );
};

export default PostCreator;
