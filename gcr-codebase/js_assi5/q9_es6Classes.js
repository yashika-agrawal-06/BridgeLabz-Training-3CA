console.log("--- Executing Q9 ---");

// Base Class
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Name: ${this.name}`);
    }
}

// Derived Class
class StudentClass extends PersonClass {
    constructor(name, branch) {
        // super() calls the parent class constructor
        super(name);
        this.branch = branch;
    }

    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

// Demonstration
const studentES6 = new StudentClass("Charlie", "Electrical Engineering");
studentES6.printName();   // Inherited from PersonClass
studentES6.printBranch(); // Defined on StudentClass

/* 
 * NOTE:
 * Under the hood, this ES6 class syntax sets up the exact same prototype chain
 * as the constructor function approach in Q5. It is just syntactical sugar that
 * makes object-oriented patterns easier to read and write.
 */
