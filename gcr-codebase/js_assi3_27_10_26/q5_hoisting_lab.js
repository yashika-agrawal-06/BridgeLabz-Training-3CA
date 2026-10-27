"use strict";

/*
1. Original Code & Explanations:
console.log(score); // Output: undefined. 'var score' is hoisted, but its assignment (= 50) is not.
announce(); // Output: "Game started". Function declarations are hoisted entirely with their body.
var score = 50;
function announce() { console.log("Game started"); }

startGame(); // ReferenceError! 'status' is declared with 'let', entering the Temporal Dead Zone (TDZ).
let status = "ready";
function startGame() { console.log(status); }
*/

// 2. Fixed Code:
console.log("--- FIXED HOISTING CODE ---");
var fixedScore = 50;
console.log(fixedScore);
announceFixed();
function announceFixed() { console.log("Game started"); }

let fixedStatus = "ready";
startGameFixed();
function startGameFixed() { console.log(fixedStatus); }

// 3. Rewrite using Arrow Functions:
// Arrow functions act like variables. If assigned to 'const' or 'let', they are subject to the TDZ and NOT hoisted.
console.log("--- ARROW FUNCTION REWRITE ---");
const arrowScore = 50;
const arrowAnnounce = () => console.log("Game started (Arrow)");

const arrowStatus = "ready";
const arrowStartGame = () => console.log(arrowStatus);

console.log(arrowScore);
arrowAnnounce();
arrowStartGame();
