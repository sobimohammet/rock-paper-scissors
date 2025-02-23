humanScore = 0;
computerScore = 0;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let pick = prompt("Enter your play");
    let arrangePick = pick.toLowerCase();
    return arrangePick.replace(arrangePick.charAt(0), arrangePick.charAt(0).toUpperCase())
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It is a tie! ${humanChoice} vs ${computerChoice}. The score is; Human ${humanScore} , Computer ${computerScore}.`);
    } else if (humanChoice === "Rock") {
        if (computerChoice === "scissors") {
            console.log(`You win! Rock beats Scissors. The score is; Human ${humanScore=humanScore+1}, Computer ${computerScore=computerScore+0}.`);
        } else {
            console.log(`You lose! Paper beats Rocks. The score is; Human ${humanScore=humanScore+0}, Computer ${computerScore=computerScore+1}.`);
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log(`You win! Paper beats Rock. The score is; Human ${humanScore=humanScore+1}, Computer ${computerScore=computerScore+0}.`);
        } else {
            console.log(`You Lose! Scissors beats Rock. The score is; Human ${humanScore=humanScore+0}, Computer ${computerScore=computerScore+1}.`);
        }
    } else {
        if (computerChoice === "Paper") {
            console.log(`You win! Scissors beats Paper. The score is; Human ${humanScore=humanScore+1}, Computer ${computerScore=computerScore+0}.`);
        } else {
            console.log(`You lose! Rock beats Scissors. The score is; Human ${humanScore=humanScore+0}, Computer ${computerScore=computerScore+1}.`);
        }
    }
}


function playGame() {
    for (i = 1; i <= 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log(`End of game You win! The score is; Human ${humanScore} Computer ${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`End of game You lose! The score is; Human ${humanScore} Computer ${computerScore}.`);
    } else {
        console.log(`End of game It's a draw! The score is; Human ${humanScore} Computer ${computerScore}. Try again!`);
    }
}