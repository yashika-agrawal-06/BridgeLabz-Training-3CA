/**
 * Q3. Monthly Expense Tracker
 * Logic: Calculates total and average from an array of expenses, adds 10% tax, and formats to 2 decimal places.
 */

// Expenses array [food, travel, rent, bills, leisure]
const expenses = [250.50, 80.00, 1200.00, 150.75, 95.20];

// Summing total expenses
let totalExpense = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}

// Calculating average expense
const averageExpense = totalExpense / expenses.length;

// Adding 10% tax using compound assignment operator
let finalTotalWithTax = totalExpense;
finalTotalWithTax += totalExpense * 0.10;

// Displaying results formatted to 2 decimal places
console.log(`Total Expense: $${totalExpense.toFixed(2)}`);
console.log(`Average Category Expense: $${averageExpense.toFixed(2)}`);
console.log(`Final Total (incl. 10% tax): $${finalTotalWithTax.toFixed(2)}`);
