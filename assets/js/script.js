/**
 * constants for dom elements and possible choices added in an array
 */
const options = document.getElementsByClassName("control");
const message = document.getElementById("message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computererImage = document.getElementById("computer-image");
const gameModal = new bootstrap.Modal(document.getElementById("gameModal"));
const resetButtons = document.getElementsByClassName("reset-game");
/*
 * wait untill dom loaded succesfully then add listeners on buttons
 */
document.addEventListener("DOMContentLoaded", function () {
    /* add event listener on reset and modal close button to reset the scores */
    for (let button of resetButtons) {
        button.addEventListener('click', function() {
            playerScore.textContent = 0;
            computerScore.textContent = 0;
        });
    }
    /*
     * loop over the game button options and add the listener on each
     */
    for (let option of options) {
        option.addEventListener('click', function () {
            let playerChoice = this.getAttribute('data-choice');
            runGame(playerChoice);
        });
    }
});
/** 
 * main function receives one parameter which is the value 
 * of the custom attribute (data-choice) applied to the buttons to recognize the type of selection.
 * Inspired from Love maths Project
 */
function runGame(playerChoice) {
    /** define a list to store the choices of the player */
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    message.textContent = "";
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];
    /** Crete arandom variable to pick an item from choices randomly */
    let randIndex = Math.floor(Math.random() * choices.length);
    computererImage.src = `assets/images/${choices[randIndex]}.png`;
    computererImage.alt = choices[randIndex];
    checkWinner(choices[playerChoice], choices[randIndex]);
}
/**
 * function tekes tow parameters whitch are values of the 'choices' array
 * and returns the result as string 
 * to determine the winner(player/computer/None)
 */
function checkWinner(playerOption, computerOption) {
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
        } else if (playerOption === "paper") {
            if (computerOption === "rock" || computerOption === "spock") {
                winner = "player";
            } else if (computerOption === "paper"){
                winner = "None";
            }else {
                winner = "computer";
            }
        } else if (playerOption === "scissors") {
            if (computerOption === "paper" || computerOption === "lizard") {
                winner = "player";
            } else if (computerOption === "scissors"){
                winner = "None";
            }else {
                winner = "computer";
            }
        } else if (playerOption === "lizard") {
            if (computerOption === "paper" || computerOption === "spock") {
                winner = "player";
            } else if (computerOption === "lizard"){
                winner = "None";
            }else {
                winner = "computer";
            }
        } else if (playerOption === "spock") {
            if (computerOption === "rock" || computerOption === "scissors") {
                winner = "player";
            } else if (computerOption === "spock"){
                winner = "None";
            }else {
                winner = "computer";
            }
        }
        announce(winner);
        updateScore(winner);
    } catch (err) {
        alert(`Unknoun ${playerOption}! , ${err}!`);
    }
    }
/** Function to alert the winner */
function announce(winner) {
    if (winner === "player") {
        alert("Yow earn 1 point");
    } else if (winner === "computer") {
        alert("Computer earn 1 point");        
    } else if (winner === "None"){
        alert("It's a Tie!");
    }
}
/*
 * function receives the winner, and update the score accordingly,
 * then call checkScores function.
 */
function updateScore(winner) {
    try {
        let currenPlayertScore = parseInt(playerScore.textContent);
        let currenComputertScore = parseInt(computerScore.textContent);
        if (winner === "player") {
            playerScore.textContent = ++currenPlayertScore;
        } else if (winner === "computer") {
            computerScore.textContent = ++currenComputertScore;
        } 
        checkScores(winner);
    } catch (err) {
        alert(`Anknoun ${winner}! , ${err}!`);
    }
}

/** Function recieves the winner to check scores after each updating then:
 * -display appropriate message
 * -add text to modal body with the final winner.
 */
function checkScores(result){
    /** Retrieve the current scores from Dom. */
    let currenPlayertScore = parseInt(playerScore.textContent);
    let currenComputertScore = parseInt(computerScore.textContent);
    let text = `<p>Final Scores:<br> 
                Player: ${currenPlayertScore}<br>
                Computer: ${currenComputertScore}<br>
                Winner is <span class="text-decoration-underline text-uppercase">${result}!</span><br>
                Please click "Ok" or "X" to exit, The scores will reset automatically.
                </p>`;
    let modalBody = document.querySelector(".modal-body");
    try {
        if (currenPlayertScore == 5 && currenComputertScore == 5){
            message.textContent = "Dwaw, No one wins!";
            modalBody.innerHTML = text;
            gameModal.show();
        }
        else if (currenPlayertScore == 5){
            message.textContent = "Winner is You!";
            modalBody.innerHTML = text;
            gameModal.show();
        }
        else if (currenComputertScore == 5){
            message.textContent = "Winner is Computer!";
            modalBody.innerHTML = text;
            gameModal.show();
        }
    } catch(er) {
        alert(`Unknown ${er}!`);
    }
}