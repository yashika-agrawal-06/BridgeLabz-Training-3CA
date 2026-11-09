function loadProfile() { 
    return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); 
}
function loadPosts() { 
    return new Promise((resolve, reject) => setTimeout(() => {
        // Randomly reject this promise
        Math.random() > 0.5 ? resolve("Posts Loaded") : reject("Posts Failed");
    }, 1500)); 
}
function loadMessages() { 
    return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); 
}

async function loadDashboard() {
    const startTime = Date.now();
    console.log("Loading dashboard...");

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach((result, index) => {
        const moduleName = ["Profile", "Posts", "Messages"][index];
        if (result.status === "fulfilled") {
            console.log(`SUCCESS: ${moduleName} -> ${result.value}`);
        } else {
            console.error(`FAILED: ${moduleName} -> ${result.reason}`);
        }
    });

    const endTime = Date.now();
    console.log(`Total time taken: ${endTime - startTime}ms`);
}

loadDashboard();
