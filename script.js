let Rock = 1
let Paper = 2
let Scissors = 3
let options = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(options) {
    return options[(Math.floor(Math.random() * options.length))];
};
console.log(getComputerChoice(options));
const computerSelection = getComputerChoice(options);


const playerReply = prompt("Choose Rock, Paper, or Scissors:");
console.log(playerReply);
const playerSelection = playerReply.replace((playerReply), (playerReply.charAt(0).toUpperCase() + playerReply.slice(1).toLowerCase()));
console.log(playerSelection);


function rockPaperScissors(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
    } else {
        console.log(`${playerSelection} beats ${computerSelection}. You win!`)
    }
};
console.log(rockPaperScissors(playerSelection, computerSelection));