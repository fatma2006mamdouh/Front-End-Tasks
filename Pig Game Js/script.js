'use strict';

let player0 = document.querySelector('.player--0');
let scorePlayer0 = document.querySelector('#score--0');
let currentScore0 = document.querySelector('#current--0');

let player1 = document.querySelector('.player--1');
let scorePlayer1 = document.querySelector('#score--1');
let currentScore1 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');

const newGame = document.querySelector('.btn--new');
const newRoll = document.querySelector('.btn--roll');
const newHold = document.querySelector('.btn--hold');

scorePlayer0.textContent=0;
scorePlayer1.textContent = 0;

function changePlayer(currPlayer) {

    if (currPlayer == player0) {
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
        currentScore0.textContent = 0;

        return player1;
    } else {
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
      currentScore1.textContent = 0;
      
      return player0;
    }
}

let currPlayer = player0;
let currScore = 0;

dice.classList.remove('active');
function reset() {
    scorePlayer0.textContent = 0;
    scorePlayer1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');

    player1.classList.remove('player--winner');
    player0.classList.remove('player--winner');
    dice.classList.remove('active');
}

const imgs = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

function changeImage(idx) {
    dice.src = imgs[idx - 1];
    dice.classList.add('active');
}

function startGame() {
    let index = Math.floor(Math.random() * 6);
    index++;
    changeImage(index);

    if (index == 1) {
        currPlayer = changePlayer(currPlayer);
        currScore = 0;
    }else {
        currScore += index;
        
        if (currPlayer == player0) {
            currentScore0.textContent = currScore;
        } else {
            currentScore1.textContent = currScore;
        }
    }

   
    console.log(Number(scorePlayer0.textContent));
}

function makeHold() {
    if (currPlayer == player0) {
        let curr = Number(scorePlayer0.textContent);
        curr += currScore;
        scorePlayer0.textContent = curr;
    } else {
       let curr = Number(scorePlayer1.textContent);
       curr += currScore;
       scorePlayer1.textContent = curr; 
    }

     if (Number(scorePlayer0.textContent) >= 100) {
         player0.classList.add('player--winner');
        
     } else if (Number(scorePlayer1.textContent) >= 100) {
       player1.classList.add('player--winner');
     }

    currPlayer = changePlayer(currPlayer);
    currScore = 0;
}
newGame.addEventListener('click', reset);
newRoll.addEventListener('click', startGame);
newHold.addEventListener('click', makeHold);


