'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

function refreshUI(messageContent) {
  document.querySelector('.message').textContent = messageContent;
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.highscore').textContent = highScore;
}

function againClicked() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  refreshUI('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').removeAttribute('disabled');
  document.querySelector('.check').addEventListener('click', checkClicked);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
}

function checkClicked() {
  const guess = parseInt(document.querySelector('.guess').value);
  let messageContent;
  if (!guess) {
    messageContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    messageContent = '🎉 Guess is Correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    highScore = Math.max(currentScore, highScore);
    document.querySelector('.check').setAttribute('disabled', true);
    document.querySelector('.check').removeEventListener('click', checkClicked);
  } else {
    messageContent = updateScoreAndCheckGameOver(
      `⛔ Guess is ${guess < secretNumber ? 'Lower' : 'Higher'} than Secret!`
    );
  }
  refreshUI(messageContent);
}

function updateScoreAndCheckGameOver(messageContent) {
  document.querySelector('body').style.backgroundColor = '#c22';
  if (currentScore > 1) {
    currentScore--;
  } else {
    currentScore = 0;
    messageContent = '💥 You lost the game!';
    document.querySelector('.check').setAttribute('disabled', true);
    document.querySelector('.check').removeEventListener('click', checkClicked);
  }
  return messageContent;
}

document.querySelector('.check').addEventListener('click', checkClicked);
document.querySelector('.again').addEventListener('click', againClicked);
