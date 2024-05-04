

let posts =
[
    {title: "Sample Post", 
    message_author: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, ligula ut fermentum aliquam, urna ipsum lacinia nulla, vel aliquam odio felis in leo. Duis in elit ac erat convallis efficitur."], 
    likes: 0, 
    comments:["Cool", "Very Cool!"],
    user: "Anon"}
]

const postsOnPage = 3;
let currentPage = 0;
let currentState = "allPosts";


function displayPosts() {
    const postsHTML = document.getElementById("posts");
    postsHTML.innerHTML = "";
    currentState = "allPosts" 

    const startIndex = (currentPage) * postsOnPage;
    const endIndex = startIndex + postsOnPage;


    const allPosts = posts.slice(startIndex, endIndex);

    allPosts.forEach(post => {
        const element = document.createElement("div");
        element.innerHTML =
            `<h3>${post.title}</h3>
            <p>${post.message_author[0]}</p>
            <p style = "font-size: 50%;" >By: ${post.user}</p>
            <button class="like-count" onclick="likePost(${startIndex + posts.indexOf(post)})">Like ${post.likes}</button>
            <button class="like-count" onclick="displaySinglePost(${startIndex + posts.indexOf(post)})">View Post</button>
            <button class="like-count" onclick="displaySinglePost(${startIndex + posts.indexOf(post)})">Comment</button>`;
        postsHTML.appendChild(element);
    } );

   
}

function createNewPost() {

    const postTitle = document.getElementById("title").value;
    const message = document.getElementById("Message").value;
    const user = "Anon";

    //console.log(postTitle, postMessage)
    posts.unshift({title:postTitle, message_author:[message], likes:0, comments:[], user:"Anon"})
    
    displayPosts();
    
    document.getElementById("title").value = "";
    document.getElementById("Message").value = "";
    return false;
}



function likePost(index) {
    posts[index].likes = posts[index].likes+1;
    if (currentState == "allPosts"){
        displayPosts();
    }
    else{
        displaySinglePost(index);
    }
}

function displaySinglePost(index){
    const postsHTML = document.getElementById("posts");
    postsHTML.innerHTML = "";
    currentState = "singlePost";
    let post = posts[index];


    
    const element= document.createElement("div");
    element.innerHTML =`
        <button class = "backButton" onclick = "back()">Go Back</button>
        <div id = "singlePost">
        <h3>${post.title}</h3>
        <p>${post.message_author[0]}</p>
        <p style = "font-size: 50%;" >By: ${post.message_author[1]}</p>
        <button class="like-count" onclick="likePost(${index})">Like ${post.likes}</button>
        </div>
        <div id = "personalComment">
        <textarea id="CommentTextArea"></textarea><br><br>
        <button class = "commentButton" onclick = "commentPost(${index})">Comment</button>
        </div>`;
    postsHTML.appendChild(element);

    post.comments.forEach(comment => {
        const postComment = document.createElement("div");
        
        postComment.innerHTML =`
            <p style = "font-size: 50%;">${comment}</p>
            `;
        console.log(postComment)
        postsHTML.appendChild(postComment);
    } )
    


    
}
function back(){
    currentState = "allPosts";
    displayPosts();
}

function commentPost(index){
    let post = posts[index];
    let newComment = document.getElementById("CommentTextArea").value;
    post.comments.unshift(newComment);

    displaySinglePost(index);
}

displayPosts();




