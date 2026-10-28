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
