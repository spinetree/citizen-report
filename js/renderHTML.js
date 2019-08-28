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

    // Make table cell for address of problem
    var tdAddress = document.createElement('td');
    tdAddress.textContent = `${allReports[i].street}, ${allReports[i].city}, ${allReports[i].state} ${allReports[i].zipCode}`;
    tr.appendChild(tdAddress);

    // Make table cell for first name of reporter
    var tdFirstName = document.createElement('td');
    tdFirstName.textContent = `${allReports[i].firstName} ${allReports[i].lastName}`;
    tr.appendChild(tdFirstName);

    // Make table cell for time of problem reported
    var tdDate = document.createElement('td');
    tdDate.textContent = allReports[i].date;
    tr.appendChild(tdDate);

    // Make table cell for email of reporter
    var tdEmail = document.createElement('td');
    tdEmail.textContent = allReports[i].email;
    tr.appendChild(tdEmail);

    // Make table cell for status
    // which is dynamic to the member of city hall reading the table
    var tdStatus = document.createElement('td');
    var tdStr = '<td class="record-status">' +
      `<select name="${allReports[i].id}" class="status-select">`;

    switch (allReports[i].problem.status) {
    case 'unread':
      tdStr += '<option value="unread" selected="selected">Unread</option>' +
        '<option value="read">Read</option>' +
        '<option value="in-progress">In Progress</option>' +
        '<option value="fixed">Fixed</option>';
      break;
    case 'read':
      tdStr += '<option value="unread">Unread</option>' +
        '<option value="read" selected="selected">Read</option>' +
        '<option value="in-progress">In Progress</option>' +
        '<option value="fixed">Fixed</option>';
      break;
    case 'in-progress':
      tdStr += '<option value="unread">Unread</option>' +
        '<option value="read">Read</option>' +
        '<option value="in-progress" selected="selected">In Progress</option>' +
        '<option value="fixed">Fixed</option>';
      break;
    case 'fixed':
      tdStr += '<option value="unread">Unread</option>' +
        '<option value="read">Read</option>' +
        '<option value="in-progress">In Progress</option>' +
        '<option value="fixed" selected="selected">Fixed</option>';
      break;
    default:
      break;
    }

    tdStr += '</select>' +
      '</td>';
    tdStatus.innerHTML = tdStr;
    tr.appendChild(tdStatus);

    // Add table row to tbody
    tbody.appendChild(tr);
  }
}
