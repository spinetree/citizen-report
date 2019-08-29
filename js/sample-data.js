'use strict';

/**
 * Call global functions
 */

initSampleData();

/**
 * Initialize sample data in localStorage
 */
function initSampleData() {
  // Make sample data
  var sample1 = {
    firstName: 'Cassie',
    lastName: 'Smith',
    email: 'cassie.smith2@gmail.com',
    street: '2901 3rd Ave',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98121',
    problem: {
      type: 'road-conditions',
      text: 'text'
    }
  };

  var sample2 = {
    firstName: 'Jeff',
    lastName: 'Anderson',
    email: 'janderson08@hotmail.com',
    street: '2100 Western Ave',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98101',
    problem: {
      type: 'power',
      text: 'text'
    }
  };

  var sample3 = {
    firstName: 'Leah',
    lastName: 'Sternoff',
    email: 'sternoffLeah178@yahoo.com',
    street: '511 Summit Ave E',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98102',
    problem: {
      type: 'traffic',
      text: 'text'
    }
  };

  var allReports = JSON.parse(localStorage.getItem('allReports'));

  if (!allReports || allReports.length === 0) {
    allReports = [new Report(sample1), new Report(sample2), new Report(sample3)];
  }

  // Load sample data into local storage
  var allReportsString = JSON.stringify(allReports);
  localStorage.setItem('allReports', allReportsString);
}
