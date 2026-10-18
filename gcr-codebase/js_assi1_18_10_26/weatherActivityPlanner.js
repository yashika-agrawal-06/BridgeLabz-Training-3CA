/**
 * Q5. Weather Activity Planner
 * Logic: Uses combined conditional branches with logical operators to recommend suitable activities.
 */

// Weather condition variables
const temperature = 12; // in Celsius
const isRaining = false;
const windSpeed = 25; // in km/h

let recommendation = "";

// Decision ladder combining logical OR and AND operators
if (isRaining) {
    recommendation = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    recommendation = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    recommendation = "Too cold and windy — stay home.";
} else {
    recommendation = "Perfect day for a walk.";
}

// Display recommendation
console.log(`Weather Report: Temp ${temperature}°C, Wind ${windSpeed} km/h, Rain: ${isRaining}`);
console.log(`Recommendation: ${recommendation}`);
