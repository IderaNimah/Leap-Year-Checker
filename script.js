// Get the form element from the DOM
const form = document.querySelector('form');

// Get the input element from the DOM
const yearInput = document.querySelector('#year-input');

// Get the result element from the DOM
const result = document.querySelector('#result');

// Add an event listener to the form for when it is submitted
form.addEventListener('submit', function(event) {
// Prevent the default form submission behavior
  event.preventDefault();

// Get the value of the input element and convert it to a number
  const year = Number(yearInput.value);

// Check if the entered year is a leap year
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
// Update the result element with a message indicating that the year is a leap year
    result.textContent =  `${year} is a leap year`;
  } else {
// Update the result element with a message indicating that the year is not a leap year
    result.textContent = `${year} is not a leap year`;
  }
});