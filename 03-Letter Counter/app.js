let text = document.getElementById('textString');
let count = document.getElementById('count');

function countCharacters() {
  // getting input field value
  let str = text.value;

  // Finding length of the input field value
  let len = str.length;

  // Updating the count by using textContent
  count.textContent = len;
}