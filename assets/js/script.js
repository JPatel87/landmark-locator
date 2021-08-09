//Check that the DOM is loaded before javascript functions are run
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('DOM Content fully loaded');
});

//Variable declarations
const play = document.getElementById('play-btn').addEventListener('click', startGame);
const playAgain = document.getElementById('play-again-btn').addEventListener('click', restartGame);
const homeButton = document.getElementById('home-btn').addEventListener('click', homeDisplay);
const instructionContainer = document.getElementById('instruction-container');
const gameContainer = document.getElementById('game-container');
const landmark = document.getElementById('image');
const choiceA = document.getElementById('choice-a');
const choiceB = document.getElementById('choice-b');
const choiceC = document.getElementById('choice-c');
const choiceD = document.getElementById('choice-d');
const scoreContainer = document.getElementById('score-container')
const choiceASelect = document.getElementById('choice-a').addEventListener('click', function() {
    buttonColor('choice-a')
});
const choiceBSelect = document.getElementById('choice-b').addEventListener('click', function() {
    buttonColor('choice-b')
});
const choiceCSelect = document.getElementById('choice-c').addEventListener('click', function() {
    buttonColor('choice-c')
});
const choiceDSelect = document.getElementById('choice-d').addEventListener('click', function() {
    buttonColor('choice-d')
});
const questionNumber = document.getElementById('question-number');
const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let currentQuestionActual = 1;
let maxQuestions = 2;
let numberAnswersCorrect = 0;
let finalScore = document.getElementById('final-score');
let scoreFeedback = document.getElementById('score-feedback')

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
    landmark.alt = q.alt;
    choiceA.innerHTML = q.a;
    choiceB.innerHTML = q.b;
    choiceC.innerHTML = q.c;
    choiceD.innerHTML = q.d;
}

//set question display
function currentQuestionDisplay() {
    questionNumber.innerHTML = `Question ${currentQuestionActual} of ${maxQuestions}`
}

//change button color once clicked
function buttonColor(choice) {
    const choiceSelect = document.getElementById(choice)
    if (choiceSelect.innerHTML === questions[currentQuestion].correct) {
    choiceSelect.classList.add('correct-choice');
    numberAnswersCorrect++
    console.log(numberAnswersCorrect)
    } else {
    choiceSelect.classList.add('incorrect-choice');
    }
    disableChoices()
    timeOut = setTimeout(function() {
        choiceColorReset(choiceSelect)
    }, 3000);
}

function disableChoices() {
    choiceA.setAttribute("disabled", "disabled");
    choiceB.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
}

function choiceColorReset(choiceSelect) {
    choiceSelect.classList.remove('correct-choice');
    choiceSelect.classList.remove('incorrect-choice');
    choiceA.removeAttribute("disabled")
    choiceB.removeAttribute("disabled");
    choiceC.removeAttribute("disabled");
    choiceD.removeAttribute("disabled");
    nextQuestion();
}

//set next question
function nextQuestion() {
    currentQuestion++;
    currentQuestionActual++;
    if (currentQuestionActual <= maxQuestions) {
        currentQuestionDisplay();
        setQuestion();
    } else {
        endGameSummary()
    }
}

function endGameSummary() {
    gameContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    let summary = (numberAnswersCorrect <=5) ? "Lets tour again and improve this score":
                  (numberAnswersCorrect <=10) ? "Fair effort, perhaps a re-tour may jog your memory?":
                  (numberAnswersCorrect <=15) ? "Good effort, only a few errors, why not re-tour?":
                  (numberAnswersCorrect <=19) ? "Great effort, almost perfection" : "Superb effort, your Geography is perfect!"
    finalScore.innerHTML = `You scored ${numberAnswersCorrect} out of 20`;
    scoreFeedback.innerHTML = `${summary}`;
}

//restart Game
function restartGame() {
    instructionContainer.style.display = 'none';
    scoreContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
    currentQuestionActual = 1
    currentQuestion = 0;
    numberAnswersCorrect = 0;
    setQuestion();
    currentQuestionDisplay() 
};

//home display
function homeDisplay() {
    instructionContainer.style.display = 'block'
    scoreContainer.classList.add('hide');
    currentQuestionActual = 1
    currentQuestion = 0;
    numberAnswersCorrect = 0;
    setQuestion();
    currentQuestionDisplay()
}