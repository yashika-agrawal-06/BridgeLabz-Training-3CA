let count = 0;

function logCount(action) {
    function displayCount() {
        console.log(`${action}: ${count}`);
    }

    displayCount();
}

function increment() {
    count++;
    logCount("Increment");
}

function decrement() {
    count--;
    logCount("Decrement");
}

console.log(`Starting count: ${count}`);
increment();
increment();
decrement();
