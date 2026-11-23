'use strict';

const secretNumber = Math.round(Math.random() * 20 + 1);

function display(class_name) {
  class_name = '.' + class_name;
  return document.querySelector(class_name);
}
const guess= display('guess');
const check = display('check');
const again = display('again');
const number = display('number');

let score = 20;
let high_score =0;


function Guess(val) {
    const message = display('message');
    let Score = display('score .score');
    let highScore = display('high_score .high_score');
    
    if (!val) {
        message.textContent = 'No Number Entered 😃';
        return;
    }
 
    console.log(val)
    //win the game
    if (val == secretNumber) {
        message.textContent = 'You Win The Game🥳'
        
        if (score > high_score)
            high_score = score;
        number.textContent = secretNumber;
        document.body.style.backgroundColor= '#60b347';
        
    }else {
        if (score < 1) {
            message.textContent = "You Lose The Game🧨"
        } else {
            score--;
            if (val < secretNumber) {
                message.textContent = 'Too Low 📉';
            } else {
                message.textContent = 'Too High 📈';
            }
        }
        
    }
    Score.textContent = score;
    highScore.textContent = high_score;
}



check.addEventListener('click', function () {
  let val = guess.value;
  Guess(val);
});


again.addEventListener('click', function () {
    score = 20;
    number.textContent = '?';
    document.body.style.backgroundColor='#222'
    guess.value = "";
});