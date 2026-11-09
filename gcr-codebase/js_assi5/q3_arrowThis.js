console.log("--- Executing Q3 ---");

// Object with an arrow function
const userWithArrow = {
    name: "John",
    showName: () => {
        console.log("Arrow function output:", this.name);
    }
};

userWithArrow.showName();
/*
 * EXPLANATION:
 * The output is undefined.
 * Arrow functions do NOT have their own 'this' binding. They inherit 'this' from
 * their outer lexical environment (the global scope or module scope in Node.js).
 * Since the global scope doesn't have a 'name' variable, 'this.name' is undefined.
 */

// Fixed Object with a normal function
const userFixed = {
    name: "John",
    showName: function() {
        // Normal functions bind 'this' to the object calling the method
        console.log("Normal function output:", this.name);
    }
};

userFixed.showName(); // Outputs: John
