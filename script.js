'use strict';

/*CRIANDO NUMERO ALEATÓRIO */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

/*EVENTO NO BOTÂO CHECK */
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // If have not a guess
    document.querySelector('.message').textContent = 'no number';
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = 'Correct Anwser!!!';
    document.querySelector('body').style.backgroundColor = '#60b447'; // Change bgColor when user rights
    document.querySelector('.number').style.width = '30rem'; // Make a bigger box with true number, when user right the anwser.
    document.querySelector('.number').textContent = secretNumber; // Make a secret number visible and user wins the game
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    // If guess is greater than secret number
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your number is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game... try again!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // If guess is lower than secret number
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your number is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game... try again!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent =
    'The game begins, could you guess what is the secret number?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
