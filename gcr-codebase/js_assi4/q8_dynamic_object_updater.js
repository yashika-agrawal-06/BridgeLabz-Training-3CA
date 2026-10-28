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
