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
let maxQuestions = 3;
let numberAnswersCorrect = 0;
let finalScore = document.getElementById('final-score');
let scoreFeedback = document.getElementById('score-feedback')
let timeLeftDisplay = document.getElementById('time-left')
let timeLeft = 10
let timer;
let endGame;

//startGame
function startGame() {
    instructionContainer.style.display = 'none';
    gameContainer.classList.remove('hide');
    endGame = false;
    setQuestion();
    timeLeft = 10;
    countDown();
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

//countdown
function countDown() {
    timer = setInterval(function(){
        if (endGame) {
            clearInterval(timer)
            timeLeft = 10;
        }
        if(timeLeft <=0) {
            if(!endGame) {
                timeLeft = 10;
            } 
            nextQuestion();
        }
        timeLeftDisplay.innerHTML = `${timeLeft} second(s)`
        timeLeft -=1
    }, 1000)
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
    disableChoices();
    setTimeout(function() {
        choiceColorReset(choiceSelect) 
    }, 500); 
        timeLeft = 0;   
}

//disable buttons once one button is clicked
function disableChoices() {
    choiceA.setAttribute("disabled", "disabled");
    choiceB.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
}

// remove previous choice button settings once a choice has been selected
function choiceColorReset(choiceSelect) {
    choiceSelect.classList.remove('correct-choice');
    choiceSelect.classList.remove('incorrect-choice');
    choiceA.removeAttribute("disabled")
    choiceB.removeAttribute("disabled");
    choiceC.removeAttribute("disabled");
    choiceD.removeAttribute("disabled");
}

//set next question
function nextQuestion() {
    currentQuestion++;
    currentQuestionActual++;
    if (currentQuestionActual <= maxQuestions) {
        currentQuestionDisplay();
        setQuestion();
    } else {
        endGame = true;
        endGameSummary()
    }
}

//display end game summary
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

//restart game
function restartGame() {
    scoreContainer.classList.add('hide')
    currentQuestionActual = 1
    currentQuestion = 0;
    numberAnswersCorrect = 0;
    endGame = false;
    startGame()
};

//go to home display
function homeDisplay() {
    scoreContainer.classList.add('hide');
    play;
    instructionContainer.style.display = 'flex';
    currentQuestionActual = 1
    currentQuestion = 0;
    numberAnswersCorrect = 0;
};