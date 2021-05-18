const redRange = document.getElementById('red-range');
const greenRange = document.getElementById('green-range');
const blueRange = document.getElementById('blue-range');

const bodyEl = document.querySelector('body');
const rgbValue = document.getElementById('rgb-value');

let redValue = 0;
let greenValue = 0;
let blueValue = 0;

// changing the color based on the input values
const changeColor = function (redValue, greenValue, blueValue) {
  rgbValue.textContent = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  bodyEl.style.background = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

// Reading the red color value on input
redRange.addEventListener('input', function () {
  redValue = redRange.value;
  changeColor(redValue, greenValue, blueValue);
})


// reading the green color value on input
greenRange.addEventListener('input', function () {
  greenValue = greenRange.value;
  changeColor(redValue, greenValue, blueValue);
})


// reading the blue color value on input
blueRange.addEventListener('input', function () {
  blueValue = blueRange.value;
  changeColor(redValue, greenValue, blueValue);
})

