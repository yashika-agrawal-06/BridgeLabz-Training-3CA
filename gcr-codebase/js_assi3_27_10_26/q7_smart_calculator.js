"use strict";

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, num1, num2) {
    let result;
    try {
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "divide":
                if (num2 === 0) throw new Error("Cannot divide by zero!");
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, num2);
                break;
            case "root":
                if (num1 < 0) throw new Error("Cannot compute square root of a negative number!");
                result = Math.sqrt(num1); // ignoring num2 for root
                break;
            default:
                throw new InvalidOperationError(`Operation '${operation}' is not recognized.`);
        }
        console.log(`Success: ${operation}(${num1}, ${num2}) = ${result}`);
    } catch (err) {
        console.log(`Error [${err.name}]: ${err.message}`);
    }
}

console.log("--- SMART CALCULATOR ---");
calculate("add", 25, 0);
calculate("divide", 25, 0); // Custom error trigger
calculate("root", -9, 0);   // Custom error trigger
calculate("modulus", 10, 2); // InvalidOperationError trigger
