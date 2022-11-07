function getComputer() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[(Math.floor(Math.random() * options.length))];
}

function getPlayer() {
    let playerReply = prompt("Choose Rock, Paper, or Scissors:");
    let playerSelection = playerReply.replace((playerReply), (playerReply.charAt(0).toUpperCase() + playerReply.slice(1).toLowerCase()));
    return playerSelection;
}

let playerScore = 0;
let computerScore = 0;

function playRound(selection) {
    let playerSelection = selection;
    let computerSelection = getComputer()
    console.log(playerSelection);
    console.log(computerSelection);

    // includes scorekeeper for game()
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        winner.textContent = (`${computerSelection} beats ${playerSelection}. You lose!`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        winner.textContent = (`${computerSelection} beats ${playerSelection}. You lose!`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        winner.textContent = (`${computerSelection} beats ${playerSelection}. You lose!`);
    } else if (playerSelection === computerSelection) {
        winner.textContent = (`Tie! Try again.`);
    } else {
        playerScore++;
        winner.textContent = (`${playerSelection} beats ${computerSelection}. You win!`);
    };
    bigWinner.textContent = `${finale(playerScore, computerScore)}`
    score.textContent = `Player: ${playerScore}    Computer:${computerScore}`
};

//button
const bbox = document.querySelector('.bbox')
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    console.log('Rock');
    playRound('Rock');

});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    console.log('Paper');
    playRound('Paper');
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    console.log('Scissors');
    playRound('Scissors');
});
//DOM
const data = document.querySelector('.data');
const winner = document.querySelector('.winner');
winner.textContent = 'Play a game!';
winner.classList.add('winner')
const score = document.querySelector('.score');
score.classList.add('score');
score.textContent = `Player: ${playerScore}    Computer:${computerScore}`

const ultimate =document.querySelector('.ultimate')
const bigWinner = document.querySelector('.bigWinner')
bigWinner.classList.add('.bigWinner')
bigWinner.textContent = `${finale(playerScore, computerScore)}`

function finale(playerScore, computerScore) {
    
    if (playerScore >= 5) {
        return`Humanity wins!\n${playerScore} to ${computerScore}`
   } else if (computerScore >= 5) {
        return `Humanity loses.\n${computerScore} to ${playerScore}.`
   } else {
        return  ``
    } 
};