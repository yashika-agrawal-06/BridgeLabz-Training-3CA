const API_URL = "http://localhost:3005/timetable";
const daySelect = document.getElementById("day-select");
const output = document.getElementById("timetable-output");

async function fetchTimetable(day) {
  try {
    const response = await fetch(`${API_URL}?day=${encodeURIComponent(day)}`);
    const classes = await response.json();

    output.innerHTML = "";

    // Show message when no classes are scheduled (e.g., Saturday)
    if (classes.length === 0) {
      output.innerHTML = `<p class="empty-msg">No classes today.</p>`;
      return;
    }

    // Dynamically render Subject name, Faculty, and Time
    classes.forEach((cls) => {
      const card = document.createElement("article");
      card.className = "class-card";
      card.innerHTML = `
        <h3>${cls.subject}</h3>
        <p><strong>Faculty:</strong> ${cls.faculty}</p>
        <p><strong>Time:</strong> ${cls.time}</p>
      `;
      output.appendChild(card);
    });
  } catch (err) {
    output.innerHTML = `<p style="color:red;">Unable to load timetable. Check JSON Server on port 3005.</p>`;
  }
}

// Fetch Monday by default and re-fetch whenever dropdown changes
daySelect.addEventListener("change", (e) => fetchTimetable(e.target.value));
document.addEventListener("DOMContentLoaded", () => fetchTimetable(daySelect.value));
