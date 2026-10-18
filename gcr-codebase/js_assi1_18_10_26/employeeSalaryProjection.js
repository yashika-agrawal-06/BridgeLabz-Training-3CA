/**
 * Q8. Employee Salary Projection
 * Logic: Computes year-over-year compounded salary increases using a for loop and console table output.
 */

let currentSalary = 50000;
const annualIncrementRate = 8; // 8% per annum
const projectionYears = 5;

const projectionReport = [];

// Compute projected growth over 5 years
for (let year = 1; year <= projectionYears; year++) {
    currentSalary += currentSalary * (annualIncrementRate / 100);

    projectionReport.push({
        Year: `Year ${year}`,
        "Increment Rate": `${annualIncrementRate}%`,
        "Projected Salary": `$${Math.round(currentSalary)}`
    });
}

// Output formatted table
console.table(projectionReport);
