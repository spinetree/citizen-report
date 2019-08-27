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
}

var sampleData = {
  firstName: 'Karina',
  lastName: 'Chen',
  email: 'karina6188@gmail.com',
  address: '2901 3rd Ave, Seattle, WA 98121',
  problem: {
    type: 'road-conditions',
    text: 'text',
    priority: 4,
    status: 'unread',
  },
  date: new Date(),
};

new Report (sampleData);

// function formData(event) {
//   event.preventDefault();
//   var firstName = event.target.first-name.value;
//   var lastName = event.target.last-name.value;
//   var email = event.target.email.value;
//   var aveSales = event.target.aveSales.value;

//   new Store(store, minCustomer, maxCustomer, aveSales);
//   reprint();
//   form.reset();
// }
