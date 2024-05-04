function displayAnnouncement(){
    if(document.getElementById("push-announcement").style.visibility == "visible")
    {
        document.getElementById("push-announcement").style.visibility = "hidden";
    } 
    else{
        document.getElementById("push-announcement").style.visibility = "visible";
    }
    
}