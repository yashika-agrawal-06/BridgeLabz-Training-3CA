Here are complete JavaScript solutions for all 10 questions. Each question is structured as a standalone file with descriptive variable names, inline comments, and pure core JavaScript suitable for running in Node.js or the browser console.

File 1: personalizedLoginGreeting.js
JavaScript
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
File 2: multiTypeDataSummary.js
JavaScript
/**
 * Q2. Multi-Type Data Summary
 * Logic: Evaluates diverse data types using typeof and Array.isArray(), then formats into a table.
 */

// Declaring variables of various JavaScript data types
const strVal = "Hello World";
const numVal = 42;
const boolVal = true;
const arrVal = [10, 20, 30];
const objVal = { role: "Admin", active: true };
const nullVal = null;
let undefinedVal;

// Function to safely identify precise data types (handles arrays and null accurately)
function getExactType(value) {
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";
    return typeof value;
}

// Constructing the report dataset
const dataSummary = [
    { Label: "User Name", Value: strVal, Type: getExactType(strVal) },
    { Label: "User ID", Value: numVal, Type: getExactType(numVal) },
    { Label: "Is Logged In", Value: boolVal, Type: getExactType(boolVal) },
    { Label: "Scores Array", Value: JSON.stringify(arrVal), Type: getExactType(arrVal) },
    { Label: "Profile Details", Value: JSON.stringify(objVal), Type: getExactType(objVal) },
    { Label: "Middle Name", Value: nullVal, Type: getExactType(nullVal) },
    { Label: "Unassigned Flag", Value: undefinedVal, Type: getExactType(undefinedVal) }
];

// Display summary in table format
console.table(dataSummary);
File 3: monthlyExpenseTracker.js
JavaScript
/**
 * Q3. Monthly Expense Tracker
 * Logic: Calculates total and average from an array of expenses, adds 10% tax, and formats to 2 decimal places.
 */

// Expenses array [food, travel, rent, bills, leisure]
const expenses = [250.50, 80.00, 1200.00, 150.75, 95.20];

// Summing total expenses
let totalExpense = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}

// Calculating average expense
const averageExpense = totalExpense / expenses.length;

// Adding 10% tax using compound assignment operator
let finalTotalWithTax = totalExpense;
finalTotalWithTax += totalExpense * 0.10;

// Displaying results formatted to 2 decimal places
console.log(`Total Expense: $${totalExpense.toFixed(2)}`);
console.log(`Average Category Expense: $${averageExpense.toFixed(2)}`);
console.log(`Final Total (incl. 10% tax): $${finalTotalWithTax.toFixed(2)}`);
File 4: academicPerformanceEvaluator.js
JavaScript
/**
 * Q4. Academic Performance Evaluator
 * Logic: Checks individual subject thresholds before evaluating overall percentage for promotion status.
 */

// Subject marks [Math, Science, English, History, Art]
const subjectMarks = [88, 92, 79, 85, 90];

// Calculate total and overall percentage
let totalMarks = 0;
let hasFailedSubject = false;

for (let i = 0; i < subjectMarks.length; i++) {
    // Subject-level validation: automatic detention if any mark is below 35
    if (subjectMarks[i] < 35) {
        hasFailedSubject = true;
    }
    totalMarks += subjectMarks[i];
}

const averagePercentage = totalMarks / subjectMarks.length;

// Determine promotion status using logical operators
let evaluationStatus = "";

if (hasFailedSubject || averagePercentage < 50) {
    evaluationStatus = "Detained";
} else if (averagePercentage >= 85) {
    evaluationStatus = "Promoted with Distinction";
} else if (averagePercentage >= 50 && averagePercentage <= 84) {
    evaluationStatus = "Promoted";
}

// Output evaluation details
console.log(`Overall Percentage: ${averagePercentage.toFixed(2)}%`);
console.log(`Evaluation Result: ${evaluationStatus}`);
File 5: weatherActivityPlanner.js
JavaScript
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
File 6: progressiveDiscountSystem.js
JavaScript
/**
 * Q6. Progressive Discount System
 * Logic: Applies multi-tiered percentage discounts based on total purchase amount and rounds final values.
 */

const purchaseTotal = 7450;
let discountPercent = 0;

// Progressive tier evaluation
if (purchaseTotal >= 10000) {
    discountPercent = 25;
} else if (purchaseTotal >= 5000) {
    discountPercent = 15;
} else if (purchaseTotal >= 2000) {
    discountPercent = 5;
} else {
    discountPercent = 0;
}

// Price calculations
const discountAmount = (purchaseTotal * discountPercent) / 100;
const finalPrice = purchaseTotal - discountAmount;

// Output rounded values using Math.round()
console.log(`Original Total: $${Math.round(purchaseTotal)}`);
console.log(`Discount Applied: ${discountPercent}%`);
console.log(`Final Price: $${Math.round(finalPrice)}`);
File 7: smartGuessingGame.js
JavaScript
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
File 8: employeeSalaryProjection.js
JavaScript
/**
 * Q8. Employee Salary Projection
 * Logic: Computes year-over-year compounded salary increases using a for loop and console table output.
 */

let currentSalary = 50000;
const annualIncrementRate = 8; // 8% per annum
const projectionYears = 5;

const projectionReport = [];

// Compute projected growth over 5 years
for (let year = 1; year <= projectionYears; year++) {
    currentSalary += currentSalary * (annualIncrementRate / 100);
    
    projectionReport.push({
        Year: `Year ${year}`,
        "Increment Rate": `${annualIncrementRate}%`,
        "Projected Salary": `$${Math.round(currentSalary)}`
    });
}

// Output formatted table
console.table(projectionReport);
File 9: randomMathQuizGenerator.js
JavaScript
/**
 * Q9. Random Math Quiz Generator
 * Logic: Randomly selects numbers and operators, evaluates via switch, and formats division results.
 */

// Generate two random integers from 1 to 20
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

// Operator pool and random selection
const operators = ['+', '-', '*', '/'];
const selectedOperator = operators[Math.floor(Math.random() * operators.length)];

let calculatedResult = 0;

// Evaluate expression dynamically
switch (selectedOperator) {
    case '+':
        calculatedResult = num1 + num2;
        break;
    case '-':
        calculatedResult = num1 - num2;
        break;
    case '*':
        calculatedResult = num1 * num2;
        break;
    case '/':
        calculatedResult = num1 / num2;
        break;
}

// Format output (division rounded to 2 decimals)
const formattedResult = (selectedOperator === '/') 
    ? calculatedResult.toFixed(2) 
    : calculatedResult;

console.log(`Math Quiz Challenge: ${num1} ${selectedOperator} ${num2}`);
console.log(`Correct Answer: ${formattedResult}`);
File 10: citizenEligibilityValidator.js
JavaScript
/**
 * Q10. Citizen Eligibility Validator
 * Logic: Evaluates service eligibility by combining age and citizenship status criteria.
 */

const userAge = 19;
const isCitizen = true;

// Multi-branch eligibility logic
if (isCitizen && userAge >= 18) {
    if (userAge >= 18 && userAge <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Eligible for all services.");
    }
} else if (!isCitizen && userAge >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}