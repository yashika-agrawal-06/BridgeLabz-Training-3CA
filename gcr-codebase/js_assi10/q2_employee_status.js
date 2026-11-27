const API_URL = "http://localhost:3002/employees";
const tbody = document.getElementById("employee-tbody");
const errorBox = document.getElementById("error-box");

// Fetch all employees using XMLHttpRequest
function loadEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const employees = JSON.parse(xhr.responseText);
      renderTable(employees);
    } else {
      errorBox.textContent = "Failed to load employees from server.";
    }
  };

  xhr.onerror = function () {
    errorBox.textContent = "Network error: Unable to reach JSON Server on port 3002.";
  };

  xhr.send();
}

function renderTable(employees) {
  tbody.innerHTML = "";
  employees.forEach((emp) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td><span id="status-${emp.id}" class="badge ${emp.status}">${emp.status}</span></td>
      <td>
        <button id="btn-${emp.id}" onclick="toggleStatus(${emp.id}, '${emp.status}')">
          Set ${emp.status === "active" ? "Inactive" : "Active"}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Toggle employee status optimistically and send PATCH request via XHR
function toggleStatus(id, currentStatus) {
  errorBox.textContent = "";
  const newStatus = currentStatus === "active" ? "inactive" : "active";

  const badge = document.getElementById(`status-${id}`);
  const btn = document.getElementById(`btn-${id}`);

  // 1. Optimistically update UI immediately
  applyStatusToUI(badge, btn, id, newStatus);

  // 2. Send PATCH request using XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", `${API_URL}/${id}`, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status < 200 || xhr.status >= 300) {
      // Revert UI if server returns an error status
      applyStatusToUI(badge, btn, id, currentStatus);
      errorBox.textContent = `Error updating Employee #${id}. Reverted to ${currentStatus}.`;
    }
  };

  xhr.onerror = function () {
    // Revert UI if network fails
    applyStatusToUI(badge, btn, id, currentStatus);
    errorBox.textContent = `Network failure while updating Employee #${id}. Changes reverted.`;
  };

  xhr.send(JSON.stringify({ status: newStatus }));
}

function applyStatusToUI(badge, btn, id, status) {
  badge.textContent = status;
  badge.className = `badge ${status}`;
  btn.textContent = `Set ${status === "active" ? "Inactive" : "Active"}`;
  btn.setAttribute("onclick", `toggleStatus(${id}, '${status}')`);
}

document.addEventListener("DOMContentLoaded", loadEmployees);
