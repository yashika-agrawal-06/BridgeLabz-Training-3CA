"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

// 1. Convert and process data
for (let i = 0; i < apiData.length; i++) {
    const raw = apiData[i];

    // Type conversions
    const numForm = Number(raw);
    const boolForm = Boolean(raw);
    const strForm = String(raw);

    // 2 & 3. Validation: Number(" ") is 0, which is a quirk. We must check for whitespace and NaN.
    // "100px" becomes NaN. null becomes 0. undefined becomes NaN.
    if (typeof raw === 'string' && raw.trim() === "") {
        invalidNumbers.push({ value: raw, reason: "Empty/Whitespace string" });
    } else if (Number.isNaN(numForm)) {
        invalidNumbers.push({ value: raw, reason: "Evaluates to NaN" });
    } else {
        validNumbers.push({ original: raw, number: numForm, boolean: boolForm, string: strForm });
    }
}

// 4. Print detailed report
console.log("--- DYNAMIC DATA PARSER REPORT ---");
console.log("Valid Numeric Data:");
validNumbers.forEach(item => {
    console.log(`Original: ${item.original} | Num: ${item.number} | Bool: ${item.boolean} | Str: '${item.string}'`);
});

console.log("\nInvalid Numeric Data:");
invalidNumbers.forEach(item => {
    console.log(`Value: '${item.value}' -> Skipped (${item.reason})`);
});
