let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissors_button = document.getElementById("s");

function convertWord(letter){
    if ( letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(userChoice, compChoice){
    
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertWord(userChoice) + " beats " + convertWord(compChoice) +", you win!";
    exit();
}

function lose(userChoice, compChoice){
    
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convertWord(userChoice) + " loses to " + convertWord(compChoice) +", you lose!";
    exit();
}

function draw(userChoice, compChoice){
    result_div.innerHTML = convertWord(userChoice) + " vs " +convertWord(compChoice) +" is a draw, no score.";
}

function game(userChoice){
    if (userScore == 5 || compScore == 5){resetScore};
    const compChoice = getComputerChoice();
   
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, compChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, compChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, compChoice);
        break;   
        
}  }
function main(){
    
        rock_button.addEventListener('click', function() { 
            game('r')
            })
        paper_button.addEventListener('click', function() { 
            game('p')
            })
        scissors_button.addEventListener('click', function() { 
            game('s')
            })   
};
function exit(){
    if (userScore === 5) {
        
        result_div.innerHTML = "CONGRATULATIONS YOU WIN!"
        
        setTimeout(function() {window.location.reload();}, 2000 )
    }
    if (compScore === 5) {
        
        result_div.innerHTML= "I'M SORRY, COMPUTER WINS!"
        
        setTimeout(function() {window.location.reload();}, 2000 )
    }
function resetScore()  {
    userScore =0;
    compScore =0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

}  
};
main();

