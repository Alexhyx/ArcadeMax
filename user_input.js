function displayOtherText()
{
    console.log("Made it here")
    if (document.getElementById("other").checked){
        document.getElementById("ifOther").style.visibility = "visible";
    }
    else{
        document.getElementById("ifOther").style.visbility = "hidden";
    }
}