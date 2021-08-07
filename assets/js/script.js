//Check that the DOM is loaded before javascript functions are run
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('DOM Content fully loaded');
});

//Variable declarations
const play = document.getElementById('play-btn').addEventListener('click', startGame);
const instructionContainer = document.getElementById('instruction-container');
const gameContainer = document.getElementById('game-container');
const landmark = document.getElementById('image');
const choiceA = document.getElementById('choice-a');
const choiceB = document.getElementById('choice-b');
const choiceC = document.getElementById('choice-c');
const choiceD = document.getElementById('choice-d');
const choiceASelect = document.getElementById('choice-a').addEventListener('click', buttonColorA);
const choiceBSelect = document.getElementById('choice-b').addEventListener('click', buttonColorB);
const choiceCSelect = document.getElementById('choice-c').addEventListener('click', buttonColorC);
const choiceDSelect = document.getElementById('choice-d').addEventListener('click', buttonColorD);
const questionNumber = document.getElementById('question-number');
const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let currentQuestionActual = 1;
let maxQuestions = 20;

//startGame
function startGame() {
    instructionContainer.style.display = 'none';
    gameContainer.classList.remove('hide');
    setQuestion();
    currentQuestionDisplay() 
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

//set question display
function currentQuestionDisplay() {
    questionNumber.innerHTML = `Question ${currentQuestionActual} of ${maxQuestions}`
}

let timeOut;

//check answer and change colour 
function buttonColorA() {
    if (choiceA.innerHTML === questions[currentQuestion].correct) {
    choiceA.classList.add('correct-choice');
    choiceB.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
    timeOut = setTimeout(colorResetA, 3000);
    } else {
    choiceA.classList.add('incorrect-choice');
    choiceB.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
    timeOut = setTimeout(colorResetA, 3000);
    }
}

function buttonColorB() {
    if (choiceB.innerHTML === questions[currentQuestion].correct) {
    choiceB.classList.add('correct-choice');
    choiceA.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
    timeOut = setTimeout(colorResetB, 3000);
    } else {
    choiceB.classList.add('incorrect-choice');
    choiceA.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
    timeOut = setTimeout(colorResetB, 3000);
    }
}

function buttonColorC() {
    if (choiceC.innerHTML === questions[currentQuestion].correct) {
    choiceC.classList.add('correct-choice');
    choiceA.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
    timeOut = setTimeout(colorResetC, 3000);
    } else {
    choiceC.classList.add('incorrect-choice');
    choiceA.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
    timeOut = setTimeout(colorResetC, 3000);
    }
}

function buttonColorD() {
    if (choiceD.innerHTML === questions[currentQuestion].correct) {
    choiceD.classList.add('correct-choice');
    choiceA.setAttribute("disabled", "disabled");
    choiceB.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    timeOut = setTimeout(colorResetD, 3000);
    } else {
    choiceD.classList.add('incorrect-choice');
    choiceA.setAttribute("disabled", "disabled");
    choiceB.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    timeOut = setTimeout(colorResetD, 3000);
    }
}

//Colour reset
function colorResetA() {
    choiceA.classList.remove('correct-choice');
    choiceA.classList.remove('incorrect-choice');
    choiceB.removeAttribute("disabled");
    choiceC.removeAttribute("disabled");
    choiceD.removeAttribute("disabled");
    nextQuestion();
}

function colorResetB() {
    choiceB.classList.remove('correct-choice');
    choiceB.classList.remove('incorrect-choice');
    choiceA.removeAttribute("disabled");
    choiceC.removeAttribute("disabled");
    choiceD.removeAttribute("disabled");
    nextQuestion();
}

function colorResetC() {
    choiceC.classList.remove('correct-choice');
    choiceC.classList.remove('incorrect-choice');
    choiceA.removeAttribute("disabled");
    choiceB.removeAttribute("disabled");
    choiceD.removeAttribute("disabled");
    nextQuestion();
}

function colorResetD() {
    choiceD.classList.remove('correct-choice');
    choiceD.classList.remove('incorrect-choice');
    choiceA.removeAttribute("disabled");
    choiceB.removeAttribute("disabled");
    choiceC.removeAttribute("disabled");
    nextQuestion();
}

//set next question
function nextQuestion() {
    currentQuestion++;
    currentQuestionActual++;
    if (currentQuestionActual <= maxQuestions) {
        console.log(currentQuestionActual)
        currentQuestionDisplay();
        setQuestion();
    } else {
        console.log("end questions")
    }
}