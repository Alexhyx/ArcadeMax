function displayAnnouncement(){
    if(document.getElementById("push-announcement").style.visibility == "visible")
    {
        document.getElementById("push-announcement").style.visibility = "hidden";
    } 
    else{
        document.getElementById("push-announcement").style.visibility = "visible";
    }
    
}

function displayBan(){
    if(document.getElementById("ban-user").style.visibility == "visible")
        {
            document.getElementById("ban-user").style.visibility ="hidden";
        }
        else{
            document.getElementById("ban-user").style.visibility = "visible";
        }
}

function submitAnnouncement(){
    let announcement = document.getElementById("announcement").value;
    document.getElementById("announcement").value = "";
}

function submitBan(){
    let ban = document.getElementById("banned").value;
    document.getElementById("banned").value = "";
}