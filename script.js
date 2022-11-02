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

function playRound() {
    let playerSelection = getPlayer()
    let computerSelection = getComputer()
    let prompt = ''
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
    } else if (playerSelection === computerSelection) {
        console.log(`Tie! Try again.`);
    } else {
        playerScore++;
        console.log(`${playerSelection} beats ${computerSelection}. You win!`);
    };

    return prompt
};


function game() {
    for (let i = 0; i < 5; i++) {
        playRound() 
        };
    if (playerScore > computerScore) {
        return `Humanity wins! ${playerScore} to ${computerScore}`
    } else if (playerScore < computerScore) {
        return `Humanity loses. ${computerScore} to ${playerScore}. Perdition beckons.`
    } else {
        return `Tie game! The score was ${computerScore} to ${playerScore}. Maybe we can do that thing from the movie War Games.`
    }
    };



function getPlayer() {
    let playerReply = prompt("Choose Rock, Paper, or Scissors:");
    let playerSelection = playerReply.replace((playerReply), (playerReply.charAt(0).toUpperCase() + playerReply.slice(1).toLowerCase()));
    return playerSelection;
}
    




