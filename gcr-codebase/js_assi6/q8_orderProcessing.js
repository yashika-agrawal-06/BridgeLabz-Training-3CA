function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5; // Fails 50% of the time
            if (isSuccess) {
                resolve("Order successfully submitted");
            } else {
                reject(new Error("Network error"));
            }
        }, 1000);
    });
}

async function processOrder() {
    const MAX_RETRIES = 3;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            console.log(`Attempt ${attempt}: Submitting order...`);
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success! ${result}`);
            return; // Exit loop on success
        } catch (error) {
            console.error(`Attempt ${attempt}: Failed.`);
            if (attempt === MAX_RETRIES) {
                throw new Error("Order could not be processed after 3 attempts.");
            }
        }
    }
}

// Execution
async function start() {
    try {
        await processOrder();
    } catch (err) {
        console.error(`Final Status: ${err.message}`);
    }
}

start();
