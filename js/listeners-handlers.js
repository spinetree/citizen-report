<<<<<<< HEAD
'use strict';

// Event listener for Form Submitted

function formData(event) {
  event.preventDefault();

  var newReport = {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    email: event.target.email.value,
    address: event.target.location.value,
    problem: {
      type: event.target.type,
      text: event.target.comments,
    },
  };

  console.log(newReport);
  alert('Your report has been submitted');
  new Report(newReport);

  form.reset();
  document.getElementsByTagName('textarea')[0].value = '';
}

var form = document.getElementById('report_form');
form.addEventListener('submit', formData);


// Event listener for Sort By
// document.getElementById('sort-by').addEventListener('change', sortByType);
=======
'use strict';

/**
 * Turn on event listeners
 */

enableEventListeners();

function enableEventListeners() {
  var setPriorityForm = document.getElementById('set-priority');

  setPriorityForm.addEventListener('submit', setPriorityEventListener);
}

/**
 * Event listeners
 */

function setPriorityEventListener(e) {
  e.preventDefault();

  setPriorityEventHander(e);
}

/**
 * Event Handlers
 */

function setPriorityEventHander(e) {}
>>>>>>> 7cb768cb48f3be97e7fce0df7c5e005b695ad5f1
