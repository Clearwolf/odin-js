function computerPlay() {
    const playOptions = ["Rock", "Paper", "Scissors"];
    const randomPlay = playOptions[Math.floor(Math.random() * playOptions.length)];
    return randomPlay;
}

function playSingleRound() {
    const playerSelection = "rock";
    const computerSelection = computerPlay();
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "You tied.  Nobody wins, everyone gets a participation trophy."};
}

    console.log(playSingleRound());
