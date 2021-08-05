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

//check answer and change colour 
function buttonColorA() {
    if (choiceA.innerHTML === questions[currentQuestion].correct) {
    choiceA.style.backgroundColor = "green";
    } else {
    choiceA.style.backgroundColor = "red";
    }
}

function buttonColorB() {
    if (choiceB.innerHTML === questions[currentQuestion].correct) {
    choiceB.style.backgroundColor = "green";
    } else {
    choiceB.style.backgroundColor = "red";
    }
}

function buttonColorC() {
    if (choiceC.innerHTML === questions[currentQuestion].correct) {
    choiceC.style.backgroundColor = "green";
    } else {
    choiceC.style.backgroundColor = "red";
    }
}

function buttonColorD() {
    if (choiceD.innerHTML === questions[currentQuestion].correct) {
    choiceD.style.backgroundColor = "green";
    } else {
    choiceD.style.backgroundColor = "red";
    }
}