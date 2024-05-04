// Change the profile picture for edit-profile.html
document.getElementById('image-input').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
        document.getElementById('profile-image').src = e.target.result;
    };
    
    reader.readAsDataURL(file);
});

// Retrieve user information from the profile page to use for edit-profile.html
document.addEventListener("DOMContentLoaded", function() {
    var username = localStorage.getItem("username");
    var pronouns = localStorage.getItem("pronouns");
    var about = localStorage.getItem("about");

    document.getElementById("username-box").placeholder = username;
    document.getElementById("pronouns-box").placeholder = pronouns;
    document.getElementById("about-box").placeholder = about;
});

document.addEventListener("DOMContentLoaded", function() {
    var saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", function() {
        // Get the updated values from the input fields
        var newUsername = document.getElementById("username-box").value;
        var newPronouns = document.getElementById("pronouns-box").value;
        var newAbout = document.getElementById("about-box").value;

        // Save the updated values to localStorage
        localStorage.setItem("username", newUsername);
        localStorage.setItem("pronouns", newPronouns);
        localStorage.setItem("about", newAbout);

        // Redirect to profile page
        window.location.href = "profile.html";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var discardButton = document.getElementById("discardButton");

    discardButton.addEventListener("click", function() {
        window.location.href = "profile.html";
    });
});

