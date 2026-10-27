"use strict";

/*
Debug Observation ('let' vs 'var'):
If 'var' is used in a loop, the variable leaks out of the block scope and is overwritten,
often leading to unexpected final values if asynchronous functions or closures are inside.
'let' maintains block scope.
*/

function generatePyramid(rows = 5) { // User input default = 5
    console.log(`--- PYRAMID (Size: ${rows}) ---`);
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern.trim());
    }
}

generatePyramid(4);
generatePyramid(); // Uses default 5
