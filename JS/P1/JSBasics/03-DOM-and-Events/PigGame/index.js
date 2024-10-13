'use strict';

const winningScore = 20;

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, activePlayer, scores;

const init = () => {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  [player0El, player1El].forEach(e => e.classList.remove('player--winner'));
  document.querySelectorAll('.current-score').forEach(e => (e.textContent = 0));
  document.querySelectorAll('.score').forEach(e => (e.textContent = 0));
};

const changePlayer = () => {
  currentScore = 0;
  document.querySelector(`.player--${activePlayer} .current-score`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollDice = () => {
  if (scores[activePlayer] >= winningScore) return;

  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`.player--${activePlayer} .current-score`).textContent = currentScore;
  } else {
    changePlayer();
  }
};

const hold = () => {
  if (scores[activePlayer] >= winningScore || currentScore === 0) return;

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  if (scores[activePlayer] >= winningScore) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  } else {
    changePlayer();
  }
};

btnNew.addEventListener('click', init);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);

init();
