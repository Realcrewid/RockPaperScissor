let userScore = 0;
let compScore = 0;

let message = document.querySelector("#msg");
let disUser=document.querySelector("#user-score");
let disComp=document.querySelector("#comp-score");

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    disUser.innerText=userScore;
    message.innerText = `You Win,computer choose ${compChoice}`;
    message.style.backgroundColor="green";
  } else {
    compScore++;
    disComp.innerText=compScore;
    message.innerText = `You Lose,computer choose ${compChoice}`;
    message.style.backgroundColor="red";
  }
};

const gencompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * 3);
  return option[index];
};

const playGame = (userChoice) => {
  const compChoice = gencompChoice();
  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
  
};

const gameDraw = () => {
  message.innerText = "Game is Draw";
  message.style.backgroundColor="blue";
};


// running a loop to get user selection by using ID
const choice = document.querySelectorAll(".choice");
choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(`user choice ${userChoice}`);
    playGame(userChoice);
  });
});
