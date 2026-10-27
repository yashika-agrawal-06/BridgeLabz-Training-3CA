"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const validEntries = [];

console.log("--- JSON AUDIT REPORT ---");

rawData.forEach((str, index) => {
    // Debug step: control flow jumps directly to catch block if JSON.parse fails.
    try {
        const parsed = JSON.parse(str);

        // Check for missing keys
        if (!parsed.user || !parsed.age) {
            throw new Error("Missing required keys: 'user' or 'age'");
        }

        // Bonus: Convert age to Number and filter under-18
        const ageNum = Number(parsed.age);
        if (isNaN(ageNum)) throw new Error("Age must be a valid number");

        if (ageNum >= 18) {
            validEntries.push({ user: parsed.user, age: ageNum });
        } else {
            console.log(`Line ${index + 1}: Filtered out (Under 18)`);
        }

    } catch (err) {
        console.log(`Line ${index + 1} Error: ${err.message}`);
    }
});

console.log("Valid Audit Data:", validEntries);
