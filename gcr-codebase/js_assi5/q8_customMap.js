console.log("--- Executing Q8 ---");

// Extending the global Array prototype
Array.prototype.myMap = function(callback) {
    const result = [];

    // 'this' refers to the array calling the method
    for (let i = 0; i < this.length; i++) {
        // map callbacks take (currentValue, index, originalArray)
        result.push(callback(this[i], i, this));
    }

    return result;
};

const numbers = [1, 2, 3];
const doubled = numbers.myMap(num => num * 2);

console.log("Original:", numbers);
console.log("Using myMap to double:", doubled);
