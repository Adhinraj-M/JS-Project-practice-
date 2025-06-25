// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");
// const result = document.querySelector(".result");
// const score = document.querySelector(".score");

// const arr = ["rock", "paper", "scissors"];

// function computerMove() {
//   const computer = Math.floor(Math.random() * 3 + 0);
//   console.log(computer);
//   const arrElement = arr[computer];
//   console.log(arrElement);
//   return arrElement;
// }

// let computerScore = 0;
// let myScore = 0;

// rock.addEventListener("click", function () {
//   const compMove = computerMove();
//   if (compMove === "rock") {
//     result.innerHTML = "Its a tie!";
//     score.innerHTML = `Your score:${myScore} Computer Score:${computerScore}`;
//   } else if (compMove === "paper") {
//     result.innerHTML = "You lose! paper beat rock";
//     computerScore++;
//     score.innerHTML = `Your score:${myScore} Computer Score:${computerScore}`;
//   } else {
//     result.innerHTML = "You win! rock beats scissors";
//     myScore++;
//     score.innerHTML = `Your score:${myScore} Computer Score:${computerScore}`;
//   }
// });

// paper.addEventListener("click", function () {
//   const compMove = computerMove();
//   if (compMove === "paper") {
//     result.innerHTML = "Its a tie!";
//     score.innerHTML = `Your score:${myScore} Computer Score:${computerScore}`;
//   } else if (compMove === "scissors") {
//     result.innerHTML = "You lose! scissors beat paper";
//     computerScore++;
//     score.innerHTML = `Your score:${myScore} Computer Score:${computerScore}`;
//   } else {
//     result.innerHTML = "You win! paper beats rock";
//     myScore++;
//     score.innerHTML = `Your score:${myScore} Computer Score:${computerScore}`;
//   }
// });

// scissors.addEventListener("click", function () {
//   const compMove = computerMove();
//   if (compMove === "scissors") {
//     result.innerHTML = "Its a tie!";
//     score.innerHTML = `Your score:${myScore} Computer Score:${computerScore}`;
//   } else if (compMove === "rock") {
//     result.innerHTML = "You lose! rock beat scissors";
//     computerScore++;
//     score.innerHTML = `Your score:${myScore} Computer Score:${computerScore}`;
//   } else {
//     result.innerHTML = "You win! scissors beats paper";
//     myScore++;
//     score.innerHTML = `Your score:${myScore} Computer Score:${computerScore}`;
//   }
// });

// optimized code

const buttons = document.querySelectorAll("#rock,#paper,#scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

const arr = ["rock", "paper", "scissors"];

let computerScore = 0;
let myScore = 0;

function randomMove() {
  return arr[Math.floor(Math.random() * 3 + 0)];
}

buttons.forEach((btn) => btn.addEventListener("click", handleClick));

function handleClick(e) {
  const playerMove = e.target.id;
  const computerMove = randomMove();
  const playerResult = getResult(playerMove, computerMove);

 

  if (playerResult === "You Win!") {
    result.innerHTML = `<span class='win'>You win! ${playerMove} beats ${computerMove}</span>`;
    myScore++;
    score.innerHTML = `Your Score:<span class='your-score'>${myScore}</span> Computer score:<span class="computer-score">${computerScore}</span>`;
  }
  else if (playerResult === "It a tie!") {
    result.innerHTML = `<span class='tie'>${playerResult}</span>`;
  }
  
  else {
    result.innerHTML = `<span class='lost'>You lost! ${computerMove} beats ${playerMove} </span>`;
    computerScore++;
    score.innerHTML = `Your Score:<span class='your-score'>${myScore}</span> Computer score:<span class="computer-score">${computerScore}</span>`;
  }
}

function getResult(player, computer) {
  if (player === computer) return "It a tie!";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  } else {
    return "You lost!";
  }
}


