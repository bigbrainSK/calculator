// create three variables for each part of a calculator expression, first number, the operator,
// and the second number. 
let firstNum = 0;       
let secondNum = 0;
let operand = '';
let displayVal =  '';
document.getElementById('display').innerText = displayVal;


//create the functions that populate the display when a number button is clicked using displayVal 
//need to create click event listeners buddy

document.getElementById('clear').addEventListener('click', () => {
          displayVal = '';
          document.getElementById('display').innerText = displayVal;

});

document.getElementById('1').addEventListener('click', () => {
        
        displayVal += '1';
        document.getElementById('display').innerText = displayVal;
});

document.getElementById('2').addEventListener('click', () => {
      displayVal += '2';
      document.getElementById('display').innerText = displayVal;
});

document.getElementById('3').addEventListener('click', () => {
      displayVal += '3';
      document.getElementById('display').innerText = displayVal;
});

document.getElementById('4').addEventListener('click', () => {
      displayVal += '4';
      document.getElementById('display').innerText = displayVal;
});

document.getElementById('5').addEventListener('click', () => {
      displayVal += '5';
      document.getElementById('display').innerText = displayVal;
});

document.getElementById('6').addEventListener('click', () => {
      displayVal += '6';
      document.getElementById('display').innerText = displayVal;
});

document.getElementById('7').addEventListener('click', () => {
      displayVal += '7';
      ocument.getElementById('display').innerText = displayVal;
});

document.getElementById('8').addEventListener('click', () => {
      displayVal += '8';
      document.getElementById('display').innerText = displayVal;
});

document.getElementById('9').addEventListener('click', () => {
      displayVal += '9';
      document.getElementById('display').innerText = displayVal;
});



const add = function(firstNum, secondNum) {
    return firstNum + secondNum;
  };
  
const subtract = function(firstNum, secondNum) {
    return firstNum - secondNum;
  };
  
const multiply = function(firstNum, secondNum) {
      return firstNum * secondNum;
  };
  
const divide = function(firstNum, secondNum) {
      return firstNum / secondNum;
  };



  // 'Create a new function operate that takes an operator 
//  and 2 numbers and then calls one of the above functions on the numbers'
// const operate = function(operand, firstNum, secondNum) {
//     if (operand = '+') return function add(firstNum, secondNum) ;
//     if (operand = '-') return function subtract(firstNum, secondNum);
//     if (operand = '*') return function multiply(firstNum, secondNum);
//     if (operand = '/') return function divide(firstNum, secondNum);

// }