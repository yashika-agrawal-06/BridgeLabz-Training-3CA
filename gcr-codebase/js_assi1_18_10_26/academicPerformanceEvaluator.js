/**
 * Q4. Academic Performance Evaluator
 * Logic: Checks individual subject thresholds before evaluating overall percentage for promotion status.
 */

// Subject marks [Math, Science, English, History, Art]
const subjectMarks = [88, 92, 79, 85, 90];

// Calculate total and overall percentage
let totalMarks = 0;
let hasFailedSubject = false;

for (let i = 0; i < subjectMarks.length; i++) {
    // Subject-level validation: automatic detention if any mark is below 35
    if (subjectMarks[i] < 35) {
        hasFailedSubject = true;
    }
    totalMarks += subjectMarks[i];
}

const averagePercentage = totalMarks / subjectMarks.length;

// Determine promotion status using logical operators
let evaluationStatus = "";

if (hasFailedSubject || averagePercentage < 50) {
    evaluationStatus = "Detained";
} else if (averagePercentage >= 85) {
    evaluationStatus = "Promoted with Distinction";
} else if (averagePercentage >= 50 && averagePercentage <= 84) {
    evaluationStatus = "Promoted";
}

// Output evaluation details
console.log(`Overall Percentage: ${averagePercentage.toFixed(2)}%`);
console.log(`Evaluation Result: ${evaluationStatus}`);
