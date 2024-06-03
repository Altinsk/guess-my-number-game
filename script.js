'use strict';

// Declare variables
let guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

// Convert strings to Numbers
let scoreNumber = Number(document.querySelector('.score').innerText);
let highScoreNumber = Number(document.querySelector('.highscore').innerText);

// Function generats numbers beteween 1 and 20
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

// Function to displayMessage
const displayMessage = function (myMessage) {
  document.querySelector('.message').textContent = myMessage;
};

// Function to Style background
const changeBackGround = function (myBackground) {
  document.body.style.backgroundColor = myBackground;
};

// compare between the input number and the generated number
//when lower message too low if higher message too high
check.addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);
  if (guess.value === '' || guessedNumber === NaN) {
    displayMessage('⛔️ Not a number please try again with a number ...');
  } else if (guessedNumber < 1 || guessedNumber > 20) {
    displayMessage(
      '⛔️ Not a valid number please try a number between 1 and 20'
    );
  } else if (guessedNumber === number) {
    if (scoreNumber > highScoreNumber) {
      highScoreNumber = scoreNumber;
    }
    displayMessage('Correct number');
    score.innerText = String(scoreNumber);
    highScore.innerText = String(highScoreNumber);
    changeBackGround('#60b347');
    document.querySelector('.number').textContent = String(number);
    document.querySelector('.number').style.width = '30rem';
  } else if (guessedNumber > number) {
    if (scoreNumber > 1) {
      displayMessage('Too High');
      scoreNumber--;
      score.innerText = String(scoreNumber);
    } else {
      displayMessage('You lost the gain, press again to try once more');
      score.innerText = 0;
      changeBackGround('red');
    }
  } else if (guessedNumber < number) {
    if (scoreNumber > 1) {
      displayMessage(' Too low');
      scoreNumber--;
      score.innerText = String(scoreNumber);
    } else {
      displayMessage('You lost the gain, press again to try once more');
      score.innerText = 0;
      changeBackGround('red');
    }
  }
});

// Reset button to initialize all variables
buttonAgain.addEventListener('click', function () {
  changeBackGround('#222');
  displayMessage('Start guessing..');
  guess.value = '';
  score.innerText = '20';
  scoreNumber = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.getElementsByClassName('number')[0].textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
