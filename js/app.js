'use strict';

/**
 * Report constructor
 */

function Report(report) {
  this.firstName = report.firstName;
  this.lastName = report.lastName;
  this.email = report.email;
  this.street = report.street;
  this.city = report.city;
  this.state = report.state;
  this.zipCode = report.zipcode;
  this.problem = {
    // Values can be one of [power, water, road condition, traffic, park, other]
    type: report.problem.type,
    text: report.problem.text,
    // Values can be one of [1 ... 5] with default 5
    // priority: 5,
    // Values can be one of [unread, read, in progresss, fixed] with default unread
    status: 'unread'
  };
  this.date = (new Date()).toTimeString();
  this.id = (new Date()).getTime();
}

var formBackToObject = localStorage.getItem('saveForm');
var allForms = JSON.parse(formBackToObject);

console.log(allForms);

/**
 * Render table function
 */

/**
 * Render the reports table
 *
 * @param {Array} filteredReports which is an array of all Reports which passed the filter
 * @param {Object} filterStates which is the states of the reports table filters
 *
 * @return {Object} which is the filteredReports and filterStates together
 */
function renderTable(filteredReports, filterStates) {
  var allData = {
    filteredReports: filteredReports,
    filterStates: filterStates
  };

  console.log(allData);
}
