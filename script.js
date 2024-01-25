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
//const firstNumber = document.querySelector('#first-number');
//const secondNumber = document.querySelector('#second-number');
//const operator = document.querySelector('#operator');
let tempDisplay = document.querySelector('#temp-display');

//I could dynamically create a span element every time a button is clicked.
//That way, I could get the program to chain as many operations as possible

// function displayOperator() {

//     for (let i = 0; i < operators.length; i++) {
//         operators[i].addEventListener('click', function (e) {
//             if (firstNumber.innerText != "") {
//                 operator.innerText = "";
//                 operator.innerText = e.srcElement.innerText;
//             }
//         })
//     }
// }

function displayOperator() {
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function (e) {
            if (bigDisplay.children.length > 0) {
                const operator = document.createElement('span');
                operator.id = 'operator';
                operator.innerText = e.srcElement.innerText;
                console.log(bigDisplay.lastChild)
                if (bigDisplay.lastChild.id != 'number') {
                    bigDisplay.removeChild(bigDisplay.lastChild);
                }
                bigDisplay.appendChild(operator);

            }
        })
    }
}

function displayNumber() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function (e) {
            const number = document.createElement('span')
            number.id = 'number';
            number.innerText = e.srcElement.innerText;
            bigDisplay.appendChild(number);
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
}

calculator();