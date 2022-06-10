function computerPlay() {

    const playOptions = ["Rock", "Paper", "Scissors"];

    const randomPlay = playOptions[Math.floor(Math.random() * playOptions.length)];

    return randomPlay;

}

function playSingleRound(playerSelection, computerSelection) {

    const win = "You win. You beat the computer. You are the superior being.";
    const lose = "You lose. Now would be a good time to reflect on the decisions you've made in your life that have led you to this moment.";
    const tie = "You tied. Nobody wins, everyone gets a participation trophy."

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return tie}

    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return lose}

    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return win}

    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return win}

    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return lose}
        
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return lose}

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return win}

}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playSingleRound(playerSelection, computerSelection));
