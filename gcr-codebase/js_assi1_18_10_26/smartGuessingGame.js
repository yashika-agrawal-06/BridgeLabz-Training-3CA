/**
 * Q7. Smart Guessing Game (Number Range)
 * Logic: Generates a random target (1-50) and uses Math.abs() to determine proximity of user's guess.
 */

// Generate random secret integer between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// User's test guess
const userGuess = 28;

console.log(`Secret Number: ${secretNumber} | User Guess: ${userGuess}`);

// Evaluate guess accuracy
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check if within +/- 3 range using absolute difference
    const difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
