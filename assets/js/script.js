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
    const choices = ['rock', 'paper', 'scissors'];

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let randIndex = Math.floor(Math.random() * choices.length);
    computererImage.src = `assets/images/${choices[randIndex]}.png`;
    computererImage.alt = choices[randIndex];

    let result = checkWinner(choices[playerChoice], choices[randIndex]);
    updateScore(result);
}
/**
 * function tekes tow parameters whitch are values of the 'choices' array
 * and returns the result as string 
 * to determine the winner(player/computer)
 */
function checkWinner(playerOption, computerOption) {
    try {
        let winner = "";
        if (playerOption === "scissors") {
            if (computerOption === "paper") {
                winner = "player";
                return winner;
            } else {
                winner = "computer";
                return winner;
            }
        } else if (playerOption === "paper") {
            if (computerOption === "rock") {
                winner = "player";
                return winner;
            } else {
                winner = "computer";
                return winner;
            }
        } else if (playerOption === "rock") {
            if (computerOption === "scissors") {
                winner = "player";
                return winner;
            } else {
                winner = "computer";
                return winner;
            }
        }
    } catch (err) {
        alert(`Anknoun ${playerOption}! , ${err}!`);
        //throw `Anknoun option!. Aborting`;
    }

}
/**
 * function receives the winner to display the message in message div
 * and update the score of both player and computer.
 */

updateScore("none")

function updateScore(winner) {
    try {

        let currenPlayertScore = parseInt(playerScore.textContent);
        let currenComputertScore = parseInt(computerScore.textContent);
        if (winner === "player") {
            message.textContent = "You win!";
            playerScore.textContent = ++currenPlayertScore;
        } else if (winner === "computer") {
            message.textContent = "Computer wins!";
            computerScore.textContent = ++currenComputertScore;
        }

    } catch (err) {

        //console.log(err);
        alert(`Anknoun ${winner}! , ${err}!`);
        //throw `Anknoun ${winner}! Aborting`;
    }
}