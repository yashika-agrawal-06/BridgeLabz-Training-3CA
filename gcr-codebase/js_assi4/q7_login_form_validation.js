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
