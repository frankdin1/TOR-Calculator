'use strict'
const buttons = document.querySelectorAll('#buttons');
const numbers = document.querySelectorAll('#numbers');
const operators = document.querySelectorAll('#operators');
const bigDisplay = document.querySelector('#perm-display');
const firstNumber = document.querySelector('#first-number');
const secondNumber = document.querySelector('#second-number');
const operator = document.querySelector('#operator');
let tempDisplay = document.querySelector('#temp-display');

//I could dynamically create a span element every time a button is clicked.
//That way, I could get the program to chain as many operations as possible

function displayOperator() {

    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function (e) {
            if (firstNumber.innerText != "") {
                operator.innerText = "";
                operator.innerText = e.srcElement.innerText;
            }
        })
    }
}

// function displayOperator() {
//     for (let i = 0; i < operators.length; i++) {
//         operators[i].addEventListener('click', function (e) {
//             if (bigDisplay.children.length > 0) {
//                 const operator = document.createElement('span');
//                 operator.id = 'operator';
//                 operator.innerText = e.srcElement.innerText;
//                 if (bigDisplay.lastChild.id != 'number') {
//                     bigDisplay.removeChild(bigDisplay.lastChild);
//                 }
//                 bigDisplay.appendChild(operator);

//             }
//         })
//     }
// }

function displayNumber() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function (e) {
            if (firstNumber.innerText) {
                secondNumber.innerText = e.srcElement.innerText;
            } else {
                firstNumber.innerText = e.srcElement.innerText;
            }
        })
    }
}

function displayTempResult() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function () {
            if (bigDisplay.children.length > 2) {
                tempDisplay.innerText = operation(bigDisplay.children[1].innerText, parseFloat(bigDisplay.children[0].innerText), parseFloat(bigDisplay.children[2].innerText))
            }
        })
    }
}
// function displayNumber() {

//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i].addEventListener('click', function (e) {
//             if (!operator.innerText) {
//                 firstNumber.innerText += e.srcElement.innerText;
//             } else {
//                 secondNumber.innerText += e.srcElement.innerText;
//                 if (operator.innerText == '+' || operator.innerText == '-' || operator.innerText == 'X' || operator.innerText == '/') {
//                     tempDisplay.innerText = operation(operator.innerText, parseFloat(firstNumber.innerText), parseFloat(secondNumber.innerText));
//                 }
//             }
//         })
//     }
// }

function operation(operator, firstNum, secondNum) {
    let result = 0;
    if (operator == '+') {
        result = firstNum + secondNum;
    } else if (operator == 'X') {
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
    displayTempResult();
}

calculator();