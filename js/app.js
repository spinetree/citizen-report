'use strict';

/**
 * Report constructor
 */

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
  this.id = (new Date()).getTime();
}

// Initialize sample data for reports table in local storage
fuction initSampleData() {
  // Make sample data
  var sample1 = {
    firstName: 'Cassie',
    lastName: 'Smith',
    email: 'cassie.smith2@gmail.com',
    address: '2901 3rd Ave, Seattle, WA 98121',
    problem: {
      type: 'road-conditions',
      text: 'text'
    }
  };
  
  var sample2 = {
    firstName: 'Jeff',
    lastName: 'Anderson',
    email: 'janderson08@hotmail.com',
    address: '2100 Western Ave, Seattle, 98101',
    problem: {
      type: 'power',
      text: 'text'
    }
  };
  
  var sample3 = {
    firstName: 'Leah',
    lastName: 'Sternoff',
    email: 'sternoffLeah178@yahoo.com',
    address: '511 Summit Ave E, Seattle, 98102',
    problem: {
      type: 'traffic',
      text: 'text'
    }
  };
  
  var sampleData = [new Report(sample1), new Report(sample2), new Report(sample3)];

  // Load sample data into local storage
  var sampleDataString = JSON.stringify(sampleData);
  localStorage.setItem('sampleData', sampleDataString);
}

// Make reports table from sample data in local storage
function getSampleData() {
  // Get data from local storage
  var sampleData = JSON.parse(localStorage.getItem('sampleData'));

  // Get HTML tbody tag and add HTML tr tags
  var tbody = document.getElementById('tableresults');

  for (var i = 0; i < sampleData.length; i++) {
    // Make table row
    var tr = document.createElement('tr');

    // Make table cell for first name of reporter
    var tdFirstName = document.createElement('td');
    tdFirstName.textContent = sampleData[i].firstName;
    tr.appendChild(tdFristName);

    // Make table cell for last name of reporter
    var tdLastName = document.createElement('td');
    tdLastName.textContent = sampleData[i].lastName;
    tr.appendChild(tdLastName);

    // Make table cell for email of reporter
    var tdEmail = document.createElement('td');
    tdEmail.textContent = sampleData[i].email;
    tr.appendChild(tdEmail);

    // Make table cell for address of problem
    var tdAddress = document.createElement('td');
    tdAddress.textContent = sampleData[i].address;
    tr.appendChild(tdAddress);

    // Make table cell for type of problem
    var tdType = document.createElement('td');
    tdType.textContent = sampleData[i].type;
    tr.appendChild(tdType);

    // Add table row to tbody
    tbody.appendChild(tr);
  }
}
