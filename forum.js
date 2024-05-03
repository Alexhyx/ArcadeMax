

let posts =
[
    {title: "Sample Post", message_author: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, ligula ut fermentum aliquam, urna ipsum lacinia nulla, vel aliquam odio felis in leo. Duis in elit ac erat convallis efficitur.", "Anon"], likes: 0}
]

const postsOnPage = 3;
let currentPage = 0;


function displayPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = ""; 

    const startIndex = (currentPage) * postsOnPage;
    const endIndex = startIndex + postsOnPage;


    const allPosts = posts.slice(startIndex, endIndex);

    allPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML =
            `<h3>${post.title}</h3>
            <p>${post.message_author[0]}</p>
            <p style = "font-size: 50%;" >By: ${post.message_author[1]}</p>
            <button class="like-count" onclick="likePost(${startIndex + posts.indexOf(post)})">Like ${post.likes}</button>`;
        postsContainer.appendChild(postElement);
    } );

   
}

function createNewPost() {

    const postTitle = document.getElementById("title").value;
    const postMessage = document.getElementById("postMessage").value;
    const user = "Anon";

    //console.log(postTitle, postMessage)
    posts.unshift({title:postTitle, message_author:[postMessage,user], likes:0})
    
    displayPosts();
    
    document.getElementById("title").value = "";
    document.getElementById("postMessage").value = "";
    return false;
}



function likePost(index) {
    posts[index].likes = posts[index].likes+1;

    displayPosts();
}

displayPosts();




