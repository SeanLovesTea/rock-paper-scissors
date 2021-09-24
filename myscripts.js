function userChoiceF(){
    let userChoice = prompt("Make your move!").toLowerCase();
    return userChoice
}

function compChoiceF(){
    let compOptions =["rock", "paper", "scissors"]
    let compChoice =compOptions[Math.floor(Math.random()* compOptions.length)]
    //console.log (`The computer chose ${compChoice}`)
    return compChoice
}

let userChoice= userChoiceF();
let compChoice= compChoiceF();

function playRound(userChoice, compChoice){
    

    if(userChoice === compChoice){
        return "That was a draw!";
    }
    else if(userChoice === "rock" && compChoice === "scissors"){
            playerScore++ ;
            return "Rock beats Scissors, you win!";
        }
        else if(userChoice ="rock" && compChoice ==="paper"){
            computerScore++ ;
            return "Paper beats Rock, you lose!" ;
         }
    else if(userChoice === "paper" && compChoice === "scissors"){
            computerScore++;
            return "Scissors beats Paper, you lose!" ;
        }
        else if (userChoice = "paper" && compChoice === "rock"){
            playerScore++;
            return "Paper beats Rock, you win!";
    }
    else if(userChoice === "scissors" && compChoice === "paper"){
            playerScore++;
            return "Scissors beats Paper, you win!" ;
        }
        else if(userChoice === "scissors" && compChoice === "rock"){
            computerScore++;
            return "Rock beats scissors, you lose!" ;
        }
    }
let playerScore = 0;
let computerScore = 0;

for ( i=0; i<5; i++){

    let userChoice= userChoiceF();
    let compChoice= compChoiceF();

    console.log("The computer chose " +compChoice);
    console.log("You chose " +userChoice);
    console.log(playRound(userChoice, compChoice));
    console.log("You have  "+playerScore , " The computer has " +computerScore);
}








