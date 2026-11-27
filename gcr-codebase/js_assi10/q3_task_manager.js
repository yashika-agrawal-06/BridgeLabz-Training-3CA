$(document).ready(function () {
  const API_URL = "http://localhost:3003/tasks";

  // Load tasks using jQuery AJAX with query parameters
  function loadTasks(filterValue = "all") {
    const queryParams = {};

    if (filterValue === "completed") {
      queryParams.completed = true;
    } else if (["Low", "Medium", "High"].includes(filterValue)) {
      queryParams.priority = filterValue;
    }

    $.ajax({
      url: API_URL,
      method: "GET",
      data: queryParams,
      success: function (tasks) {
        const $list = $("#task-list");
        $list.empty();

        if (tasks.length === 0) {
          $list.append("<li>No tasks match this filter.</li>");
          return;
        }

        tasks.forEach(function (task) {
          const checkedAttr = task.completed ? "checked" : "";
          const doneClass = task.completed ? "done" : "";

          $list.append(`
            <li>
              <label class="${doneClass}">
                <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${checkedAttr}>
                ${task.title}
              </label>
              <span class="tag">${task.priority}</span>
            </li>
          `);
        });
      },
      error: function () {
        alert("Failed to fetch tasks from port 3003.");
      }
    });
  }

  // Initial load
  loadTasks();

  // Reload list when filter dropdown changes
  $("#filter-select").on("change", function () {
    loadTasks($(this).val());
  });

  // Toggle 'completed' field via PATCH request when checkbox is clicked
  $("#task-list").on("change", ".task-checkbox", function () {
    const taskId = $(this).data("id");
    const isCompleted = $(this).is(":checked");
    const $label = $(this).closest("label");

    $.ajax({
      url: `${API_URL}/${taskId}`,
      method: "PATCH",
      contentType: "application/json",
      data: JSON.stringify({ completed: isCompleted }),
      success: function () {
        $label.toggleClass("done", isCompleted);
        // Reload if currently viewing only completed tasks
        if ($("#filter-select").val() === "completed") {
          loadTasks("completed");
        }
      },
      error: function () {
        alert("Could not update task status.");
      }
    });
  });
});
