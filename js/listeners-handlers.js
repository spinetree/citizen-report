'use strict';

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
    }
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

var form = document.getElementById('report_form');
form.addEventListener('submit', formData);
