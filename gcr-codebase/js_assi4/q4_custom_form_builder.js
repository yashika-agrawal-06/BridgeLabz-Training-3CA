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
