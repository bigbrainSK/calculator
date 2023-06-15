// create three variables for each part of a calculator expression, first number, the operator,
// and the second number. 
let firstNum = 0;       
let secondNum = 0;
let operand = '';
let displayVal =  '';
document.getElementById('display').innerText = displayVal;


//create the functions that populate the display when a number button is clicked using displayVal 
//need to create click event listeners buddy
// I need to make it so that when a number is clicked, it populates firstNum, and if 
// firstNum is already declared, a number populates secondNum
document.getElementById('clear').addEventListener('click', () => {
          firstNum = 0;
          secondNum = 0;
          operand = '';
          displayVal = '';
          document.getElementById('display').innerText = displayVal;

});

// I think i can make an array to store all my numbers but not too sure how to do that

document.getElementById('1').addEventListener('click', () => {
        if (operand === '') firstNum = 1;
        if (operand != '') secondNum = 1;
        displayVal += firstNum;
        document.getElementById('display').innerText = displayVal;
});

document.getElementById('2').addEventListener('click', () => {
        if (operand === '') firstNum = 2;
        if (operand != '') secondNum = 2;
        displayVal += firstNum;
        document.getElementById('display').innerText = displayVal;
});

document.getElementById('3').addEventListener('click', () => {
        if (operand === '') firstNum = 3;
        if (operand != '') secondNum = 3;
        displayVal += firstNum;
        document.getElementById('display').innerText = displayVal;
});

document.getElementById('4').addEventListener('click', () => {
        if (operand === '') firstNum = 4;
        if (operand != '') secondNum = 4;
        displayVal += firstNum;
        document.getElementById('display').innerText = displayVal;
});

document.getElementById('5').addEventListener('click', () => {
      if (operand === '') firstNum = 5;
      if (operand != '') secondNum = 5;
      displayVal += firstNum;
      document.getElementById('display').innerText = displayVal;
});

document.getElementById('6').addEventListener('click', () => {
      if (operand === '') firstNum = 6;
      if (operand != '') secondNum = 6;
      displayVal += firstNum;
      document.getElementById('display').innerText = displayVal;
});

document.getElementById('7').addEventListener('click', () => {
      if (operand === '') firstNum = 7;
      if (operand != '') secondNum = 7;
      displayVal += firstNum;
      document.getElementById('display').innerText = displayVal;
});

document.getElementById('8').addEventListener('click', () => {
      if (operand === '') firstNum = 8;
      if (operand != '') secondNum = 8;
      displayVal += firstNum;
      document.getElementById('display').innerText = displayVal;
});

document.getElementById('9').addEventListener('click', () => {
      if (operand === '') firstNum = 9;
      if (operand != '') secondNum = 9;
      displayVal += firstNum;
      document.getElementById('display').innerText = displayVal;
});


//step 6, need to store firstNum when operator is clicked, then also save which operator
// has been chosen and then operate() on them when user presses '=' key 
document.getElementById('+').addEventListener('click', () => {

      operand = '+';
      displayVal += operand;
      document.getElementById('display').innerText = displayVal;

});

document.getElementById('-').addEventListener('click', () => {
      operand = '-';
      displayVal += operand;
      document.getElementById('display').innerText = displayVal;

});

document.getElementById('*').addEventListener('click', () => {
      operand = '*';
      displayVal += operand;
      document.getElementById('display').innerText = displayVal;

});

document.getElementById('/').addEventListener('click', () => {
      operand = '/';
      displayVal += operand;
      document.getElementById('display').innerText = displayVal;

});

document.getElementById('=').addEventListener('click', () => {
      displayVal =  operate(operand, firstNum, secondNum);

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
 //and 2 numbers and then calls one of the above functions on the numbers'
const operate = function(operand, firstNum, secondNum) {
    if (operand === '+') {
      return add(firstNum, secondNum)
    }; 

    if (operand === '-') {
      return subtract(firstNum, secondNum);
    };

    if (operand === '*') {
    return multiply(firstNum, secondNum)
    };

    if (operand === '/') {
    return  divide(firstNum, secondNum);
    };
}