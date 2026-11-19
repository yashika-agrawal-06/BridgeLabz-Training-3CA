class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (this.marks.length === 0) return 0;
    const totalMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
    return Number((totalMarks / this.marks.length).toFixed(2));
  }

  getGrade() {
    const average = this.calculateAverage();
    if (average >= 85) return "A";
    if (average >= 70) return "B";
    if (average >= 50) return "C";
    return "F";
  }

  displayReport() {
    console.log(
      `Student: ${this.name} | Average: ${this.calculateAverage()}% | Grade: ${this.getGrade()}`
    );
  }
}

const studentAarav = new Student("Aarav", [88, 92, 85, 90]);
const studentPriya = new Student("Priya", [74, 68, 79, 72]);
const studentRohan = new Student("Rohan", [42, 38, 49, 45]);

studentAarav.displayReport();
studentPriya.displayReport();
studentRohan.displayReport();
