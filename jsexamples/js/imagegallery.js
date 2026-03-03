"use strict";

let galleryClass = document.querySelectorAll(".imageGallery");
console.log(galleryClass);
console.log(galleryClass.length);

/*
galleryClass[0].style.display = "none";
galleryClass[1].style.display = "none";
galleryClass[2].style.display = "none";
*/
/*
for(let i = 0;i<10;i++){
    console.log(i);
}
*/
for(let i = 0; i<galleryClass.length; i++){
    galleryClass[i].style.display = "none";
}

let currentImage = 0;
galleryClass[currentImage].style.display = "block";

let nextButton = document.getElementById("next");

nextButton.addEventListener("click", function(){
    galleryClass[currentImage].style.display = "none";
    currentImage = currentImage + 1;
    if(currentImage == galleryClass.length){
        currentImage = 0;
    }
    galleryClass[currentImage].style.display = "block";
});

let prevButton = document.getElementById("previous");

prevButton.addEventListener("click", function(){
    galleryClass[currentImage].style.display = "none";
    currentImage = currentImage - 1;
    if(currentImage == -1){
        currentImage = galleryClass.length -1;
    }
    galleryClass[currentImage].style.display = "block";
});

let startButton = document.getElementById("start");

let autoCycleActive = false;
let cycleInterval;

startButton.addEventListener("click", function(){
    if(autoCycleActive = false){
        autoCycleActive = true;
        cycleInterval = setInterval(function(){
            console.log("Interval started");
        },3000);
    }
});