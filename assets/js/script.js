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
            //playerImage
            //console.log(playerImage);
            //console.log(playerChoice);
            runGame(playerChoice)

    })
}

});

function runGame(playerChoice){
    //let x=`123`
    //console.log(x, typeof x);
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    //console.log(playerImage.src, typeof playerImage.src)
     playerImage.alt = `${choices[playerChoice]}`;
     //console.log(playerImage.alt, typeof playerImage.alt);
     //playerImage.style.height = "40%";
     //playerImage.style.height = "70px";
     let rand=Math.floor(Math.random()*choices.length);
     //console.log(rand);
     computererImage.src = `assets/images/${choices[rand]}.png`;
     //console.log(computererImage.src, typeof computererImage.src)
     computererImage.alt = choices[rand];
     console.log(computererImage.alt, typeof computererImage.alt);

    if(playerImage.alt === "scissors"){
        if(computererImage.alt === "paper"){
            message.textContent = "You win!";
        }else{
            message.textContent = "Computer wins!";
        }
    }else if(playerImage.alt === "paper"){
        if(computererImage.alt === "rock"){
            message.textContent = "You win!"
        }else{
            message.textContent = "Computer wins!"
        }
    }else if(playerImage.alt === "rock"){
        if(computererImage.alt === "scissors"){
            message.textContent = "You win!"
        }else{
            message.textContent = "Computer wins!"
        }
    }
}