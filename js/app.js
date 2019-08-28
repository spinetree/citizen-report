'use strict';

/**
 * Global and helper data and functions
 */

var globalIds = [];
var makeGlobalId = function() {
  // Make new distinct id
  do {
    var distinct = true;
    var newId = '_' + Math.random().toString(36).substr(2, 9);

    for (var i = 0; i < globalIds.length; i++) {
      if (newId === globalIds[i]) {
        distinct = false;
      }
    }
  } while (!distinct);

  globalIds.push(newId);

  return newId;
};

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
  this.zipCode = report.zipCode;
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
  this.id = makeGlobalId();
}
