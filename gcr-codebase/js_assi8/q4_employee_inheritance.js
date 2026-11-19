class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is executing operational tasks in the ${this.department} department.`);
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  work() {
    console.log(
      `${this.name} is managing a team of ${this.teamSize} people and leading strategy in ${this.department}.`
    );
  }
}

const staffMembers = [
  new Employee("Vikram", "Engineering"),
  new Manager("Ananya", "Engineering", 12),
  new Employee("Neha", "Marketing")
];

staffMembers.forEach((member) => member.work());
