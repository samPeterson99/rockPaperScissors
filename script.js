
function game() {
    const playerScore = 0;
    const computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayer()
        const computerSelection = getComputer()

        function playRound() {

            if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
                console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
                computerScore++;
            } else if (playerSelection == computerSelection) {
                console.log(`Tie! Try again.`);
            } else {
                console.log(`${playerSelection} beats ${computerSelection}. You win!`);
                playerScore++;
            };
        };

    };

}

function getPlayer() {
    let playerReply = prompt("Choose Rock, Paper, or Scissors:");
    let playerSelection = playerReply.replace((playerReply), (playerReply.charAt(0).toUpperCase() + playerReply.slice(1).toLowerCase()));
    return playerSelection;
}
    

function getComputer() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[(Math.floor(Math.random() * options.length))];
}


