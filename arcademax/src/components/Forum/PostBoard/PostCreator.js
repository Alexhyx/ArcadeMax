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
            <input
                type = 'text'
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <br></br>
            <textarea
                value = {content}
                onChange = {(e)=>setContent(e.target.value)}
            />
            <button type="submit">Post</button>
        </form>
        )

}

export default PostCreator;