let Rock = 1
let Paper = 2
let Scissors = 3
let options = ['Rock', 'Paper', 'Scissors']

let getComputerChoice = function(options) {
    return options[(Math.floor(Math.random() * options.length))];
};
console.log(getComputerChoice(options))

const rps0 = prompt("Choose Rock, Paper, or Scissors:");
console.log(rps0);
let rps1 = rps0.replace((rps0), (rps0.charAt(0).toUpperCase() + rps0.slice(1).toLowerCase()));
console.log(rps1);

