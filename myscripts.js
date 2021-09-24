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

function compareChoice(userChoice, compChoice){
   

    if(userChoice === compChoice){
        return "That was a draw!";
    }
    else if(userChoice === "rock" && compChoice === "scissors"){
            playerLives++ ;
            return "Rock beats Scissors, you win!";
        }
        else if(userChoice ="rock" && compChoice ==="paper"){
            computerLives++ ;
            return "Paper beats Rock, you lose!" ;
         }
    else if(userChoice === "paper" && compChoice === "scissors"){
            computerLives++;
            return "Scissors beats Paper, you lose!" ;
        }
        else if (userChoice = "paper" && compChoice === "rock"){
            playerLives++;
            return "Paper beats Rock, you win!";
    }
    else if(userChoice === "scissors" && compChoice === "paper"){
            playerLives++;
            return "Scissors beats Paper, you win!" ;
        }
        else if(userChoice === "scissors" && compChoice === "rock"){
            computerLives++;
            return "Rock beats scissors, you lose!" ;
        }
    }
let playerLives = 0;
let computerLives = 0;

console.log("The computer chose " +compChoice);
console.log("You chose " +userChoice);
console.log(compareChoice(userChoice, compChoice));
console.log("You have  "+playerLives , " The computer has " +computerLives);


///console.log("the computer chose " +compChoice);
//console.log("You chose " +userChoice);
//console.log(compareChoice(userChoice, compChoice));
//console.log("You have  "+playerLives , " The computer has " +computerLives);


//while ( playerLives < 3 && computerLives < 3){
   // console.log(userChoice);
   /// console.log(compChoice);
    
//}
//}   
//while ( playerLives = 1 , computerLives = 1){
    //console.log(userChoiceF());
   //console.log(compChoiceF());
   // console.log("the computer chose " +compChoice);
    //console.log("You chose " +userChoice);
    //console.log(compareChoice(userChoice, compChoice));
   // console.log("You have  "+playerLives , " The computer has " +computerLives);
//}
/////if (playerLives =3, computerLives =3){
    //throw new error(" YOu have finished the game");
//}
//if(i = 0, i>4 , i++){
 ////   console.log(compareChoice(userChoice, compChoice));
//}

//function playGame(){
    //compareChoice(userChoice, compChoice);
//}
//function playRounds(){
   // if(i=0, i >=4, i++){
    //    playGame();
    //}
//}



