/*
-calculator should have 4 operators- add, subtract, divide, multiply
-create a function 'operate' that takes an operation (+,/,*,-), two numbers and performs the operation
-add a display to the calculator
-create functions that populate the display when you click number buttons
-store the the 'display value' in a variable
-users should be able to string operations together and operations should work in proper order
-calculator should evaluate more than a single pair of numbers at a time.
-round answers with long decimals
-pressing clear should acutally reset the data
-display error messages of users try to divide by 0

Extra credit
-add a '.' button so users caninput decimals
-users should not type more than one decimal
-add a backspace button so users can undo 
-add keyboard support in case you get trouble from keys such as '/'. read documentation for 'event.preventDefault' tosolve this problem.
*/

const buttons = document.querySelectorAll('#buttons');
const numbers = document.querySelectorAll('#numbers');
const operators = document.querySelectorAll('#operators');
const bigDisplay = document.querySelector('#perm-display');
const firstNumber = document.querySelector('#first-number');
const secondNumber = document.querySelector('#second-number');
let number = [];

function displayOperator() {
    let operator = '';
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function (e) {
            if (bigDisplay.innerText != "") {
                bigDisplay.innerText += e.srcElement.innerText;
                operator = e.srcElement.innerText;
            }
        })
    }
    return operator;
}

function displayNumber() {

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function (e) {
            bigDisplay.innerText += e.srcElement.innerText;
            number.unshift(parseInt(e.srcElement.innerText));
            console.log(number[0]);
            operation
        })
    }
    //return number[0];
}

function operation(operator, firstNum, secondNum) {
    const result = 0;
    if (operator == '+') {
        result = firstNum + secondNum;
    } else if (operator == '*') {
        result = firstNum * secondNum;
    } else if (operator == '/') {
        result = firstNum / secondNum;
    } else if (operator == '-') {
        result = firstNum - secondNum;
    }
    return result;
}

function calculator() {
    displayOperator();
    displayNumber();
    operation(firstNumber, secondNumber);
}

calculator();
// console.log(displayOperator());
// console.log(displayNumber());