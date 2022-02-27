// select inputs

// calculate button
const btn = document.getElementById('btn');

//Display calculation
const display = document.getElementById('display');

//btn click

btn.addEventListener('click', calc )
  // const loanAmount = Number(document.getElementById('loan-amount').value);
  // const rate = Number(document.getElementById('rate').value);
  // let loanLength = Number(document.getElementById('loan-length').value);
  // const interest= rate/12
  // const term= loanLength*12
  // const total= loanAmount*(interest*(1+interest)^term/ ((1+interest)^term)-1))
  // console.log(total);
//Equation

// monthRate= rate /12  amountOfPayments loanlength*12

function calc(){
  const loanAmount = Number(document.getElementById('loan-amount').value);
  const rate = Number(document.getElementById('rate').value);
  const loanLength = Number(document.getElementById('loan-length').value);
  const interest= (parseFloat(rate) * 0.01)/12
  const term= parseInt(loanLength,10)*12


  const top= interest * Math.pow(1+interest,term)
  const bottom= (Math.pow(1+interest,term)-1);
  const total= loanAmount* (top/bottom)
  display.textContent= `Your monthly payment is ${total.toFixed(2)}`
}