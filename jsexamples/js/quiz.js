"use strict";
const qa = [
     {
            question: "What is the largest land animal?",
            answer: "Elephant"
        },
        {
            question: "Which animal is known as the king of the jungle?",
            answer: "Lion"
        },
        {
            question: "What mammal can fly?",
            answer: "Bat"
        },
        {
            question: "Which animal is famous for its black and white stripes?",
            answer: "Zebra"
        },
        {
            question: "What is the fastest land animal?",
            answer: "Cheetah"
        }
];

let currentQuestion = 0;
console.log(qa[0].question);
document.getElementById("question").innerHTML = qa[currentQuestion].question;

let submitButton = document.getElementById("submit");
let result = document.getElementById("result");
let score = 0;

submitButton.addEventListener("click", function(){
//    const selected = document.querySelector('input[name="option"]:checked');
//      console.log(selected.value);
//      if(selected.value == qa[currentQuestion].answer){
//         console.log("correct");
//         increaseScore();
//         nextQuestion();
//         updateQuestion();
//      }else{
//         console.log("incorrect");
//         decreaseScore();
//      }
     if(checkAnswer() == true){
        increaseScore();
        nextQuestion();
        updateQuestion();
    }else{
        decreaseScore();
        nextQuestion();
        updateQuestion();
     }
     });

function checkAnswer(){
    const selected = document.querySelector('input[name="option"]:checked');
        console.log(selected.value);
        if(selected.value == qa[currentQuestion].answer){
            return true;
        }else{
            return false;
        }
}

function nextQuestion(){
    //currentQuestion = currentQuestion + 1;
    currentQuestion++;
    if(currentQuestion == qa.length){
        currentQuestion = 0;
    }
}

function updateQuestion(){
    document.getElementById("question").innerHTML = qa[currentQuestion].question;
    [currentQuestion].question;
}

function increaseScore(){
    score++;
    result.innerHTML = "Correct Score:" + score;
    //setTimeout(clearResult(), 9000);
}

function decreaseScore(){
    score--;
    result.innerHTML = "Incorrect Score:" + score;
    //setTimeout(clearResult(), 9000);
}

// function clearResult(){
//     document.getElementById("result").innerHTML = "";
// }
    