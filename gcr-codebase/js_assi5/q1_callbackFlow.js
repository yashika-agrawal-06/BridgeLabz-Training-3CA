// Function that takes a name and a callback function
function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    // Execute the callback function after greeting
    callback();
}

// Callback function to be passed
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstration of the callback flow
console.log("--- Executing Q1 ---");
greetUser("Alice", showEndMessage);

/*
 * FLOW EXPLANATION:
 * 1. greetUser is called with "Alice" and the showEndMessage function reference.
 * 2. greetUser prints "Hello Alice".
 * 3. greetUser invokes the passed callback().
 * 4. showEndMessage executes, printing "Welcome to the course!".
 */
