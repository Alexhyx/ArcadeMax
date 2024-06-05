import React from "react";
import { useState } from "react";

const PostCreator =({createPost})=>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const submitPost =(e)=>{
        e.preventDefault();
        //Calls the passed function that will be called outside of the object (see postboard's PostCreator object)
        createPost(title, content)
        setTitle("");
        setContent("");
    };

    
    return (
        <form onSubmit={submitPost}>
            <h2>Title</h2>
            <input
                type = 'text'
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <br></br>
            <h2>Body</h2>
            <textarea
                value = {content}
                onChange = {(e)=>setContent(e.target.value)}
            />
            <button type="submit">Post</button>
        </form>
    )

}

export default PostCreator;