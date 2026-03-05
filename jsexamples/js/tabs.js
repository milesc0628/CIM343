"use strict"

let tabContent = document.querySelectorAll(".tabcontent");

for (const tab in tabContent){
    console.log(tab);
    for(let i = 0; i<tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
}

tabContent.forEach(tab => {
    tab.style.display = "block";
});

let tablinks = document.querySelectorAll(".tablinks");
tablinks.forEach(button =>{
    button.addEventListener("click", function(){
        let currentButton = button.innerHTML;
        document.getElementById(currentButton).style.display = block;
    });
});