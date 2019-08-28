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
