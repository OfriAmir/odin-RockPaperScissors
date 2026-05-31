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
    let userChoice
    /*const rockBtn = document.querySelector("#rock")
    const paperBtn = document.querySelector("#paper")
    const scissorsBtn = document.querySelector("#scissors")
    rockBtn.addEventListener("click", () => userChoice)*/
    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        alert(button.id)
        button.addEventListener("click", (e) => userChoice = e.target.id)
    })
    //let userChoice = prompt('please enter your decision: rock, paper or scissors?\nplease enter one of the options or the game will not work!');
    return userChoice

}



function playGame(){
    //alert(`if you just entered the game, press OK, then Cancel, then f12 and then restart. the game will be shown in the dev tools console. I don't know yet how to solve this otherwise.`)
    let totalRounds = 0
    let computerScore = 0;
    let humanScore = 0;
    function playRound(userChoice){

        let computerChoice = getComputerChoice();
        let humanChoice = userChoice
        if (computerChoice === humanChoice) {
            paraComment.textContent = `It's a tie! both players chose ${humanChoice}.`
            totalRounds++
        } else if (computerChoice === 'rock' && humanChoice === 'scissors' || computerChoice === 'paper' && humanChoice === 'rock' || computerChoice === 'scissors' && humanChoice === 'Paper') {
            computerScore += 1;
            totalRounds++
            paraComment.textContent = `Computer won this round! ${computerChoice} beats ${humanChoice}.`
        } else {
            humanScore += 1;
            totalRounds++
            paraComment.textContent = `You won this round! ${humanChoice} beats ${computerChoice}.`

        }
        resultsDiv.textContent = `You ${humanScore}:${computerScore} Computer`
    }
    let gameOver = false
    let userChoice
    const buttons = document.querySelectorAll("button")
    const paraComment = document.createElement("p")
    const paraEndGame = document.createElement("p")
    paraEndGame.setAttribute("style", 'white-space: pre;')
    const thankYou = `\r\n\r\nTHANK YOU FOR PLAYING! THIS GAME IS ABOUT PURE LUCK SO YOU WASTED YOU'RE TIME ACTUALLY BUT YEAH.`
    const resultsDiv = document.createElement("div")
    const body = document.querySelector("body")
    body.appendChild(paraComment)
    body.appendChild(resultsDiv)
    body.appendChild(paraEndGame)
    paraComment.textContent = "hello?"
    buttons.forEach(button => {
        //while (!gameOver) {
            button.addEventListener("click", (e) => {
                userChoice = e.target.id
                playRound(userChoice)
                if (totalRounds === 5){
                    if (humanScore > computerScore) {
                        paraEndGame.textContent = `You won the game! ${thankYou}`
                    } else if (humanScore < computerScore) {
                        paraEndGame.textContent = `You lost! ${thankYou}`
                    } else {
                        paraEndGame.textContent = `The game ended in a tie! ${thankYou}`    
                    }
                    gameOver = true
                
                }
            })
        //}
    })
}

playGame()