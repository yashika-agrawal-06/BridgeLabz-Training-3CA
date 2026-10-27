"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

// 1. Loop through transactions
for (const t of transactions) {
    try {
        // Debug Observation: Setting a breakpoint here would show 't' as an object or null.

        // 2. Throw custom errors
        if (t === null) {
            throw new Error("Null transaction entry");
        }
        if (t.id === undefined || t.amount === undefined) {
            throw new Error(`Missing amount or id in transaction (ID: ${t.id || 'Unknown'})`);
        }
        if (t.amount < 0) {
            throw new Error(`Negative amount not allowed (ID: ${t.id})`);
        }

        // If no errors thrown, it's valid
        validTransactions.push(t);
    } catch (err) {
        // 3. Catch and categorize errors
        invalidTransactions.push({ transaction: t, error: err.message });
    }
}

// 4. Print final reports
console.log("--- TRANSACTION VALIDATOR REPORT ---");
console.log(`Successful Transactions (${validTransactions.length}):`, validTransactions);
console.log(`Failed Transactions (${invalidTransactions.length}):`);
invalidTransactions.forEach(inv => console.log(`- ${inv.error}`));
