//Check that the DOM is loaded before javascript functions are run
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('DOM Content fully loaded');
});

//Constant declarations
const instructionContainer = document.getElementById('instruction-container');
const gameContainer = document.getElementById('game-container');
const landmarkImg = document.getElementById('landmark-image');
const choiceA = document.getElementById('choice-a');
const choiceB = document.getElementById('choice-b');
const choiceC = document.getElementById('choice-c');
const choiceD = document.getElementById('choice-d');
const scoreContainer = document.getElementById('score-container');
const landmarkNumber = document.getElementById('landmark-number');
const finalScore = document.getElementById('final-score');
const scoreFeedback = document.getElementById('score-feedback');
const timeLeftDisplay = document.getElementById('time-left');

//Let declarations
let currentLandmark = 0;
let currentLandmarkActual = 1;
let maxLandmarks = 2;
let numberAnswersCorrect = 0;
let timeLeft = 10;
let timer;
let endGame;

//Event listeners
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('tour-again-btn').addEventListener('click', restartGame);
document.getElementById('home-btn').addEventListener('click', homeDisplay);
document.getElementById('choice-a').addEventListener('click', function() {
    buttonColor('choice-a');
});
document.getElementById('choice-b').addEventListener('click', function() {
    buttonColor('choice-b');
});
document.getElementById('choice-c').addEventListener('click', function() {
    buttonColor('choice-c');
});
document.getElementById('choice-d').addEventListener('click', function() {
    buttonColor('choice-d');
});

//startGame
function startGame() {
    instructionContainer.style.display = 'none';
    gameContainer.classList.remove('hide');
    endGame = false;
    setLandmark();
    timeLeft = 10;
    countDown();
    currentLandmarkDisplay();
}

//set landmark
function setLandmark() {
    let q = landmarks[currentLandmark];
    landmarkImg.src = q.image;
    landmarkImg.alt = q.alt;
    choiceA.innerHTML = q.a;
    choiceB.innerHTML = q.b;
    choiceC.innerHTML = q.c;
    choiceD.innerHTML = q.d;
}

//countdown
function countDown() {
    timer = setInterval(function(){
        if (endGame) {
            clearInterval(timer);
            timeLeft = 10;
        }
        if(timeLeft <=0) {
            if(!endGame) {
                timeLeft = 10;
            } 
            nextLandmark();
        }
        timeLeftDisplay.innerHTML = `${timeLeft} seconds`;
        timeLeft -=1;
    }, 1000);
}

//set landmark display
function currentLandmarkDisplay() {
    landmarkNumber.innerHTML = `Landmark ${currentLandmarkActual} of ${maxLandmarks}`;
}

//change button color once clicked
function buttonColor(choice) {
    const choiceSelect = document.getElementById(choice);
    if (choiceSelect.innerHTML === landmarks[currentLandmark].correct) {
    choiceSelect.classList.add('correct-choice');
    numberAnswersCorrect++;
    console.log(numberAnswersCorrect);
    } else {
    choiceSelect.classList.add('incorrect-choice');
    }
    disableChoices();
    setTimeout(function() {
        choiceColorReset(choiceSelect) ;
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
    choiceA.removeAttribute("disabled");
    choiceB.removeAttribute("disabled");
    choiceC.removeAttribute("disabled");
    choiceD.removeAttribute("disabled");
}

//set next landmark
function nextLandmark() {
    currentLandmark++;
    currentLandmarkActual++;
    if (currentLandmarkActual <= maxLandmarks) {
        currentLandmarkDisplay();
        setLandmark();
    } else {
        endGame = true;
        endGameSummary();
    }
}

//display end game summary
function endGameSummary() {
    gameContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    let summaryText = (numberAnswersCorrect <=5) ? 'Nevermind, why not tour again and see if you can do better?':
                  (numberAnswersCorrect <=10) ? 'Almost half way there, tour again and lets see if you can do better!':
                  (numberAnswersCorrect <=15) ? 'Good effort, only a few errors, tour again?':
                  (numberAnswersCorrect <=19) ? 'Great effort, almost perfection, tour again and see if you can get them all correct!' : 'Superb effort, your Geography is perfect!';
                  finalScore.innerHTML = `You got ${numberAnswersCorrect} out of 20 landmarks correct`;
    scoreFeedback.innerHTML = `${summaryText}`;
    const scoreImage = document.getElementById('score-image');
    switch (summaryText) {
        case 'Nevermind, why not tour again and see if you can do better?':
            scoreImage.src = 'assets/images/low-score.png';
            scoreImage.alt = 'emoji for low score';
            break;
        case 'Almost half way there, tour again and lets see if you can do better!':
            scoreImage.src = 'assets/images/average-score.png';
            scoreImage.alt = 'emoji for average score';
            break;
        case 'Good effort, only a few errors, tour again?':
            scoreImage.src = 'assets/images/high-score.png';
            scoreImage.alt = 'emoji for high score';
            break;
        case 'Great effort, almost perfection, tour again and see if you can get them all correct!':
            scoreImage.src = 'assets/images/very-high-score.png';
            scoreImage.alt = 'emoji for very high score';
            break;
        default: 
            scoreImage.src = 'assets/images/perfect-score.png';
            scoreImage.alt = 'emoji for perfect score';
    }
}

//restart game
function restartGame() {
    scoreContainer.classList.add('hide');
    currentLandmarkActual = 1;
    currentLandmark = 0;
    numberAnswersCorrect = 0;
    endGame = false;
    startGame();
}

//go to home display
function homeDisplay() {
    scoreContainer.classList.add('hide');
    document.getElementById('start-btn').addEventListener('click', startGame);
    instructionContainer.style.display = 'flex';
    currentLandmarkActual = 1;
    currentLandmark = 0;
    numberAnswersCorrect = 0;
}