
import { useState, useEffect } from "react";
import './Post.css' 
import axios from "axios";

const Post = ({id, title, content, likes, likeClick, onViewMore, onViewLess}) => {
    
    const [totalLikes, increaseLikes] = useState(likes);
    const [comments, increaseComments] = useState([]);
    const [temporaryComment, changecomment] = useState('');
    const [expanding, setExpanding] = useState(false);


    /*const axiosPostData = async() => {
        const postData = {
          id: posts.length,
          title: title,
          content: content,
          likes: 0
        }
      
        await axios.post('http://localhost:4000')
      }*/

    const toggleExpanding = () => {
        
        if (expanding === false){
            onViewMore(id);
        }
        else{
            onViewLess();
        }

        setExpanding(!expanding); 

    };


    useEffect(() =>{
        increaseLikes(likes);

    }, [likes]);
    
    const addLike = () => {
        const likeAdded = totalLikes+1;

        increaseLikes(likeAdded)
        likeClick(id, likeAdded)
        
        console.log(likeAdded)
    };

    const submitComment =(e)=>{
        e.preventDefault();
        increaseComments([...comments, temporaryComment]);
        changecomment('');
        

    }

    return (
        <div className="post-container">
            <div className = "Post">
                <h3>{title}</h3>
                <p>{content}</p>
                <button id ="likeButton" onClick = {addLike}>Likes {totalLikes}</button>
                <button onClick = {toggleExpanding}>{expanding ? "View Less" : "View More"}</button>

                <div className = "comments" style={{ display: expanding ? 'block' : 'none' }}>
                    <form onSubmit={submitComment}>
                        <input 
                        type = "text" 
                        value = {temporaryComment} 
                        onChange = {(e)=>changecomment(e.target.value)}
                        />

            
                        <button type="submit">Comment</button>
                    </form>

                    {comments.map((comment, index) =>(
                        <p key={index}>{comment}</p>
                    ))
                    
                    }
                    
                </div>

                <br></br>
            </div>
        </div>
    );

};

export default Post;