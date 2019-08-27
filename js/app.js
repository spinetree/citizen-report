/**
 * Render function invocations
 */

(function() {
  var text = 'Hello world';

  renderText(text);
})();

/**
 * Helper functions invocated
 */

(function() {
  var text = 'Hello world';
  var reverse = reverseText(text);

  console.log(reverse);
})();

/**
 * Render function declarations
 */

/**
 * Render the HTML5 h1 header tag with text to the browser
 *
 * @param {string} Text to be rendered to the browser
 */
function renderText(text) {
  // Create new child element
  var htmlHeader = document.createElement('h1');
  htmlHeader.textContent = text;

  // Get new parent element
  var htmlMain = document.getElementsByTagName('main')[0];
  htmlMain.appendChild(htmlHeader);
}

/**
 * Helper function declarations
 */

/**
 * Reverse a string
 *
 * @param {string} Text string to be reversed
 *
 * @return {string} Reverse of string
 */
function reverseText(text) {
  var reverse = text.split('').reverse().join('');

  return reverse;
}



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


var types = ['Select One ---', 'Road Conditions', 'Traffic', 'Power', 'Water', 'Park'];

var selectOption = document.getElementById('issue');
for (var i = 0; i < types.length; i++) {
  var option = document.createElement('option');
  option.textContent = types[i];
  option.value = types[i];
  selectOption.appendChild(option);
}
