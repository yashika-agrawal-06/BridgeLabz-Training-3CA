const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (const [department, score] of departments) {
    let rating;

    if (score >= 90) {
        rating = "Excellent";
    } else {
        if (score >= 75) {
            rating = "Good";
        } else if (score >= 60) {
            rating = "Average";
        } else {
            rating = "Needs Improvement";
        }
    }

    console.log(`${department}: ${score} - ${rating}`);
}
