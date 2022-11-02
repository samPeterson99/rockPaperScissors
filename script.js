
let getComputer = function() {
    let options = ['Rock', 'Paper', 'Scissors']
    return options[(Math.floor(Math.random() * options.length))];
};

let getPlayer = function() {
    let playerReply = prompt("Choose Rock, Paper, or Scissors:");
    let playerSelection = playerReply.replace((playerReply), (playerReply.charAt(0).toUpperCase() + playerReply.slice(1).toLowerCase()));
    return playerSelection;
};

let playRound = function() {
    let playerSelection = getPlayer();
    let computerSelection = getComputer();


    if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
    } else if ( playerSelection == computerSelection) {
        console.log(`Tie! Try again.`)
    } else {
        console.log(`${playerSelection} beats ${computerSelection}. You win!`)
    }
};

let game = function() {
    Create Counters 
    loop
    nest playRound inside of here
    add Counters
    add returns
    
}
