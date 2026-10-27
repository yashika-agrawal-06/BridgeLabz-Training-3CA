"use strict";

/*
1. Identify why this throws an error:
In strict mode, assigning a value to an undeclared variable ("greeting") is illegal.
Without strict mode, JavaScript would create a global variable attached to the window object.

2. Fix and explain:
We fix this by properly declaring the variable using 'let' or 'const', binding it to the local scope of the function.

3. Debug Observation:
If watched in a debugger before the fix, a ReferenceError is thrown in the call stack inside `showMessage()`.
*/

function showMessage() {
    let greeting = "Welcome"; // Fixed: declared locally
    console.log(greeting);
}
showMessage();
