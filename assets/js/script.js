/**
 * constants for dom elements and possible choices added in an array
 */
const buttons = document.getElementsByTagName("button");
const message = document.getElementById("message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computererImage = document.getElementById("computer-image");
//let times=1;
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
//console.log(times);

function runGame(playerChoice) {
    //let times=0;
    const choices = ['rock', 'paper', 'scissors'];

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let randIndex = Math.floor(Math.random() * choices.length);
    computererImage.src = `assets/images/${choices[randIndex]}.png`;
    computererImage.alt = choices[randIndex];

    let result = checkWinner(choices[playerChoice], choices[randIndex]);
    updateScore(result);


    checkCounter();

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

//updateScore("none")

function updateScore(winner) {
    try {
        //let times=0;
        let currenPlayertScore = parseInt(playerScore.textContent);
        let currenComputertScore = parseInt(computerScore.textContent);
        if (winner === "player") {
            message.textContent = "You win!";
            playerScore.textContent = ++currenPlayertScore;
            //console.log("playerScore",playerScore.textContent ,typeof playerScore.textContent);
            
            /** if(playerScore.textContent == 6){
                 
                 playerScore.textContent = 0;
                 computerScore.textContent = 0;
             } */
        } else if (winner === "computer") {
            message.textContent = "Computer wins!";
            computerScore.textContent = ++currenComputertScore;
            //console.log("computerScore",computerScore.textContent ,typeof computerScore.textContent);

            /** if(computerScore.textContent == 6){
                 
                 computerScore.textContent = 0;
                 playerScore.textContent = 0;
             } */

        }

    } catch (err) {

        //console.log(err);
        alert(`Anknoun ${winner}! , ${err}!`);
        //throw `Anknoun ${winner}! Aborting`;
    }
}
let times = 1;
console.log('before check function', times);

function checkCounter() {
    if (times == 4) {
        finalWinner();
        computerScore.textContent = 0;
        playerScore.textContent = 0;
        
        times = 0;
    }
    console.log(times);
    times++;
}

function finalWinner(){
    console.log("computerScore finalWinner",computerScore.textContent,typeof computerScore.textContent);
    console.log("playerScore finalWinner",playerScore.textContent,typeof playerScore.textContent);
    let result="";
    if(parseInt(playerScore.textContent) > parseInt(computerScore.textContent)){
        result=`Final winner is You!<br><span>Your Score: ${playerScore.textContent}<br>Computer Score: ${computerScore.textContent}</span>`;
        message.innerHTML=result;
    }else if(parseInt(playerScore.textContent) < parseInt(computerScore.textContent)){
        result=`Final winner is You!<br><span>Your Score: ${playerScore.textContent}<br>Computer Score: ${computerScore.textContent}</span>`;
        message.innerHTML=result;
    }else{
        message.textContent = "Both scores are equal!";
    }
}