const serverA = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.8 ? reject("Server A failed") : resolve("Server A");
    }, 2000);
});

const serverB = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.8 ? reject("Server B failed") : resolve("Server B");
    }, 3000);
});

// Promise.all waits for ALL to resolve or short-circuits if ANY reject
Promise.all([serverA, serverB])
    .then(results => {
        console.log(`Deployment completed for all servers: ${results.join(", ")}`);
    })
    .catch(error => {
        console.error("Deployment failed:", error);
    });

// Promise.race resolves/rejects as soon as the FIRST promise settles
Promise.race([serverA, serverB])
    .then(fastest => {
        console.log(`Fastest response: ${fastest}`);
    })
    .catch(error => {
        console.error(`Fastest server failed: ${error}`);
    });
