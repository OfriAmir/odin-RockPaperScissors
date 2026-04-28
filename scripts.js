function getComputerChoice(){
    let numBetw = Math.random();

    if (numBetw > (2/3)) {
        return 'rock';
    } else if (numBetw > 1/3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//console.log(getComputerChoice());

function getHumanChoice(){
    let userChoice = prompt('please enter your decision: rock, paper or scissors?\nplease enter one of the options or the game will not work!');
    return userChoice.toLowerCase()

}

//console.log(getHumanChoice())


let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log(`It's a tie! both players chose ${humanChoice}.`);
    } else if (computerChoice === 'rock' && humanChoice === 'scissors' || computerChoice === 'paper' && humanChoice === 'rock' || computerChoice === 'scissors' && humanChoice === 'Paper') {
        computerScore += 1;
        console.log(`Computer won this round! ${computerChoice} beats ${humanChoice}.` );
    } else {
        humanScore += 1;
        console.log(`You won this round! ${humanChoice} beats ${computerChoice}. `)
    }
}

const computerSelection = getComputerChoice();
const humanSelection= getHumanChoice();

playRound(computerSelection, humanSelection);