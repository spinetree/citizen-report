/**
 * Report constructor
 */

'use strict';

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
    type: report.type,
    text: report.text,
    // Values can be one of [1 ... 5] with default 5
    priority: 5,
    // Values can be one of [unread, read, in progresss, fixed] with default unread
    status: 'unread'
  };
  this.date = new Date();
  this.id = (new Date()).getTime();
}

var formBackToObject = localStorage.getItem('saveForm');
var allForms = JSON.parse(formBackToObject);

console.log(allForms);
