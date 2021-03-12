const password = document.getElementById('password');
const passwordLength = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const btn = document.getElementById('btn');


function generatePassword(len) {
  let str = "";
  let randomPassword = "";
  
  if(uppercase.checked === true) {
    str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } 
  if(lowercase.checked === true) {
    str += 'abcdefghijklmnopqrstuvwxyz';
  }
  if(numbers.checked === true) {
    str += '0123456789';
  }
  if (symbols.checked === true) {
    str += `!@]#$%^&*)}:[{<>.(,;?/+-*`
  }
  
  for(let i=0; i<len; i++) {
    const idx = Math.floor(Math.random() * str.length);
    randomPassword += str.charAt(idx);
  }

  return randomPassword;
  
}

btn.addEventListener('click', () => {

  const randomPassword = generatePassword(passwordLength.value);
  
  password.value = randomPassword;
})