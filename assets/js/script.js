/**
 * constants for dom elements and possible choices added in an array
 */
const buttons = document.getElementsByTagName("button");
const message = document.getElementById("message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computererImage = document.getElementById("computer-image");
const choices=['rock','paper','scissors'];
console.log(playerScore);

/**
 * wait untill dom loaded succesfully then add listeners on buttons
 */
document.addEventListener("DOMContentLoaded", function (){
    console.log(playerScore);
    /**
     * loop over the buttons and add the listener on each
     */
    for (let button of buttons){
        button.addEventListener('click',function (){
            let playerChoice = this.getAttribute('choice');
            runGame(playerChoice);
    })
}


});
console.log(playerScore);
/** 
 * main function receives one parameter which is the value 
 * of the custom attribute (choice) applied to the buttons to recognize the type of selection.
 * Inspired from Love maths Project
*/
function runGame(playerChoice){
    console.log(playerScore);
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let randIndex=Math.floor(Math.random()*choices.length);
    computererImage.src = `assets/images/${choices[randIndex]}.png`;
    computererImage.alt = choices[randIndex];

    let playerOption=choices[playerChoice];
    let computerOption=choices[randIndex];
    let result= checkWinner(playerOption,computerOption);
    updateScore(result);
}
/**
 * function tekes tow parameters whitch are values of the 'choices' array
 * and returns the result as string 
 * to determine the winner(player/computer)
 */
function checkWinner(playerOption,computerOption){
    console.log(playerScore);
        //console.log(playerImage.alt, typeof playerImage.alt);
        let winner="";
        if(playerOption=== "scissors"){
            if(computerOption === "paper"){
                winner= "player";
                return winner;
                //message.textContent = "You win!";
            }else{
                winner= "computer";
                return winner;
                //message.textContent = "Computer wins!";
            }
        }else if(playerOption === "paper"){
            if(computerOption === "rock"){
                winner= "player";
                return winner;
            }else{
                winner= "computer";
                //message= "You win!";
                return winner;
            }
        }else if(playerOption === "rock"){
            if(computerOption === "scissors"){
                winner= "player";
                return winner;
            }else{
                winner= "computer";
                //message= "You win!";
                return winner;
            }
        }else{
            alert (`Anknoun option!`);
            throw `Anknoun option!. Aborting`;
        }
        
    }
/**
 * function receives the winner to display the message in message div
 * and update the score of both player and computer.
 */
function updateScore(winner){
    //console.log(playerScore);
    //playerScore='2';
    //console.log(playerScore.textContent,typeof playerScore.textContent);
    let currenPlayertScore = parseInt(playerScore.textContent);
    //console.log(currenPlayertScore,typeof currenPlayertScore);
    //console.log(currenPlayertScore);
    let currenComputertScore = parseInt(computerScore.textContent);
    //console.log(currenComputertScore);
    if (winner === "player"){
        message.textContent = "You win!";
        playerScore.textContent = ++currenPlayertScore;
    }else if(winner === "computer"){
        message.textContent = "Computer wins!";
        computerScore.textContent = ++currenComputertScore;
    }else{
        alert (`Anknoun ${winner}!`);
        throw `Anknoun ${winner}! Aborting`;
    }
}
