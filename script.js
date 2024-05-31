'use strict';

let guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');
const message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

// Function generats numbers beteween 1 and 20
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

// Convert strings to Numbers
let scoreNumber = Number(document.querySelector('.score').innerText);
let highScoreNumber = Number(document.querySelector('.highscore').innerText);

// compare between the input number and the generated number
//when lower message too low if higher message too high
check.addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);
  if (guess.value === '' || guessedNumber === NaN) {
    message.innerHTML = '⛔️ Not a number please try again with a number ...';
  } else if (guessedNumber < 1 || guessedNumber > 20) {
    message.innerText =
      '⛔️ Not a valid number please try a number between 1 and 20';
  } else if (guessedNumber === number) {
    message.innerHTML = 'Correct number';
    scoreNumber++;
    highScoreNumber = scoreNumber;
    score.innerText = String(scoreNumber);
    highScore.innerText = String(highScoreNumber);
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = String(number);
    document.querySelector('.number').style.width = '30rem';
  } else if (guessedNumber > number) {
    if (scoreNumber > 1) {
      message.innerHTML = 'Too High';
      scoreNumber--;
      score.innerText = String(scoreNumber);
    } else {
      message.innerHTML = 'You lost the gain, press again to try once more';
      score.innerText = 0;
      document.body.style.backgroundColor = 'red';
    }
  } else if (guessedNumber < number) {
    if (scoreNumber > 1) {
      message.innerHTML = ' Too low';
      scoreNumber--;
      score.innerText = String(scoreNumber);
    } else {
      message.innerHTML = 'You lost the gain, press again to try once more';
      score.innerText = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
});

// Reset button to initialize all variables
buttonAgain.addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  message.innerHTML = 'Start guessing..';
  guess.value = '';
  score.innerText = '20';
  scoreNumber = 20;
  highScore.innerText = '0';
  document.getElementsByClassName('number')[0].textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
