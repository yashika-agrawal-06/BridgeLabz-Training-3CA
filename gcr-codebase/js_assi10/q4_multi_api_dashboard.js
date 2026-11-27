const BASE_URL = "http://localhost:3004";

// Helper that returns null on failure so Promise.all resolves gracefully
async function safeFetch(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} on ${endpoint}`);
  }
  return response.json();
}

async function loadDashboard() {
  const warningBanner = document.getElementById("warning-banner");
  const endpoints = ["/users", "/orders", "/products"];
  let hasError = false;

  // Wrap each fetch so individual failures are caught while running concurrently via Promise.all
  const requests = endpoints.map((ep) =>
    safeFetch(ep).catch(() => {
      hasError = true;
      return null;
    })
  );

  // Execute all 3 requests simultaneously
  const [users, orders, products] = await Promise.all(requests);

  // Show warning banner if any endpoint failed
  if (hasError) {
    warningBanner.style.display = "block";
  }

  // Replace skeleton placeholders with actual counts or "N/A"
  document.getElementById("users-count").textContent = users ? users.length : "N/A";
  document.getElementById("orders-count").textContent = orders ? orders.length : "N/A";
  document.getElementById("products-count").textContent = products ? products.length : "N/A";
}

document.addEventListener("DOMContentLoaded", loadDashboard);
