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

function getHumanChoice(){
    let userChoice = prompt('please enter your decision: rock, paper or scissors?\nplease enter one of the options or the game will not work!');
    return userChoice.toLowerCase()

}



function playGame(){
    alert(`if you just entered the game, press OK, then Cancel, then f12 and then restart. the game will be shown in the dev tools console. I don't know yet how to solve this otherwise.`)
    let computerScore = 0;
    let humanScore = 0;
    function playRound(){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice()
        if (computerChoice === humanChoice) {
            console.log(`It's a tie! both players chose ${humanChoice}. Your score is ${humanScore}, computer score is ${computerScore}.`);
        } else if (computerChoice === 'rock' && humanChoice === 'scissors' || computerChoice === 'paper' && humanChoice === 'rock' || computerChoice === 'scissors' && humanChoice === 'Paper') {
            computerScore += 1;
            console.log(`Computer won this round! ${computerChoice} beats ${humanChoice}. Your score is ${humanScore}, computer score is ${computerScore}.` );
        } else {
            humanScore += 1;
            console.log(`You won this round! ${humanChoice} beats ${computerChoice}. Your score is ${humanScore}, computer score is ${computerScore}.`);
        }
    }
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore) {
        console.log(`You won the game! it's ${humanScore}:${computerScore} to your favor!`);
    } else if (humanScore < computerScore) {
        console.log(`You lost! it's ${computerScore}:${humanScore} to the computer's favor.`);
    } else {
        console.log(`The game ended in a tie! it's ${computerScore}:${humanScore}.`);
    }
    console.log(`THANK YOU FOR PLAYING! THIS GAME IS ABOUT PURE LUCK SO YOU WASTED YOU'RE TIME ACTUALLY BUT YEAH.`)
}

playGame()