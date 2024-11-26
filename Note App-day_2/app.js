const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes("notes");
saveData();

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
    saveData();
}

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "ayplogo.png";
    noteContainer.appendChild(inputBox).appendChild(img);
   
})
 saveData();

noteContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
function saveData(){
    localStorage.setItem("data", noteContainer.innerHTML);
}
function showTask(){
    noteContainer.innerHTML = localStorage.getItem("data");
}
showTask()