let see = document.getElementById("see");
let Password = document.getElementById("Password");

see.onclick = function(){
    if(Password.type == "password"){
        Password.type = "text";
        see.textContent = "Hide";
    }
    else {
        Password.type = "password";
        see.textContent = "See";
    }
    
}