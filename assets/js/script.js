//Check that the DOM is loaded before javascript functions are run
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('DOM Content fully loaded');
});

//Variable declarations
const play = document.getElementById('play-btn').addEventListener('click', startGame);
const gameContainer = document.getElementById('game-container');
const instructionContainer = document.getElementById('instruction-container');
const landmark = document.getElementById('image');
const choiceA = document.getElementById('choice-a');
const choiceB = document.getElementById('choice-b');
const choiceC = document.getElementById('choice-c');
const choiceD = document.getElementById('choice-d');
const choiceASelect = document.getElementById('choice-a').addEventListener('click', buttonColorA);
const choiceBSelect = document.getElementById('choice-b').addEventListener('click', buttonColorB);
const choiceCSelect = document.getElementById('choice-c').addEventListener('click', buttonColorC);
const choiceDSelect = document.getElementById('choice-d').addEventListener('click', buttonColorD);
const lastQuestion = questions.length - 1;
let currentQuestion = 0;

//startGame
function startGame() {
    instructionContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
    setQuestion();
}

//set question
function setQuestion() {
    let q = questions[currentQuestion];
    landmark.src = q.image;
    choiceA.innerHTML = q.a;
    choiceB.innerHTML = q.b;
    choiceC.innerHTML = q.c;
    choiceD.innerHTML = q.d;
}


let timeOut;

//check answer and change colour 
function buttonColorA() {
    if (choiceA.innerHTML === questions[currentQuestion].correct) {
    choiceA.classList.add('correct-choice');
    choiceB.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
    } else {
    choiceA.classList.add('incorrect-choice');
    }
    timeOut = setTimeout(nextQuestion, 2000);
}

function buttonColorB() {
    if (choiceB.innerHTML === questions[currentQuestion].correct) {
    choiceB.classList.add('correct-choice');
    choiceA.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
    } else {
    choiceB.classList.add('incorrect-choice');
    }
}

function buttonColorC() {
    if (choiceC.innerHTML === questions[currentQuestion].correct) {
    choiceB.classList.add('correct-choice');
    choiceA.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
    } else {
    choiceC.classList.add('incorrect-choice');
    }
}

function buttonColorD() {
    if (choiceD.innerHTML === questions[currentQuestion].correct) {
    choiceD.classList.add('correct-choice');
    choiceB.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceA.setAttribute("disabled", "disabled");
    } else {
    choiceD.classList.add('incorrect-choice');
    }
}

//set next question 
function nextQuestion() {
    choiceA.classList.remove('correct-choice');
    choiceA.classList.remove('incorrect-choice');
    currentQuestion++
    setQuestion()
}