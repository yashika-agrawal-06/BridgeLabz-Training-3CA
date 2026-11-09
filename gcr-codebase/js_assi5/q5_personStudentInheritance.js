console.log("--- Executing Q5 ---");

// Base Constructor
function Person(name) {
    this.name = name;
}
Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

// Derived Constructor
function Student(name, branch) {
    // Call the parent constructor to inherit properties
    Person.call(this, name);
    this.branch = branch;
}

// Inherit the prototype methods from Person
Student.prototype = Object.create(Person.prototype);

// Reset the constructor reference back to Student
Student.prototype.constructor = Student;

// Add a specific method to Student's prototype
Student.prototype.printBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

// Demonstration
const student1 = new Student("Bob", "Computer Science");
student1.printName();   // Inherited from Person
student1.printBranch(); // Defined on Student
