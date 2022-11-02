let Rock = 1
let Paper = 2
let Scissors = 3
const options = ['Rock', 'Paper', 'Scissors']

let getComputerChoice = function() {
    return options[(Math.floor(Math.random() * options.length))];
};