/**
 * constants for dom elements and possible choices added in an array
 */
const buttons = document.getElementsByTagName("button");
const message = document.getElementById("message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computererImage = document.getElementById("computer-image");
/**
 * wait untill dom loaded succesfully then add listeners on buttons
 */
document.addEventListener("DOMContentLoaded", function () {
    /**
     * loop over the buttons and add the listener on each
     */
    for (let button of buttons) {
        button.addEventListener('click', function () {
            let playerChoice = this.getAttribute('data-choice');
            runGame(playerChoice);
        });
    }
});
/** 
 * main function receives one parameter which is the value 
 * of the custom attribute (choice) applied to the buttons to recognize the type of selection.
 * Inspired from Love maths Project
 */
function runGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];
    let randIndex = Math.floor(Math.random() * choices.length);
    //console.log("randIndex:", randIndex)
    computererImage.src = `assets/images/${choices[randIndex]}.png`;
    computererImage.alt = choices[randIndex];
    console.log('done');
    let result = checkWinner(choices[playerChoice], choices[randIndex]);
    updateScore(result);
    //checkCounter();
}
/**
 * function tekes tow parameters whitch are values of the 'choices' array
 * and returns the result as string 
 * to determine the winner(player/computer)
 */
function checkWinner(playerOption, computerOption) {
    //while (true){
        
        try {
            let winner = "";
            
            if (playerOption === "rock") {
                if (computerOption === "scissors" || computerOption === "lizard") {
                    winner = "player";
                } else if(computerOption === "rock") {
                    winner = "None";
                }else {
                    winner = "computer";
                }

            console.log('playerOption', playerOption);
            console.log('computerOption', computerOption);
            console.log('winner', winner);
            return winner;
                
            } else if (playerOption === "paper") {
                if (computerOption === "rock" || computerOption === "spock") {
                    winner = "player";
                } else if (computerOption === "paper"){
                    winner = "None";
                }else {
                    winner = "computer";
                }
            console.log('playerOption', playerOption);
            console.log('computerOption', computerOption);
            console.log('winner', winner);
            return winner;

            } else if (playerOption === "scissors") {
                if (computerOption === "paper" || computerOption === "lizard") {
                    winner = "player";
                } else if (computerOption === "scissors"){
                    winner = "None";
                }else {
                    winner = "computer";
                }
            console.log('playerOption', playerOption);
            console.log('computerOption', computerOption);
            console.log('winner', winner);
            return winner;

            } else if (playerOption === "lizard") {
                if (computerOption === "paper" || computerOption === "spock") {
                    winner = "player";
                } else if (computerOption === "lizard"){
                    winner = "None";
                }else {
                    winner = "computer";
                }
            console.log('playerOption', playerOption);
            console.log('computerOption', computerOption);
            console.log('winner', winner);
            return winner;
            
            } else if (playerOption === "spock") {
                if (computerOption === "rock" || computerOption === "scissors") {
                    winner = "player";
                } else if (computerOption === "spock"){
                    winner = "None";
                }else {
                    winner = "computer";
                }
            console.log('playerOption', playerOption);
            console.log('computerOption', computerOption);
            console.log('winner', winner);
            return winner;
            
            }
        } catch (err) {
            alert(`Unknoun ${playerOption}! , ${err}!`);
        }
    }
    
//}
/**
 * function receives the winner to display the message in message div
 * and update the score of both player and computer.
 */

function updateScore(winner) {
    try {
        //console.clear();
        let currenPlayertScore = parseInt(playerScore.textContent);
        let currenComputertScore = parseInt(computerScore.textContent);
        if (winner === "player") {
            //message.textContent = "You win!";
            
            playerScore.textContent = ++currenPlayertScore;
            alert("Yow earn 1 point");
        } else if (winner === "computer") {
            //message.textConten = "Computer wins!";
            
            computerScore.textContent = ++currenComputertScore;
            alert("Computer earn 1 point");
        } else {
            alert("It's a Draw!");
        }
    } catch (err) {
        alert(`Anknoun ${winner}! , ${err}!`);
    }
}
/*
let times = 1;
function checkCounter() {
    if (times == 15) {
        finalWinner();
        computerScore.textContent = 0;
        playerScore.textContent = 0;
        times = 0;
    }
    times++;
}
function finalWinner() {
    if (parseInt(playerScore.textContent) > parseInt(computerScore.textContent)) {
        message.textContent = `Final winner is You!(${playerScore.textContent} - ${computerScore.textContent})`;
    } else if (parseInt(playerScore.textContent) < parseInt(computerScore.textContent)) {
        message.textContent = `Final winner is Computer!(${computerScore.textContent} - ${playerScore.textContent})`;
    } else {
        message.textContent = "Both scores are equal!";
    }
}

*/