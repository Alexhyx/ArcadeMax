// Retrieve user information from the profile page
document.addEventListener("DOMContentLoaded", function() {
    var username = document.getElementById("username").innerText;
    var pronouns = document.getElementById("pronouns").innerText;
    var about = document.getElementById("about").innerText;

    // Store user information in localStorage to use for edit-profile.html
    localStorage.setItem("username", username);
    localStorage.setItem("pronouns", pronouns);
    localStorage.setItem("about", about);
});
