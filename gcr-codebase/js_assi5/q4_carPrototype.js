console.log("--- Executing Q4 ---");

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding a method to the prototype so all instances share the same function
Car.prototype.getDetails = function() {
    console.log(`Car Details: ${this.brand} ${this.model}`);
};

// Creating instances
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Tesla", "Model S");

// Calling the shared prototype method
car1.getDetails();
car2.getDetails();
