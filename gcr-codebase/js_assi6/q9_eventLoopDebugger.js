/*
 * PREDICTED OUTPUT:
 * 1. Script start (synchronous)
 * 2. Script end (synchronous)
 * 3. Promise callback (Microtask, runs immediately after synchronous stack clears)
 * 4. Timeout callback (Macrotask, runs after all microtasks are complete)
 */

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
 * EXPLANATION:
 * The main thread executes synchronous code first ("Script start", "Script end").
 * The `setTimeout` is sent to the Web APIs and its callback is pushed to the Macrotask Queue.
 * The resolved Promise is pushed to the Microtask Queue.
 * When the call stack is empty, the Event Loop prioritizes the Microtask Queue over the 
 * Macrotask Queue. Thus, "Promise callback" executes before "Timeout callback".
 */
