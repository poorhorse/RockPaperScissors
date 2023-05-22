


function getComputerChoice() {
    const myArray = ["rock", "paper", "scissors"]

const randomIndex = Math.floor(Math.random() * myArray.length);
return myArray[randomIndex]
}



function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase()
   if (playerSelection === "rock" && computerSelection === "paper") {
      return ("You Lose! Paper beats Rock");
} else if (playerSelection === "paper" && computerSelection === "scissors") {
   return ("You Lose! Scissors beats Paper");
} else if (playerSelection === "scissors" && computerSelection === "rock") {
   return ("You Lose! Rock beats Scissors");
} else if (playerSelection === "rock" && computerSelection === "scissors") {
   return ("You Win! Rock beats Scissors");
} else if (playerSelection === "paper" && computerSelection === "rock") {
   return ("You Win! Paper beats Rock");
} else if (playerSelection === "scissors" && computerSelection === "paper") {
   return ("You Win! Scissors beats Paper");
} else { return("Tie")}
}




function game() {
   for (let i = 0; i < 5; i++) {
      const playerSelection = "paper";
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
   }
   
}