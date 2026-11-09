// Modernized Promise-based function
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isApiFailure = Math.random() > 0.7; // 30% chance of failure
            
            if (isApiFailure) {
                reject(new Error("API Timeout or Network Error"));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

// Execution
console.log("Fetching bugs...");
getBugs()
    .then(bugs => {
        console.log("Bugs fetched successfully:");
        console.table(bugs);
    })
    .catch(error => {
        console.error("Failed to fetch bugs:", error.message);
    });
