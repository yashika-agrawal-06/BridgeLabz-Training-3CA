let bonus = 5000;

function calculateSalary(isPermanent) {
    const salary = 40000;
    const totalSalary = isPermanent ? salary + bonus : salary;

    console.log(`Permanent: ${isPermanent}`);
    console.log(`Total salary: $${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus remains: $${bonus}`);
