// Higher-order function that applies a callback to each element of an array
function applyOperation(numbers, operation) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        // Pass each number to the callback and store the result
        result.push(operation(numbers[i]));
    }
    return result;
}

const numList = [1, 2, 3, 4];

// Callback for doubling a number
const doubleOperation = (num) => num * 2;

// Callback for squaring a number
const squareOperation = (num) => num * num;

console.log("--- Executing Q2 ---");
console.log("Original Array:", numList);
console.log("Doubled:", applyOperation(numList, doubleOperation));
console.log("Squared:", applyOperation(numList, squareOperation));
