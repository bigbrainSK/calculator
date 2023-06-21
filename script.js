// create three variables for each part of a calculator expression, first number, the operator,
// and the second number. 
let firstNum = '';       
let secondNum = '';
let operand = '';
let displayVal =  '';
let firstParsed = '';
let secondParsed = '';
let solution = '';
document.getElementById('display').innerText = displayVal;


//create the functions that populate the display when a number button is clicked using displayVal 
//need to create click event listeners buddy
// I need to make it so that when a number is clicked, it populates firstNum, and if 
// firstNum is already declared, a number populates secondNum
document.getElementById('clear').addEventListener('click', () => {
          firstNum = '';
          secondNum = '';
          operand = '';
          displayVal = '';
          firstParsed = '';
          secondParsed = '';
          solution = '';
          document.getElementById('display').innerText = displayVal;

});

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

nums.forEach(nums => {
  document.getElementById(nums).addEventListener('click', () => {
      if (operand === '') firstNum += nums, displayVal = firstNum;
      if (operand != '') secondNum += nums, displayVal = secondNum;
      if (secondNum != '') solution  =  Math.round(operate(operand, firstNum, secondNum) * 100)/100 ;
      if (solution != '') firstNum = solution; secondNum = '';
      document.getElementById('display').innerText = displayVal;
  });
})

// document.getElementById('0').addEventListener('click', () => {
//       if (operand === '') firstNum += 0, displayVal = firstNum;
//       if (operand != '') secondNum += 0, displayVal = secondNum;
//       document.getElementById('display').innerText = displayVal;
// });


const operators = ['+', '-', '*', "/"];

operators.forEach(operators => {
document.getElementById(operators).addEventListener('click', () => {
      operand = operators;
      displayVal += operand;
      document.getElementById('display').innerText = displayVal;
  })
});


document.getElementById('=').addEventListener('click', () => {
      if(operand != '') displayVal = '';        //need to make = not do anything if pressed before a second number
      if(operand === '/' && secondNum === '0') alert('try again buster'), operand = '', secondNum = '';
      displayVal = solution;
      firstNum = solution;
      //secondNum = '';
      document.getElementById('display').innerText = displayVal;


});

  // 'Create a new function operate that takes an operator 
 //and 2 numbers and then calls one of the above functions on the numbers'
 //i think I need to make the firstNum and secondNum into ints, otherwise answer will just be
 // concatenated 

const operate = function(operand, firstParsed, secondParsed) {
      if (operand === '+') {
        
        return add(firstParsed, secondParsed);
      };
      
      if (operand === '-') {
        return subtract(firstParsed, secondParsed);
      };
  
      if (operand === '*') {
      return multiply(firstParsed, secondParsed)
      };
  
      if (operand === '/') {
      return  divide(firstParsed, secondParsed);
      };
  };

const add = function(firstNum, secondNum) {
       firstParsed = parseInt(firstNum);
       secondParsed = parseInt(secondNum);

    return firstParsed + secondParsed ;
  };
  
const subtract = function(firstNum, secondNum) {
       firstParsed = parseInt(firstNum);
       secondParsed = parseInt(secondNum);

    return firstParsed - secondParsed;
  };
  
const multiply = function(firstNum, secondNum) {
      firstParsed = parseInt(firstNum);
      secondParsed = parseInt(secondNum);

      return firstParsed * secondParsed;
  };
  
const divide = function(firstNum, secondNum) {
      firstParsed = parseInt(firstNum);
      secondParsed = parseInt(secondNum);

      return firstParsed / secondParsed;
  };





// document.getElementById('1').addEventListener('click', () => {
//         if (operand === '') firstNum += '1', displayVal = firstNum;
//         if (operand != '') secondNum += '1', displayVal = secondNum;
//         if (firstParsed != '')  
//         solution  =  operate(operand, firstNum, secondNum);
//         document.getElementById('display').innerText = displayVal;
// });

// document.getElementById('2').addEventListener('click', () => {
//         if (operand === '') firstNum += '2', displayVal = firstNum;
//         if (operand != '') secondNum += '2', displayVal = secondNum;
//         solution  =  operate(operand, firstNum, secondNum);
//         document.getElementById('display').innerText = displayVal;
// });

// document.getElementById('3').addEventListener('click', () => {
//         if (operand === '') firstNum += '3', displayVal = firstNum;
//         if (operand != '') secondNum += '3', displayVal = secondNum;
//         solution  =  operate(operand, firstNum, secondNum);
//         document.getElementById('display').innerText = displayVal;
// });

// document.getElementById('4').addEventListener('click', () => {
//         if (operand === '') firstNum += '4', displayVal = firstNum;
//         if (operand != '') secondNum += '4', displayVal = secondNum;
//         solution  =  operate(operand, firstNum, secondNum);
//         document.getElementById('display').innerText = displayVal;
// });

// document.getElementById('5').addEventListener('click', () => {
//       if (operand === '') firstNum += '5', displayVal = firstNum;
//       if (operand != '') secondNum += '5', displayVal = secondNum;
//       solution  =  operate(operand, firstNum, secondNum); 
//       document.getElementById('display').innerText = displayVal;
// });

// document.getElementById('6').addEventListener('click', () => {
//       if (operand === '') firstNum += '6', displayVal = firstNum;
//       if (operand != '') secondNum += '6', displayVal = secondNum;
//       document.getElementById('display').innerText = displayVal;
// });

// document.getElementById('7').addEventListener('click', () => {
//       if (operand === '') firstNum += '7', displayVal = firstNum;
//       if (operand != '') secondNum += '7', displayVal = secondNum;
//       document.getElementById('display').innerText = displayVal;
// });

// document.getElementById('8').addEventListener('click', () => {
//       if (operand === '') firstNum += '8', displayVal = firstNum;
//       if (operand != '') secondNum += '8', displayVal = secondNum;
//       document.getElementById('display').innerText = displayVal;
// });

// document.getElementById('9').addEventListener('click', () => {
//       if (operand === '') firstNum += '9', displayVal = firstNum;
//       if (operand != '') secondNum += '9', displayVal = secondNum;
//       document.getElementById('display').innerText = displayVal;
// });


//step 6, need to store firstNum when operator is clicked, then also save which operator
// has been chosen and then operate() on them when user presses '=' key 



  // 'Create a new function operate that takes an operator 
 //and 2 numbers and then calls one of the above functions on the numbers'
 //i think I need to make the firstNum and secondNum into ints, otherwise answer will just be
 // concatenated 
