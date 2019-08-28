'use strict';

/**
 * Render HTML
 */

renderTable();

/**
 * Dynamically make HTML tbody rows and cells
 */
function renderTable() {
  // Get data from local storage
  var allReports = JSON.parse(localStorage.getItem('allReports'));

  // Get HTML tbody tag and add HTML tr tags
  var tbody = document.getElementById('tableresults');

  for (var i = 0; i < allReports.length; i++) {
    // Make table row
    var tr = document.createElement('tr');

    // Make table cell for type of problem
    var tdType = document.createElement('td');
    tdType.textContent = allReports[i].problem.type;
    tr.appendChild(tdType);

    // Make table cell for first name of reporter
    var tdFirstName = document.createElement('td');
    tdFirstName.textContent = allReports[i].firstName;
    tr.appendChild(tdFirstName);

    // Make table cell for last name of reporter
    var tdLastName = document.createElement('td');
    tdLastName.textContent = allReports[i].lastName;
    tr.appendChild(tdLastName);

    // Make table cell for time of problem reported
    var tdDate = document.createElement('td');
    tdDate.textContent = allReports[i].date;
    tr.appendChild(tdDate);

    // Make table cell for address of problem
    var tdAddress = document.createElement('td');
    tdAddress.textContent = allReports[i].address;
    tr.appendChild(tdAddress);

    // Make table cell for email of reporter
    var tdEmail = document.createElement('td');
    tdEmail.textContent = allReports[i].email;
    tr.appendChild(tdEmail);

    // Add table row to tbody
    tbody.appendChild(tr);
  }
}
