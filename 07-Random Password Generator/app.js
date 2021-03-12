// ref to paragraph and btn elements
const password = document.getElementById('password');
const btn = document.getElementById('btn');

// taking a string that contains alphabets and numbers
const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

// an empty string to append the random character


// on button click generate the random password
btn.addEventListener('click', () => {

  let randomPassword = '';
  // looping through the string 15 times to generate 15 char password
  for (let i = 0; i < 15; i++) {
    // generate a random index
    const idx = Math.floor(Math.random() * str.length);

    // obtain the chat at index and append it to randomPassword
    randomPassword += str.charAt(idx);
  }
  
  password.value = randomPassword;
})