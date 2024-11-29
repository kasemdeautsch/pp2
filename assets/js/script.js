const buttons = document.getElementsByTagName("button");
    const message = document.getElementById("message");
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    const playerImage = document.getElementById("player-image");
    const computererImage = document.getElementById("computer-image");
    const choices=['rock','paper','scissors'];
document.addEventListener("DOMContentLoaded", function (){
    //console.log('ok')
    
    for (let button of buttons){
        button.addEventListener('click',function (){
            let playerChoice = this.getAttribute('choice')
            playerImage
            //console.log(playerImage);
            //console.log(playerChoice);
            runGame(playerChoice)

    })
}

})

function runGame(playerChoice){
    //console.log('hello');
    playerImage.src = `assets/images/${choices[playerChoice]}.png`
     playerImage.alt = `${choices[playerChoice]}`
     //playerImage.style.height = "40%";
     //playerImage.style.height = "70px";
     let rand=Math.floor(Math.random()*choices.length);
     console.log(rand);
     computererImage.src = `assets/images/${choices[rand]}.png`
     computererImage.alt = `${choices[rand]}`
    
}