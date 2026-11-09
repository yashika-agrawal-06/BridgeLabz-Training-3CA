console.log("Start");

// Macrotask (Timer)
setTimeout(() => {
    console.log("setTimeout callback (Macrotask)");
}, 0);

// Microtask (Promise)
Promise.resolve().then(() => {
    console.log("Promise.then callback (Microtask)");
});

// Synchronous task
console.log("Synchronous log");

console.log("End");

/* 
 * EXPLANATION:
 * The output will be:
 * 1. Start
 * 2. Synchronous log
 * 3. End
 * 4. Promise.then callback (Microtask)
 * 5. setTimeout callback (Macrotask)
 * 
 * Why? 
 * Synchronous code is executed first on the main thread. 
 * Once the call stack is empty, the Event Loop checks the Microtask Queue 
 * (which contains Promises and MutationObservers). 
 * After all microtasks are executed, it finally checks the Macrotask Queue 
 * (which contains setTimeout, setInterval, I/O tasks). Therefore, microtasks 
 * always run before macrotasks.
 */
