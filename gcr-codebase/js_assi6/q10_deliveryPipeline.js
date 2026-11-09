// Helper to simulate a step with a random 1-2s delay and random failure
const processStep = (stepName) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000; // 1 to 2 seconds
        setTimeout(() => {
            // 15% chance of failure
            if (Math.random() > 0.85) {
                reject(`Failed at: ${stepName}`);
            } else {
                resolve(stepName);
            }
        }, delay);
    });
};

async function runPipeline() {
    console.log("Start Pipeline");
    
    try {
        await processStep("Order taken");
        console.log("Step 1: Order taken");
        
        await processStep("Food prepared");
        console.log("Step 2: Food prepared");
        
        await processStep("Package ready");
        console.log("Step 3: Package ready");
        
        await processStep("Out for delivery");
        console.log("Step 4: Out for delivery");
        
        console.log("Delivery completed!");
    } catch (error) {
        console.error(error);
        console.error("Pipeline failed!");
    }
}

/* 
 * ASYNC/EVENT LOOP EXPLANATION:
 * The `await` keyword pauses the execution of the `runPipeline` function.
 * Under the hood, `await` wraps the remaining code in a `.then()` callback and 
 * registers it as a Microtask. This allows the main thread (Event Loop) to handle 
 * other tasks (like UI rendering or other async I/O) while waiting for the timer 
 * (Macrotask) inside `processStep` to complete. 
 */

runPipeline();
