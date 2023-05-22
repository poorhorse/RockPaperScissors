function updateScores(player, points) {
   if (player === 1) {
     playerScore += points;
   } else if (player === 2) {
     computerScore += points;
   } else {
     console.log("Invalid player!");
   }
   
   document.getElementById("playerScore").textContent = playerScore;
   document.getElementById("computerScore").textContent = computerScore;
   
   if (playerScore >= 5) {
     document.getElementById("winnerFinal").textContent = "Player Wins!";
     endGame();
   } else if (computerScore >= 5) {
     document.getElementById("winnerFinal").textContent = "Computer Wins!";
     endGame();
   }
 }
 
 function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase();
 
   if (playerSelection === "rock" && computerSelection === "paper") {
     updateScores(2, 1);
     document.getElementById("winner").textContent = "You Lose! Paper beats Rock!";
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
     updateScores(2, 1);
     document.getElementById("winner").textContent = "You Lose! Scissors beats Paper!";
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
     updateScores(2, 1);
     document.getElementById("winner").textContent = "You Lose! Rock beats Scissors!";
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
     updateScores(1, 1);
     document.getElementById("winner").textContent = "You Win! Rock beats Scissors!";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
     updateScores(1, 1);
     document.getElementById("winner").textContent = "You Win! Paper beats Rock!";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
     updateScores(1, 1);
     document.getElementById("winner").textContent = "You Win! Scissors beats Paper!";
   } else {
     document.getElementById("winner").textContent = "It's a tie!";
   }
 }
 
 const paperButton = document.querySelector("#paperButton");
 
 paperButton.addEventListener("click", function () {
   console.log("You picked paper!");
   playRound("paper", getComputerChoice());
 });
 
 const rockButton = document.querySelector("#rockButton");
 
 rockButton.addEventListener("click", function () {
   console.log("You picked rock!");
   playRound("rock", getComputerChoice());
 });
 
 const scissorsButton = document.querySelector("#scissorsButton");
 
 scissorsButton.addEventListener("click", function () {
   console.log("You picked scissors!");
   playRound("scissors", getComputerChoice());
 });
 
 let playerScore = 0;
 let computerScore = 0;
 
 
 function getComputerChoice() {
   const myArray = ["rock", "paper", "scissors"];
   const randomIndex = Math.floor(Math.random() * myArray.length);
   return myArray[randomIndex];
 }
 
 function endGame() {
   document.getElementById("winner").textContent = "";
   paperButton.disabled = true;
   rockButton.disabled = true;
   scissorsButton.disabled = true;
   
 }
 