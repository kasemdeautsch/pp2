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
console.log(resetButtons);
//gameModal.show();

/**
 * wait untill dom loaded succesfully then add listeners on buttons
 */
document.addEventListener("DOMContentLoaded", function () {

    for (let button of resetButtons) {
        button.addEventListener('click', function() {
            playerScore.textContent = 0;
            computerScore.textContent = 0;
            message.textContent = "";
            console.log('okk')
        })
    }
    

    /**
     * loop over the buttons and add the listener on each
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
 * of the custom attribute (choice) applied to the buttons to recognize the type of selection.
 * Inspired from Love maths Project
 */
function runGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];
    let randIndex = Math.floor(Math.random() * choices.length);
   
    computererImage.src = `assets/images/${choices[randIndex]}.png`;
    computererImage.alt = choices[randIndex];
    console.log('done');
    checkWinner(choices[playerChoice], choices[randIndex]);
    //let result = checkWinner(choices[playerChoice], choices[randIndex]);
    //updateScore(result);
    //checkScores(result);
}
/**
 * function tekes tow parameters whitch are values of the 'choices' array
 * and returns the result as string 
 * to determine the winner(player/computer)
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
        console.log('playerOption', playerOption);
        console.log('computerOption', computerOption);
        console.log('winner', winner);
        announce(winner);
        //checkScores(result)
        updateScore(winner);
        //return winner;
    } catch (err) {
        alert(`Unknoun ${playerOption}! , ${err}!`);
    }
    }

function announce(winner) {
    if (winner === "player") {
        alert("Yow earn 1 point");
        //finalWinner(currenPlayertScore, currenComputertScore)
        //playerScore.textContent = ++currenPlayertScore;
    } else if (winner === "computer") {
        alert("Computer earn 1 point");        
    } else if (winner === "None"){
        alert("It's a Tie!");
    }
}
    
//}
/**
 * function receives the winner to display the message in message div
 * and update the score of both player and computer.
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
        checkScores();
        /*
        else {
            alert("It's a Draw!");
        }*/
    } catch (err) {
        alert(`Anknoun ${winner}! , ${err}!`);
    }
}

function checkScores(result){

    let currenPlayertScore = parseInt(playerScore.textContent);
    let currenComputertScore = parseInt(computerScore.textContent);
    try {
        if (currenPlayertScore == 5 && currenComputertScore == 5){
            message.textContent = "No one wins!";
            gameModal.show()
        } 
        else if (currenPlayertScore == 5){
            message.textContent = "Winner is You";
            gameModal.show();
        }
        else if (currenComputertScore == 5){
            message.textContent = "Winner is Computer";
            gameModal.show();
        }/* else {
            updateScore(result);
        }*/
    } catch(er) {
        alert(`Unknown ${er}!`)
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

*/

/*
function finalWinner(currenPlayertScore, currenComputertScore) {

    //message.textContent = "Both scores are equal!";
    //console.log("currenPlayertScore: ", currenPlayertScore, "currenComputertScore: ", currenComputertScore);
    try {
        if (currenPlayertScore == 5){
            message.textContent = "Winner is Player";
        } else if (currenComputertScore == 5){
            message.textContent = "Winner is Computer";
        }
        else if (currenPlayertScore == currenComputertScore == 5){
            message.textContent = "No one wins!";
        }
    } catch(er) {
        alert(`Unknown ${er}!`)
    }
    

}
    
    */
        
    


