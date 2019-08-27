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
  }
};

var sampleData =[sample1, sample2, sample3];

new Report (sample1);
new Report (sample2);
new Report (sample3);

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
