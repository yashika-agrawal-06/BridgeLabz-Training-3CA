const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Math Utility Dashboard
Value: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Power (x^3): ${cube.toFixed(2)}
Random number (10-50): ${randomNumber}`);
