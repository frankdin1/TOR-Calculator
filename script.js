'use strict'
const buttons = document.querySelectorAll('#buttons');
const numbers = document.querySelectorAll('#numbers');
const operators = document.querySelectorAll('#operators');
const bigDisplay = document.querySelector('#perm-display');
const firstNumber = document.querySelector('#first-number');
const secondNumber = document.querySelector('#second-number');
const operator = document.querySelector('#operator');
let tempDisplay = document.querySelector('#temp-display');
const answer = document.querySelector('#answer');

//I could dynamically create a span element every time a button is clicked.
//That way, I could get the program to chain as many operations as possible


function displayOperator() {
    for (let i = 0; i < operators[0].children.length; i++) {
        operators[0].addEventListener('click', function (e) {
            if (firstNumber.innerText != "") {
                if (e.srcElement.innerText != '=' && e.srcElement.innerText != 'D' && e.srcElement.innerText != '.' && e.srcElement.innerText != '+/-') {
                    operator.innerText = "";
                    operator.innerText = e.srcElement.innerText;
                }
            }
        })
    }
}

function displayPermResult() {
    answer.addEventListener('click', function () {
        if (secondNumber.innerText) {
            firstNumber.innerText = tempDisplay.innerText;
            operator.innerText = "";
            secondNumber.innerText = "";
            tempDisplay.innerText = "";
        }
    })
}

function displayNumber() {
    for (let i = 0; i < numbers[0].children.length; i++) {
        numbers[0].children[i].addEventListener('click', function (e) {
            if (!operator.innerText) {
                firstNumber.innerText += e.srcElement.innerText;
            } else {
                secondNumber.innerText += e.srcElement.innerText;
                if (operator.innerText == '+' || operator.innerText == '-' || operator.innerText == 'X' || operator.innerText == '/') {
                    tempDisplay.innerText = operation(operator.innerText, parseFloat(firstNumber.innerText), parseFloat(secondNumber.innerText));
                }
            }
        })
    }
}

function nonDisplayOperators() {
    operators[0].addEventListener('click', function (e) {
        if (e.srcElement.innerText == 'AC') {
            clearScreen();
        }
        if (e.srcElement.innerText == 'D') {
            if (secondNumber.innerText) {
                backspace(secondNumber);
                deleteTempDisplay(secondNumber);
            }
            else if (!secondNumber.innerText && operator.innerText) {
                backspace(operator);
            } else if (firstNumber.innerText) {
                backspace(firstNumber);
            }
        }
        if (e.srcElement.innerText == '.') {
            if (!operator.innerText) {
                decimal(firstNumber);
            } else {
                decimal(secondNumber);
            }
        }
        if (e.srcElement.innerText == '+/-') {
            if (!operator.innerText) {
                negativeValue(firstNumber);
            } else {
                negativeValue(secondNumber);
            }
        }
    })
}

function negativeValue(node) {
    if (!node.innerText) {
        node.innerText = "-";
    } else if (node.innerText && !node.innerText.split('').includes("-")) {
        node.innerText += "-";
    }
}

function decimal(node) {
    if (!node.innerText) {
        node.innerText = "0.";
    } else if (node.innerText && !node.innerText.split('').includes(".")) {
        node.innerText += ".";
    }
}

function clearScreen() {
    firstNumber.innerText = "";
    secondNumber.innerText = "";
    operator.innerText = "";
    tempDisplay.innerText = "";
}

function backspace(node) {
    let textLength = node.innerText.length;
    node.innerText = node.innerText.slice(0, textLength - 1);
}

function deleteTempDisplay(node) {
    if (node.innerText == "") {
        tempDisplay.innerText = "";
    } else {
        tempDisplay.innerText = operation(operator.innerText, parseFloat(firstNumber.innerText), parseFloat(secondNumber.innerText));
    }
}
// function backspace() {
//     let textLength = bigDisplay.lastElementChild.innerText.length;
//     if (bigDisplay.lastElementChild.innerText) {
//         bigDisplay.lastElementChild.innerText = bigDisplay.lastElementChild.innerText.slice(0, textLength - 1);
//         if (bigDisplay.lastElementChild.innerText == "") {
//             tempDisplay.innerText = "";
//         } else {
//             tempDisplay.innerText = operation(operator.innerText, parseFloat(firstNumber.innerText), parseFloat(secondNumber.innerText));
//         }
//     }
//     else if (bigDisplay.firstElementChild.innerText && operator.innerText) {
//         operator.innerText = "";
//     }
//     else {
//         textLength = bigDisplay.firstElementChild.innerText.length;
//         bigDisplay.firstElementChild.innerText = bigDisplay.firstElementChild.innerText.slice(0, textLength - 1);;
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
    displayPermResult();
    nonDisplayOperators();
}

calculator();