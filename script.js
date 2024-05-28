'use strict';

let number = document.querySelector('.number');
let guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');
const message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

// Function generats numbers beteween 1 and 20
number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

// Convert strings to Numbers
let scoreNumber = Number(document.querySelector('.score').innerText);
let highScoreNumber = Number(document.querySelector('.highscore').innerText);

// compare between the input number and the generated number
//when lower message too low if higher message too high
check.addEventListener('click', function () {
  if (guess.value == number) {
    message.innerHTML = 'Correct number';
    scoreNumber += 1;
    highScoreNumber = scoreNumber;
    score.innerText = String(scoreNumber);
    highScore.innerText = String(highScoreNumber);
    document.body.style.backgroundColor = 'green';
  } else if (guess.value > number) {
    message.innerHTML = 'Too High';
    scoreNumber -= 1;
    score.innerText = String(scoreNumber);
  } else if (guess.value < number) {
    message.innerHTML = ' Too low';
    scoreNumber -= 1;
    score.innerText = String(scoreNumber);
  }
});

// Reset button to initialize all variables
buttonAgain.addEventListener('click', function () {
  document.body.style.backgroundColor = 'black';
  message.innerHTML = 'Start guessing..';
  guess.value = '';
  score.innerText = '20';
  highScore.innerText = '0';
});
