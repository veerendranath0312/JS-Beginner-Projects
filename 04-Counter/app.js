let counter = 0;

let value = document.getElementById('value');

// Change the color of the value based on zero, +ve and -ve
function changeColor(counter) {
  if (counter > 0) {
    value.style.color = 'green';
  } else if (counter < 0) {
    value.style.color = 'red';
  } else {
    value.style.color = '#FF9900';
  }
}

// Function for counter increase
function increment() {
  counter = counter + 1;
  changeColor(counter);
  value.textContent = counter;
}

// function for counter decrease
function decrement() {
  counter = counter - 1;
  changeColor(counter);
  value.textContent = counter;
}