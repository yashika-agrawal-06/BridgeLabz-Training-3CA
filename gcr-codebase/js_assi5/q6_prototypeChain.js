console.log("--- Executing Q6 ---");

// 1. Base Level: Person
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
};

// 2. Middle Level: Faculty inherits from Person
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getDepartment = function() {
    return this.department;
};

// 3. Lowest Level: Professor inherits from Faculty
function Professor(name, department, researchArea) {
    Faculty.call(this, name, department);
    this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getResearchArea = function() {
    return this.researchArea;
};

// Demonstration
const prof = new Professor("Dr. Smith", "Physics", "Quantum Mechanics");

console.log("Name (via Person):", prof.getName());
console.log("Department (via Faculty):", prof.getDepartment());
console.log("Research (via Professor):", prof.getResearchArea());
