/**
 * Q2. Multi-Type Data Summary
 * Logic: Evaluates diverse data types using typeof and Array.isArray(), then formats into a table.
 */

// Declaring variables of various JavaScript data types
const strVal = "Hello World";
const numVal = 42;
const boolVal = true;
const arrVal = [10, 20, 30];
const objVal = { role: "Admin", active: true };
const nullVal = null;
let undefinedVal;

// Function to safely identify precise data types (handles arrays and null accurately)
function getExactType(value) {
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";
    return typeof value;
}

// Constructing the report dataset
const dataSummary = [
    { Label: "User Name", Value: strVal, Type: getExactType(strVal) },
    { Label: "User ID", Value: numVal, Type: getExactType(numVal) },
    { Label: "Is Logged In", Value: boolVal, Type: getExactType(boolVal) },
    { Label: "Scores Array", Value: JSON.stringify(arrVal), Type: getExactType(arrVal) },
    { Label: "Profile Details", Value: JSON.stringify(objVal), Type: getExactType(objVal) },
    { Label: "Middle Name", Value: nullVal, Type: getExactType(nullVal) },
    { Label: "Unassigned Flag", Value: undefinedVal, Type: getExactType(undefinedVal) }
];

// Display summary in table format
console.table(dataSummary);
