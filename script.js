let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePar = document.querySelector("#user-score");
const compScorePar = document.querySelector("#comp-score");

// generating computer choice 
const genCompChoice = () => {
    //rock paper scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
// draw game logic
const drawGame = () => {
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "#3b3a56";
}

//winner showing
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {

        msg.innerText = `You win..Your ${userChoice} beats ${compChoice}`;
        userScore++;
        userScorePar.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else {
        msg.innerText = `You lose.. ${compChoice} beats Your ${userChoice}`;
        compScore++;
        compScorePar.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}

// win and lose logic
const playGame = (userChoice) => {
    //Generate computer choice ->modular
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }

    else {
        let userWin = true;
        if (userChoice === "rock") {    //scissors , paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {  // scissors,rock
            userWin = compChoice === "scissors" ? false : true;
        }
        else {  //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};


choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userChoice);
    });
});

//reset button logic
const reset = () => {
    userScore = 0 ;
    compScore = 0 ;
    document.querySelector("#user-score").innerHTML=userScore ;
    document.querySelector("#comp-score").innerHTML= compScore;
}