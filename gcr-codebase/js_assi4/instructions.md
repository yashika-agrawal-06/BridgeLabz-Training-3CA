Here are the solutions for Assignment 4. For questions requiring DOM manipulation and form validations (Q2, Q4, Q5, Q7, Q8), the JavaScript files include code to dynamically generate the HTML structure so you can test them directly in an empty browser console. The pure logic questions (Q1, Q3, Q6, Q9) can be tested directly in Node.js.

q1_ecommerce_product_manager.js
JavaScript
"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Method to apply a discount percentage to the product's price
  applyDiscount(percent) {
    const discountAmount = (this.price * percent) / 100;
    this.price -= discountAmount;
    return this.price;
  }

  // Method to return formatted product details
  displayDetails() {
    return `[ID: ${this.id}] ${this.name} (${this.category}) - $${this.price.toFixed(2)}`;
  }
}

// Create multiple product objects
const products = [
  new Product(101, "Laptop", 1200, "Electronics"),
  new Product(102, "Smartphone", 800, "Electronics"),
  new Product(103, "Office Chair", 250, "Furniture"),
  new Product(104, "Gaming Monitor", 1050, "Electronics"),
  new Product(105, "Desk Lamp", 45, "Furniture")
];

// Apply a 10% discount to all products (optional step to test method)
products.forEach(product => product.applyDiscount(10));

// Filter products with price > 1000 and display them
console.log("--- Products over $1000 ---");
const premiumProducts = products.filter(product => product.price > 1000);

premiumProducts.forEach(product => {
  console.log(product.displayDetails());
});
q2_student_form_validator.js
JavaScript
"use strict";

// Dynamically creating the form for browser console testing
document.body.innerHTML = `
  <form id="studentForm" style="display:flex; flex-direction:column; max-width:300px; gap:10px; font-family:sans-serif;">
    <h3>Student Registration</h3>
    <input type="text" id="name" placeholder="Name" />
    <input type="email" id="email" placeholder="Email" />
    <input type="text" id="phone" placeholder="Phone (10 digits)" />
    <input type="password" id="password" placeholder="Password" />
    <button type="submit">Submit</button>
    <div id="errorMsg" style="color:red; font-size:12px;"></div>
  </form>
`;

const form = document.getElementById("studentForm");
const errorMsg = document.getElementById("errorMsg");

// RegExp Patterns
const patterns = {
  name: /^[a-zA-Z\s]+$/, // Only alphabets and spaces
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email format
  phone: /^\d{10}$/, // Exactly 10 digits
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/ // 1 Upper, 1 Num, 1 Special
};

// Validation function
function validateField(inputElement, regex, errorMessage) {
  if (regex.test(inputElement.value)) {
    inputElement.style.border = "2px solid green";
    return true;
  } else {
    inputElement.style.border = "2px solid red";
    errorMsg.innerHTML += errorMessage + "<br>";
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  errorMsg.innerHTML = ""; // Clear previous errors

  const isNameValid = validateField(document.getElementById("name"), patterns.name, "Name must contain only alphabets.");
  const isEmailValid = validateField(document.getElementById("email"), patterns.email, "Invalid email format.");
  const isPhoneValid = validateField(document.getElementById("phone"), patterns.phone, "Phone must be exactly 10 digits.");
  const isPasswordValid = validateField(document.getElementById("password"), patterns.password, "Password needs 1 uppercase, 1 number, 1 special character.");

  if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
    errorMsg.style.color = "green";
    errorMsg.innerHTML = "Form successfully submitted!";
  } else {
    errorMsg.style.color = "red";
  }
});
q3_library_management_system.js
JavaScript
"use strict";

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false; // Default state
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`Sorry, "${this.title}" is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`Success: "${this.title}" has been issued.`);
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`"${this.title}" was not issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`Success: "${this.title}" has been returned.`);
    return true;
  }
}

// Create an array of book objects
const library = [
  new Book("1984", "George Orwell", "ISBN001"),
  new Book("To Kill a Mockingbird", "Harper Lee", "ISBN002"),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "ISBN003")
];

// Display all available books
function displayAvailableBooks() {
  console.log("--- Available Books ---");
  const availableBooks = library.filter(book => !book.isIssued);
  availableBooks.forEach(book => console.log(`${book.title} by ${book.author} (ISBN: ${book.ISBN})`));
}

// Function to search and issue a book by ISBN
function issueBookByISBN(searchISBN) {
  const book = library.find(b => b.ISBN === searchISBN);
  if (book) {
    book.issueBook();
  } else {
    console.log(`Book with ISBN ${searchISBN} not found.`);
  }
}

// Test Operations
displayAvailableBooks();
issueBookByISBN("ISBN002"); // Issues Mockingbird
issueBookByISBN("ISBN002"); // Fails, already issued
console.log("\nAfter Issuing:");
displayAvailableBooks();
q4_custom_form_builder.js
JavaScript
"use strict";

// Container for browser testing
document.body.innerHTML = '<div id="form-container" style="font-family:sans-serif;"></div>';

class FormBuilder {
  constructor(containerId, fieldsArray) {
    this.container = document.getElementById(containerId);
    this.fields = fieldsArray;
  }

  // Generate form dynamically
  render() {
    let formHTML = '<form id="dynamicForm" style="display:flex; flex-direction:column; max-width:300px; gap:10px;">';
    
    this.fields.forEach(field => {
      formHTML += `
        <label for="${field.name}">${field.label}</label>
        <input type="${field.type}" id="${field.name}" name="${field.name}" />
      `;
    });
    
    formHTML += '<button type="submit" id="submitBtn">Submit</button></form>';
    formHTML += '<pre id="outputData" style="background:#eee; padding:10px;"></pre>';
    
    this.container.innerHTML = formHTML;
    
    // Attach listener for form submission
    document.getElementById("dynamicForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = this.getFormData();
      document.getElementById("outputData").innerText = JSON.stringify(data, null, 2);
    });
  }

  // Retrieve entered values as an object
  getFormData() {
    const formData = {};
    this.fields.forEach(field => {
      const inputElement = document.getElementById(field.name);
      formData[field.name] = inputElement.value;
    });
    return formData;
  }
}

// Test the builder
const myFields = [
  { type: 'text', label: 'Username', name: 'username' },
  { type: 'email', label: 'Email Address', name: 'email' },
  { type: 'date', label: 'Date of Birth', name: 'dob' }
];

const myForm = new FormBuilder("form-container", myFields);
myForm.render();
q5_movie_ticket_booking.js
JavaScript
"use strict";

document.body.innerHTML = `
  <form id="ticketForm" style="display:flex; flex-direction:column; max-width:300px; gap:10px; font-family:sans-serif;">
    <h3>Movie Ticket Booking</h3>
    <input type="text" id="t-name" placeholder="Name" />
    <input type="email" id="t-email" placeholder="Email" />
    <input type="number" id="t-seats" placeholder="Seats (1-10)" min="1" max="10"/>
    <button type="submit">Book Ticket</button>
    <div id="t-error" style="color:red; font-size:12px;"></div>
    <div id="t-ticket" style="color:green; border:1px solid green; padding:10px; display:none;"></div>
  </form>
`;

document.getElementById("ticketForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = document.getElementById("t-name").value;
  const email = document.getElementById("t-email").value;
  const seats = document.getElementById("t-seats").value;
  const errorDiv = document.getElementById("t-error");
  const ticketDiv = document.getElementById("t-ticket");
  
  errorDiv.innerHTML = "";
  ticketDiv.style.display = "none";
  
  // Validations
  const nameRegEx = /^[a-zA-Z\s]+$/;
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const seatsNum = parseInt(seats, 10);
  
  if (!nameRegEx.test(name)) {
    errorDiv.innerHTML = "Invalid name (alphabets only).";
    return;
  }
  if (!emailRegEx.test(email)) {
    errorDiv.innerHTML = "Invalid email format.";
    return;
  }
  if (isNaN(seatsNum) || seatsNum < 1 || seatsNum > 10) {
    errorDiv.innerHTML = "Seats must be a number between 1 and 10.";
    return;
  }
  
  // Validation successful, store in object
  const bookingInfo = { name, email, seats: seatsNum };
  
  // Display ticket details
  ticketDiv.style.display = "block";
  ticketDiv.innerHTML = `
    <strong>Booking Confirmed!</strong><br>
    Name: ${bookingInfo.name}<br>
    Email: ${bookingInfo.email}<br>
    Seats Reserved: ${bookingInfo.seats}
  `;
});
q6_employee_management_system.js
JavaScript
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
q7_login_form_validation.js
JavaScript
"use strict";

document.body.innerHTML = `
  <form id="loginForm" style="display:flex; flex-direction:column; max-width:300px; gap:10px; font-family:sans-serif;">
    <h3>Login</h3>
    <input type="text" id="l-username" placeholder="Username (Min 5 chars)" />
    <input type="password" id="l-password" placeholder="Password" />
    <button type="submit">Login</button>
    <div id="l-msg" style="font-weight:bold; font-size:14px;"></div>
  </form>
`;

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const user = document.getElementById("l-username").value;
  const pass = document.getElementById("l-password").value;
  const msgDiv = document.getElementById("l-msg");
  
  // Username: at least 5 characters
  const userRegEx = /^.{5,}$/;
  
  // Password: >=8 chars, 1 num, 1 upper, 1 lower, 1 special
  const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  msgDiv.style.color = "red"; // Default to error color
  
  if (!userRegEx.test(user)) {
    msgDiv.innerText = "Error: Username must be at least 5 characters.";
    return;
  }
  
  if (!passRegEx.test(pass)) {
    msgDiv.innerText = "Error: Password needs 8+ chars, upper, lower, number, and special character.";
    return;
  }
  
  // If both pass validation
  msgDiv.style.color = "green";
  msgDiv.innerText = "Login Successful!";
});
q8_dynamic_object_updater.js
JavaScript
"use strict";

// Initial Object
const user = { name: "John", email: "john@mail.com", age: 21 };

// Setup UI
document.body.innerHTML = `
  <div style="font-family:sans-serif; max-width:300px;">
    <h3>Update User Info</h3>
    <form id="updateForm" style="display:flex; flex-direction:column; gap:10px;">
      <input type="text" id="u-name" value="${user.name}" />
      <input type="email" id="u-email" value="${user.email}" />
      <input type="number" id="u-age" value="${user.age}" />
      <button type="submit">Update Object</button>
    </form>
    <hr>
    <h4>Live Object State:</h4>
    <pre id="objectState" style="background:#eee; padding:10px;"></pre>
  </div>
`;

const stateDisplay = document.getElementById("objectState");

// Function to update the DOM with current object state
function renderState() {
  stateDisplay.innerText = JSON.stringify(user, null, 2);
}

// Initial render
renderState();

document.getElementById("updateForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Update object properties in real time
  user.name = document.getElementById("u-name").value;
  user.email = document.getElementById("u-email").value;
  user.age = parseInt(document.getElementById("u-age").value, 10);
  
  // Render updated state below the form
  renderState();
});
q9_shopping_cart_total.js
JavaScript
"use strict";

class Cart {
  constructor() {
    this.items = [];
  }

  // Add an item to the cart
  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
    console.log(`Added: ${quantity}x ${name} @ $${price}`);
  }

  // Calculate base total
  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Apply coupon and calculate final total
  checkout(couponCode) {
    let total = this.getTotal();
    console.log(`\nBase Total: $${total}`);

    // Validate coupon: SAVE20 or DISC10 (captures the numeric discount value)
    const couponRegEx = /^(SAVE|DISC)(\d{2})$/;
    const match = couponCode.match(couponRegEx);

    if (match) {
      const discountPercent = parseInt(match[2], 10); // Extract '20' or '10'
      const discountAmount = (total * discountPercent) / 100;
      total -= discountAmount;
      console.log(`Coupon Applied! ${discountPercent}% off (-$${discountAmount})`);
    } else if (couponCode) {
      console.log(`Invalid coupon: ${couponCode}`);
    }

    console.log(`Final Total: $${total}`);
    return total;
  }
}

// Test the Shopping Cart
const myCart = new Cart();
myCart.addItem("Wireless Mouse", 25, 2);
myCart.addItem("Keyboard", 75, 1);
myCart.addItem("USB-C Hub", 40, 1);

// Test invalid coupon
myCart.checkout("HALFOFF50");

// Test valid coupon
myCart.checkout("SAVE20");