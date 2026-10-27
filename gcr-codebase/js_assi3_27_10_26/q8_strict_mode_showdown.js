"use strict";

/*
1 & 3. What happens in Strict Mode vs Non-Strict:
- Duplicate parameters: `function demo(a, a)` is legal in non-strict (second 'a' overwrites first). Strict mode throws a SyntaxError.
- Undeclared variables: `total = 10;` creates a global variable in non-strict mode. Strict mode throws a ReferenceError.
- Delete keyword: `delete total;` fails silently or returns false in non-strict. Strict mode throws a SyntaxError (deleting plain names is forbidden).
*/

// Original code commented out to prevent crashing:
/*
function demo(a, a) {
    total = 10;
    delete total;
}
*/

// 4. Correct Version using ES6 rules:
function demoCorrect(param1, param2) {
    let total = 10;
    // Instead of deleting, just set to null/undefined if memory needs clearing, or let garbage collection handle it
    total = null;
    console.log(`Demo executed with ${param1}, ${param2}`);
}

demoCorrect(5, 10);
