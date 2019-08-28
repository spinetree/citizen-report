/**
 * Report constructor
 */

'use strict';

function Report(report) {
  this.firstName = report.firstName;
  this.lastName = report.lastName;
  this.email = report.email;
  this.address = report.address;
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
}

var sample1 = {
  firstName: 'Cassie',
  lastName: 'Smith',
  email: 'cassie.smith2@gmail.com',
  address: '2901 3rd Ave, Seattle, WA 98121',
  problem: {
    type: 'road-conditions',
    text: 'text',
  },
};

var sample2 = {
  firstName: 'Jeff',
  lastName: 'Anderson',
  email: 'janderson08@hotmail.com',
  address: '2100 Western Ave, Seattle, 98101',
  problem: {
    type: 'power',
    text: 'text',
  },
};

var sample3 = {
  firstName: 'Leah',
  lastName: 'Sternoff',
  email: 'sternoffLeah178@yahoo.com',
  address: '511 Summit Ave E, Seattle, 98102',
  problem: {
    type: 'traffic',
    text: 'text',
  },
};

var sampleData =[sample1, sample2, sample3];

new Report (sample1);
new Report (sample2);
new Report (sample3);

