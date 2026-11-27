const API_URL = "http://localhost:3006/users";
const form = document.getElementById("register-form");
const statusMsg = document.getElementById("status-msg");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  statusMsg.textContent = "Checking availability...";
  statusMsg.style.color = "#333";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();

  try {
    // 1. Check if email already exists using GET /users?email=...
    const checkResponse = await axios.get(API_URL, {
      params: { email: email }
    });

    if (checkResponse.data.length > 0) {
      // Email already exists
      statusMsg.textContent = "Email already registered.";
      statusMsg.style.color = "#dc2626";
      return;
    }

    // 2. Otherwise submit new user via Axios POST
    await axios.post(API_URL, { name, email });

    statusMsg.textContent = `Registration successful! Welcome, ${name}.`;
    statusMsg.style.color = "#16a34a";
    form.reset();
  } catch (error) {
    statusMsg.textContent = "Server error. Ensure JSON Server is running on port 3006.";
    statusMsg.style.color = "#dc2626";
  }
});
