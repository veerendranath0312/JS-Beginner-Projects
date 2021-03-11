// ref to all the text fields and select group
const billAmount = document.querySelector('#bill-amount');
const tipPercent = document.querySelector('#tip-percent');
const tipAmount = document.querySelector('#tip-amount');
const totalAmount = document.querySelector('#total-amount');

tipPercent.addEventListener('input', () => {
  // getting values and converting to numbers
  const amount = Number(billAmount.value);
  const percent = Number(tipPercent.value);

  // calculate tip amount
  const tip = amount * (percent / 100);
  tipAmount.value = tip.toFixed(2);

  // calculate total amount
  const total = amount + tip;
  totalAmount.value = total.toFixed(2);
})