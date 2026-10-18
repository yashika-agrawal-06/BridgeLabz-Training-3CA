/**
 * Q1. Personalized Login Greeting
 * Logic: Checks current hour using JavaScript's Date object and applies conditional logic.
 */

// User name and dynamic hour retrieval
const userName = "Alex";
const currentHour = new Date().getHours();

// Greeting logic based on 24-hour clock ranges
let greeting = "";

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

// Display output
console.log(greeting);
