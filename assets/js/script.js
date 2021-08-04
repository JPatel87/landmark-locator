//Check that the DOM is loaded before javascript functions are run
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('DOM Content fully loaded')
});

//Variable declarations
const play = document.getElementById('play-btn').addEventListener('click', startGame)
const gameContainer = document.getElementById('game-container')
const instructionContainer = document.getElementById('instruction-container')
const landmark = document.getElementById('image')
const choiceA = document.getElementById('choice-a')
const choiceB = document.getElementById('choice-b')
const choiceC = document.getElementById('choice-c')
const choiceD = document.getElementById('choice-d')
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