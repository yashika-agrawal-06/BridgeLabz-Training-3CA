"use strict"; // Strict validation applied (no implicit globals)

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
    { name: "ErrorBot" } // Intentionally malformed to test try...catch
];

console.log("--- EMPLOYEE BONUS REPORT ---");

employees.forEach(emp => {
    try {
        // 5. Handle missing property errors
        if (!emp.name || !emp.salary || !emp.years) {
            throw new Error(`Missing data for employee: ${emp.name || 'Unknown'}`);
        }

        // 1. Convert to numbers
        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (isNaN(salary) || isNaN(years)) {
            throw new Error(`Invalid numeric data for ${emp.name}`);
        }

        // 2. Calculate bonus
        const bonusMultiplier = years > 3 ? 0.1 : 0.05;
        const bonus = salary * bonusMultiplier;

        // 4. Template strings for output
        console.log(`Employee: ${emp.name} | Salary: ₹${salary} | Years: ${years} | Bonus: ₹${bonus}`);
    } catch (error) {
        console.log(`[Processing Error]: ${error.message}`);
    }
});
