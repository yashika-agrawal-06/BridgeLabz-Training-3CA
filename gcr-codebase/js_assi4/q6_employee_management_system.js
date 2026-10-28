"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // Monthly salary
  }

  // Calculate annual salary (Monthly * 12)
  getAnnualSalary() {
    return this.salary * 12;
  }

  // Apply bonus percentage to monthly salary
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

// Create 5 employee objects
const employees = [
  new Employee(1, "Alice", "HR", 5000),
  new Employee(2, "Bob", "Engineering", 8000),
  new Employee(3, "Charlie", "Engineering", 7500),
  new Employee(4, "Diana", "Marketing", 6000),
  new Employee(5, "Eve", "Sales", 5500)
];

// Give Engineering team a 10% bonus for testing
employees.forEach(emp => {
  if (emp.department === "Engineering") emp.applyBonus(10);
});

console.log("--- Employee Annual Salaries ---");
employees.forEach(emp => {
  console.log(`${emp.name}: $${emp.getAnnualSalary()}`);
});

// Calculate total annual payout using reduce()
const totalAnnualPayout = employees.reduce((total, emp) => {
  return total + emp.getAnnualSalary();
}, 0);

console.log(`\nTotal Annual Company Payout: $${totalAnnualPayout}`);
