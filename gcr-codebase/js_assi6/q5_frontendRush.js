const delayTask = (taskName, callback) => {
    setTimeout(() => {
        console.log(`Completed: ${taskName}`);
        if (callback) callback();
    }, 1000);
};

// --- Part 1: Callback Hell ---
console.log("--- Starting Callback Hell Pipeline ---");
delayTask("Design", () => {
    delayTask("Build", () => {
        delayTask("Test", () => {
            delayTask("Deploy", () => {
                delayTask("Celebrate", () => {
                    console.log("Callback Hell Pipeline Finished!\n");
                    startAsyncPipeline(); // Start the refactored version
                });
            });
        });
    });
});

// --- Part 2: Refactored with async/await ---
const asyncTask = (taskName) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Completed: ${taskName}`);
            resolve();
        }, 1000);
    });
};

/* 
 * Async/await improves readability by making asynchronous code look 
 * and behave like synchronous code. It eliminates the deep nesting 
 * (the "Pyramid of Doom") and makes error handling much easier with try/catch.
 */
async function startAsyncPipeline() {
    console.log("--- Starting Async/Await Pipeline ---");
    await asyncTask("Design");
    await asyncTask("Build");
    await asyncTask("Test");
    await asyncTask("Deploy");
    await asyncTask("Celebrate");
    console.log("Async Pipeline Finished!");
}
