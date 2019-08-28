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

var formInformation = [];

function formData(event) {
  event.preventDefault();

  var newReport = {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    email: event.target.email.value,
    street: event.target.street.value,
    city: event.target.city.value,
    state: event.target.state.value,
    zipCode: event.target.zipcode.value,
    problem: {
      type: event.target.type,
      text: event.target.comments,
    },
  };

  formInformation.push(newReport);
  alert('Your report has been submitted');
  new Report(newReport);

  var formInString = JSON.stringify(formInformation);
  localStorage.setItem('saveForm', formInString);

  form.reset();
  document.getElementsByTagName('textarea')[0].value = '';
  console.log(formInformation);
}
