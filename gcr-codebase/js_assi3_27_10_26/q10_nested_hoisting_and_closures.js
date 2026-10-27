"use strict";

/*
1 & 2. Predict and Explain:
In original `outer()`:
- `console.log(count)` inside `inner()` prints `undefined`.
- WHY? Because `var count = 10` is hoisted to the TOP of `inner()`'s execution context.
  It shadows the `var count = 5` from `outer()`. The declaration is hoisted, but not the assignment, so it is undefined at the time of the log.
*/

// 3. Arrow function implementation resolving the hoisting quirk:
function outer() {
    let count = 5; // Use let for block scoping
    console.log(`Outer count: ${count}`);

    // Arrow function binds logically, and using let prevents hoisting assignment confusion.
    const inner = () => {
        // If we want to reference outer 'count', we just use it.
        // If we want a new one, we declare it.
        console.log(`Inner count before re-declaration is not allowed with let (TDZ). We will just declare a new shadowed var.`);
        let innerCount = 10;
        console.log(`Inner count (new variable): ${innerCount}`);

        // 4. Call Stack Flow: Global -> outer() -> inner(). Memory contexts are strictly scoped using 'let'.
    };
    inner();
}

console.log("--- NESTED HOISTING & CLOSURES ---");
outer();
