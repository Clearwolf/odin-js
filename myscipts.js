function computerPlay() {
    const playOptions = ["Rock", "Paper", "Scissors"];
    const randomPlay = playOptions[Math.floor(Math.random() * playOptions.length)];
    return randomPlay;
}

console.log(computerPlay());