function add(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

function addNumbers() {
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let myResult = add(addend1, addend2);
    document.querySelector('#sum').value = myResult;
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

let subtract = function(number1, number2) {
    let substration = number1 - number2;
    return substration
}

const subtractNumbers = function() {
    let minuend = parseInt(document.querySelector('#minuend').value);
    let subtrahend = parseInt(document.querySelector('#subtrahend').value);
    let myResult = subtract(minuend, subtrahend);
    document.querySelector('#difference').value = myResult;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);
    let result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

function divide(number1, number2) {
    let divide = number1 / number2
    return divide
}

function divideNumbers() {
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let result = divide(dividend, divisor);
    document.querySelector('#quotient').value = result;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

const currDate = new Date();

let currYear = currDate.getFullYear();
document.querySelector('#year').textContent = currYear;


/* Arrays */

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
document.querySelector('#array').textContent = numberList;

document.querySelector('#odds').textContent = numberList.filter(number => number % 2);
document.querySelector('#evens').textContent = numberList.filter(number => number % 2 === 0);
document.querySelector('#sumOfArray').textContent = numberList.reduce((sum, number) => sum + number, 0);
document.querySelector('#multiplied').textContent = numberList.map(number => number * 2);
document.querySelector('#sumOfMultiplied').textContent = numberList.map(number => number * 2).reduce((sum, number) => sum + number, 0);