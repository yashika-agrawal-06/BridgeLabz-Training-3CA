// Utility function to simulate a delay and random failure
const delay = (ms, taskName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 20% chance of failure
            if (Math.random() > 0.8) {
                reject(`Failed during: ${taskName}`);
            } else {
                resolve(`${taskName} completed.`);
            }
        }, ms);
    });
};

function boilWater() {
    console.log("Boiling water...");
    return delay(1000, "Boiling water");
}

function brewCoffee() {
    console.log("Brewing coffee...");
    return delay(1500, "Brewing coffee");
}

function pourIntoCup() {
    console.log("Pouring into a cup...");
    return delay(1000, "Pouring into a cup");
}

// Promise Chaining
boilWater()
    .then(result => {
        console.log(result);
        return brewCoffee();
    })
    .then(result => {
        console.log(result);
        return pourIntoCup();
    })
    .then(result => {
        console.log(result);
        console.log("Coffee ready for the team!");
    })
    .catch(error => {
        console.error("Coffee making failed:", error);
    });
