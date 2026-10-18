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
