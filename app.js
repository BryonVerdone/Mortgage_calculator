// select inputs

// calculate button
const btn = document.getElementById('btn');

//Display calculation
const display = document.getElementById('display');

//btn click

btn.addEventListener('click', function () {
  const loanAmount = Number(document.getElementById('loan-amount').value);

  const rate = Number(document.getElementById('rate').value);

  const loanLength = Number(document.getElementById('loan-length').value);
  let total = loanAmount + rate + loanLength;
  console.log(total);
});
