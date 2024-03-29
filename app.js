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
     document.getElementById("winnerFinal").textContent = "PLAYER WINS!";
     endGame();
   } else if (computerScore >= 5) {
     document.getElementById("winnerFinal").textContent = "COMPUTER WINS!";
     endGame();
   }
 }
 
 function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase();
 
   if (playerSelection === "rock" && computerSelection === "paper") {
     updateScores(2, 1);
     document.getElementById("winner").textContent = "You lose. Paper beats rock.";
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
     updateScores(2, 1);
     document.getElementById("winner").textContent = "You lose. Scissors beats paper.";
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
     updateScores(2, 1);
     document.getElementById("winner").textContent = "You lose. Rock beats scissors.";
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
     updateScores(1, 1);
     document.getElementById("winner").textContent = "You win. Rock beats scissors.";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
     updateScores(1, 1);
     document.getElementById("winner").textContent = "You win. Paper beats rock.";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
     updateScores(1, 1);
     document.getElementById("winner").textContent = "You win. Scissors beats paper.";
   } else {
     document.getElementById("winner").textContent = "It's a tie.";
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

 const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function() {
  // Reset the game logic
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("winnerFinal").textContent = "";
  document.getElementById("winner").textContent = "";

  // Enable the game buttons
  paperButton.disabled = false;
  rockButton.disabled = false;
  scissorsButton.disabled = false;

  // Hide the reset button again
  resetButton.style.display = "none";
});

function endGame() {
  document.getElementById("winnerFinal").textContent = "GAME OVER";
  document.getElementById("winner").textContent = "";

  paperButton.disabled = true;
  rockButton.disabled = true;
  scissorsButton.disabled = true;

  // Show the reset button
  resetButton.style.display = "block";
}

 
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
   document.getElementById("resetButton").style.display = "block";


 }

 test2
 