const numbers = [];
const classifications = [];

for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

for (const number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
        classifications.push(`${number}: FizzBuzz`);
    } else if (number % 2 === 0) {
        classifications.push(`${number}: Even`);
    } else {
        classifications.push(`${number}: Odd`);
    }
}

console.log(classifications.join("\n"));
