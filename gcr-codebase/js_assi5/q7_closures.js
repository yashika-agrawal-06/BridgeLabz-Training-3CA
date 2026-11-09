console.log("--- Executing Q7 ---");

function makeMultiplier(multiplier) {
    // Returns an inner function that retains access to 'multiplier'
    return function(num) {
        return num * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // Outputs: 15

/*
 * EXPLANATION OF CLOSURE:
 * A closure is formed when an inner function "remembers" the variables and arguments
 * of its outer function even after the outer function has finished executing.
 * When makeMultiplier(3) runs, it returns an anonymous function. Even though
 * makeMultiplier finishes executing, the returned function still remembers that
 * 'multiplier' is 3 thanks to the closure. When we call triple(5), it successfully
 * calculates 5 * 3.
 */
