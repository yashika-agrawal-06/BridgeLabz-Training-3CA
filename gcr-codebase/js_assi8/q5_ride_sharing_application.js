class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleModel, plateNumber) {
    super(name, rating);
    this.vehicleDetails = {
      model: vehicleModel,
      plateNumber: plateNumber
    };
  }
}

class Trip {
  constructor(rider, driver, fromLocation, toLocation, distanceKm) {
    this.rider = rider;
    this.driver = driver;
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distanceKm = distanceKm;
  }

  calculateFare() {
    const baseFare = 50;
    const ratePerKm = 14;

    if (typeof this.distanceKm !== "number" || Number.isNaN(this.distanceKm)) {
      throw new Error("Distance must be provided as a valid number.");
    }
    if (this.distanceKm <= 0) {
      throw new Error("Distance must be greater than zero.");
    }

    return baseFare + this.distanceKm * ratePerKm;
  }
}

const rider = new User("Kabir", 4.8);
const driver = new Driver("Suresh", 4.9, "Maruti Swift Dzire", "UP85-AB-1234");

try {
  const validTrip = new Trip(rider, driver, "Mathura Junction", "Vrindavan", 12);
  console.log(
    `Trip (${validTrip.fromLocation} -> ${validTrip.toLocation}) | Driver: ${driver.name} (${driver.vehicleDetails.model}) | Fare: ₹${validTrip.calculateFare()}`
  );
} catch (error) {
  console.error(`Trip Error: ${error.message}`);
}

try {
  const invalidTrip = new Trip(rider, driver, "Agra", "Mathura", -5);
  console.log(`Fare: ₹${invalidTrip.calculateFare()}`);
} catch (error) {
  console.error(`Trip Error: ${error.message}`);
}
