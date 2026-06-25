//User enters a max number & then tries to guess a random generated number between 1 to max.
let MaxNum = prompt("Guess the max number to start the game.");
MaxNum = Number(MaxNum);

if (isNaN(MaxNum) || MaxNum <= 0) {  //isNaN is built in function
    console.log("Invalid max number");
} else {

    let Guess = prompt("Guess the number between 1 and " + MaxNum);
    let RandomValue = Math.floor(Math.random() * MaxNum) + 1;

    while (true) {

        if (Guess === "quit") {
            console.log("Game exited");
            break;
        }

        Guess = Number(Guess);

        if (isNaN(Guess)) {
            Guess = prompt("Invalid input, try again:");
        }
        else if (Guess === RandomValue) {
            console.log(RandomValue+" is Correct! You won!",);
            break;
        }
        else if (Guess < RandomValue) {
            Guess = prompt("Too small, try again:");
        }
        else {
            Guess = prompt("Too large, try again:");
        }
    }
}