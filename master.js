let getuserInput = "";
let playerScore = 0;
let computerScore = 0;

function updateScore()
{    
    document.getElementById('PlayerScore').textContent = "Player Score: " + playerScore;
    document.getElementById('ComputerScore').textContent = "Computer Score: " + computerScore;
}
function output() {
  const choices = ["rock", "paper", "scissor"];
  const computerChoice = Math.floor(Math.random() * choices.length);

  if (getuserInput === choices[computerChoice]) {
    alert("It's a TIE! Computer chose " + choices[computerChoice] + " and you chose " + getuserInput);
  } else if (
    (getuserInput === "rock" && choices[computerChoice] === "scissor") ||
    (getuserInput === "paper" && choices[computerChoice] === "rock") ||
    (getuserInput === "scissor" && choices[computerChoice] === "paper")
  ) {
    alert("You win! The computer chose " + choices[computerChoice] + " and you chose " + getuserInput);
    playerScore++;
    updateScore();
    
  } else {
    alert("You lose :( The computer chose " + choices[computerChoice] + " and you chose " + getuserInput);
    computerScore++;
    updateScore();
  }
}

function setAsRock() {
  getuserInput = "rock";
  output();
}

function setAsPaper() {
  getuserInput = "paper";
  output();
}

function setAsScissor() {
  getuserInput = "scissor";
  output();
}
