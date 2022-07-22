
class Calculator {
    constructor(previousNumTxt, currentNumTxt) {
        this.previousNumTxt = previousNumTxt
        this.currentNumTxt = currentNumTxt
        this.clear()
    }

    clear() {
        this.currentNum = ''
        this.previousNum = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.currentNum = number
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentNumTxt.innerText = this.currentNum
    }
}

const numberButtons = document.querySelectorAll('[data-num]')
const operationButtons = document.querySelectorAll('[data-operation]')
const allClearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-del]')
const equalsButton = document.querySelector('[data-equals]')
const previousNumTxt = document.querySelector('[data-previous-num]')
const currentNumTxt = document.querySelector('[data-current-num]')

const calculator = new Calculator(previousNumTxt, currentNumTxt)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })


// function add(a, b) {
//    let sum = a + b;
//    return sum
// };


// function subtract(a, b) {
//     let sum = a - b;
//     return sum
// };


// function multiply(a, b) {
//     let sum = a * b;
//     return sum
// };
 

// function divide(a, b) {
//     let sum = a /= b;
//     return sum
// };

// const display = "";

// // passes the appropirate operator function when called //
// function operate(operator, a, b) {
//     switch(operator){
//             case '+':
//                 return add(a, b);
//                 break;

//             case '-':
//                 return subtract(a, b);
//                 break;

//             case '*':
//                 return multiply(a, b);
//                 break;

//             case '/':
//                 return divide(a, b);
//                 break;
//      }
// };

