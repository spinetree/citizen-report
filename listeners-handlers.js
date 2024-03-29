'use strict';

/**
 * Turn on event listeners-handlers
 */

// Citizen report form event listener-handler
var form = document.getElementById('report_form');
if (form) {
  form.addEventListener('submit', formData);
}

// City Hall table report status update event listener-handler
var statusSelects = document.getElementsByClassName('status-select');

for (var i = 0; i < statusSelects.length; i++) {
  if (statusSelects[i]) {
    statusSelects[i].addEventListener('change', statusSelectListenerHandler);
  }
}

/**
 * Define event listeners-handlers
 */

function statusSelectListenerHandler(e) {
  // Get id of row status
  var id = e.target['name'];

  // Get new status
  var newStatus = e.target.value;

  // Get all reports and check for id to update status in localStorage
  var allReports = JSON.parse(localStorage.getItem('allReports'));

  for (var i = 0; i < allReports.length; i++) {
    if (id === allReports[i].id) {
      allReports[i].problem.status = newStatus;
    }
  }

  // Save updated reports to localStorage
  var allReportsStr = JSON.stringify(allReports);
  localStorage.setItem('allReports', allReportsStr);
}

// Event listener for Form Submitted

function formData(event) {
  event.preventDefault();

  var reportData = {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    email: event.target.email.value,
    street: event.target.street.value,
    city: event.target.city.value,
    state: event.target.state.value,
    zipCode: event.target.zipcode.value,
    problem: {
      type: event.target.issue.value,
      text: event.target.comments
    }
  };

  var newReport = new Report(reportData);
  var localStorageReports = JSON.parse(localStorage.getItem('allReports'));
  localStorageReports.push(newReport);

  var formInString = JSON.stringify(localStorageReports);
  localStorage.setItem('allReports', formInString);

  var clearPage = document.getElementById('non-emergency');
  clearPage.innerHTML = '';
  var confirmation = document.getElementById('report_form');
  confirmation.innerHTML ='<span class="confirm">Thank you. Your form has been submitted.</span>';
}
