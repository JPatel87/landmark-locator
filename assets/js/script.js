//Declare variables that are not to be reassigned or redeclared, using const keyword
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

//Declare variables that are subject to re-assignment using let keyword
let currentLandmark = 0;
let currentLandmarkActual = 1;
let maxLandmarks = 20;
let numberAnswersCorrect = 0;
let timeLeft = 10;
let timer;
let endGame;

//Add event listeners to start button, tour again button, home button and choice buttons
document.getElementById('start-tour-btn').addEventListener('click', startGame);
document.getElementById('tour-again-btn').addEventListener('click', restartGame);
document.getElementById('home-btn').addEventListener('click', homeDisplay);
document.getElementById('choice-a').addEventListener('click', function () {
    buttonColor('choice-a');
});
document.getElementById('choice-b').addEventListener('click', function () {
    buttonColor('choice-b');
});
document.getElementById('choice-c').addEventListener('click', function () {
    buttonColor('choice-c');
});
document.getElementById('choice-d').addEventListener('click', function () {
    buttonColor('choice-d');
});

/* The startGame function will start the game once the start tour button is clicked. This function
hides the instruction container and displays the game container. It then calls the setLandmark 
function to fill the game components. The timer counter is set 10 seconds and the countdown function
is called. The current landmark number is also displayed. 
*/
function startGame() {
    instructionContainer.style.display = 'none';
    gameContainer.classList.remove('hide');
    endGame = false;
    setLandmark();
    timeLeft = 10;
    countDown();
    currentLandmarkDisplay();
}

/* The setLandmark function will fill the html landmark image and button choices 
with the current landmark image and answer choices. This function will be called by the startGame function when activated. 
The following website was used for guidance: https://www.codeexplained.org/2018/10/create-multiple-choice-quiz-using-javascript.html
*/
function setLandmark() {
    let q = landmarks[currentLandmark];
    landmarkImg.src = q.image;
    landmarkImg.alt = q.alt;
    choiceA.innerHTML = q.a;
    choiceB.innerHTML = q.b;
    choiceC.innerHTML = q.c;
    choiceD.innerHTML = q.d;
}

/* The countDown function will start the countdown running from 10 seconds, 
after being called by the startGame function. This will countdown the time in 1 second intervals 
and will decrement by 1. 
*/
function countDown() {
    timer = setInterval(function () {
        if (endGame) {
            clearInterval(timer); //If the game gets to the end, stop the countdown, reset the timer
            timeLeft = 10;
        }
        if (timeLeft <= 0) { //if timer gets to 0 and this is not the last landmark, the timer will reset to 10 seconds and move on to next question
            if (!endGame) {
                timeLeft = 10;
            }
            nextLandmark();
        }
        timeLeftDisplay.innerHTML = `${timeLeft} seconds`; //display timer countdown to user in seconds
        timeLeft -= 1;
    }, 1000);
}

/* The currentLandmarkDisplay function sets the landmark number 
html to the currentLandmark number out of the max landmark number so users know how many 
landmarks are left in the game 
*/
function currentLandmarkDisplay() {
    landmarkNumber.innerHTML = `Landmark ${currentLandmarkActual} of ${maxLandmarks}`;
}

/* The buttonColor(choice) function causes choice buttons to change colour once clicked. 
It checks for whether the choice text matches the answer for that question.
If the answer is correct the button will change to green and if it is incorrect 
it will change to red. The function will then call the 
choiceColorReset(choiceSelect) function to reset all choice button colours and classes 
*/
function buttonColor(choice) {
    const choiceSelect = document.getElementById(choice);
    if (choiceSelect.innerHTML === landmarks[currentLandmark].correct) {
        choiceSelect.classList.add('correct-choice'); //changes button to green  
        numberAnswersCorrect++;
    } else {
        choiceSelect.classList.add('incorrect-choice'); //changes button to red 
    }
    disableChoices(); //disable all choices once one is selected
    setTimeout(function () {
        choiceColorReset(choiceSelect);
    }, 500); //hold colour change for 500ms before resetting so users know if they got it correct or not
    timeLeft = 0; //once an option is selected the timer will automatically go to 0.
}

/* The function disableChoices is called once a choice button is selected and it stops 
any further choice buttons from being selected. 
All buttons reduce in opacity to provide a visual indication of this 
*/
function disableChoices() {
    choiceA.setAttribute("disabled", "disabled");
    choiceB.setAttribute("disabled", "disabled");
    choiceC.setAttribute("disabled", "disabled");
    choiceD.setAttribute("disabled", "disabled");
}

/* The function choiceColorReset(choiceSelect) removes previous choice button 
colours and disabled classes and resets them, after a choice has been selected.
*/
function choiceColorReset(choiceSelect) {
    choiceSelect.classList.remove('correct-choice');
    choiceSelect.classList.remove('incorrect-choice');
    choiceA.removeAttribute("disabled");
    choiceB.removeAttribute("disabled");
    choiceC.removeAttribute("disabled");
    choiceD.removeAttribute("disabled");
}

/* The nextLandmark function is called by the countDown function once its gets to 0 count 
and if there are still landmarks left in the game. The next question is set if the 
game has not ended and the current landmark number is incremented by 1. If the game has no further 
landmarks to display, the game will call the endGameSummary function. 
*/
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

/* The endGameSummary function is called by the nextQuestion function 
if there are no more landmarks left to display. This function checks how many answers are correct 
and displays a summary text and image to reflect the score. 
The following website was used for guidance: https://www.codeexplained.org/2018/10/create-multiple-choice-quiz-using-javascript.html 
*/
function endGameSummary() {
    gameContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    let summaryText = (numberAnswersCorrect <= 5) ? 'Nevermind, why not tour again and see if you can do better?' :
        (numberAnswersCorrect <= 9) ? 'Good attempt, there is room for improvement, tour again and lets see if you can do better!' :
        (numberAnswersCorrect <= 15) ? 'Well done! You got at least half of the landmarks correct, only a few errors, tour again?' :
        (numberAnswersCorrect <= 19) ? 'Great effort, almost perfection, tour again and see if you can get them all correct!' : 'Superb effort, your Geography is perfect!';
    finalScore.innerHTML = `You got ${numberAnswersCorrect} out of 20 landmarks correct`;
    scoreFeedback.innerHTML = `${summaryText}`;
    const scoreImage = document.getElementById('score-image');
    switch (summaryText) {
        case 'Nevermind, why not tour again and see if you can do better?':
            scoreImage.src = 'assets/images/low-score.png';
            scoreImage.alt = 'emoji for low score';
            break;
        case 'Good attempt, there is room for improvement, tour again and lets see if you can do better!':
            scoreImage.src = 'assets/images/average-score.png';
            scoreImage.alt = 'emoji for average score';
            break;
        case 'Well done! You got at least half of the landmarks correct, only a few errors, tour again?':
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

/* The restartGame function is called once the tour again button is clicked. 
It calls the startGame function to activate and the score container to disappear. 
All previous question counters and scores are reset.
*/
function restartGame() {
    scoreContainer.classList.add('hide');
    currentLandmarkActual = 1;
    currentLandmark = 0;
    numberAnswersCorrect = 0;
    endGame = false;
    startGame();
}

/* The homeDisplay function is called once the home button is clicked. 
It causes the instruction container to appear and the score container to disappear 
and then the user can initiate any further actions
from the instruction container itself. All previous question counters and scores are reset
 */
function homeDisplay() {
    scoreContainer.classList.add('hide');
    document.getElementById('start-tour-btn').addEventListener('click', startGame);
    instructionContainer.style.display = 'flex';
    currentLandmarkActual = 1;
    currentLandmark = 0;
    numberAnswersCorrect = 0;
}