function getComputer() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[(Math.floor(Math.random() * options.length))];
}

function playRound() {
    let playerSelection = getPlayer()
    let computerSelection = getComputer()
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return `${computerSelection} beats ${playerSelection}. You lose!`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return `${computerSelection} beats ${playerSelection}. You lose!`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return `${computerSelection} beats ${playerSelection}. You lose!`;
    } else if (playerSelection === computerSelection) {
        return `Tie! Try again.`;
    } else {
        return `${playerSelection} beats ${computerSelection}. You win!`;
    };
};


function game() {
    const playerScore = 0;
    const computerScore = 0;



    for (let i = 0; i < 5; i++) {
        function playRound() {
            let playerSelection = getPlayer()
            let computerSelection = getComputer()
            console.log(playerSelection);
            console.log(computerSelection);
        
            if (playerSelection === 'Rock' && computerSelection === 'Paper') {
                console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
            } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
                console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
            } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
                console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
            } else if (playerSelection === computerSelection) {
                console.log(`Tie! Try again.`);
            } else {
                console.log(`${playerSelection} beats ${computerSelection}. You win!`);
            };
            return playerScore
        };

    };

}

function getPlayer() {
    let playerReply = prompt("Choose Rock, Paper, or Scissors:");
    let playerSelection = playerReply.replace((playerReply), (playerReply.charAt(0).toUpperCase() + playerReply.slice(1).toLowerCase()));
    return playerSelection;
}
    




