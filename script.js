class Calculator {
    constructor(prevTxt, currentTxt) {
        this.prevTxt = prevTxt
        this.currentTxt = currentTxt
    }

    clear() {

    }

    delete() {

    }

    appendNum(number) {

    }

    pickOperator(operation)

    operate() {

    }

    display() {
        
    }
}

const numberBut = document.querySelectorAll('[data-num]')
const operatorBut = document.querySelectorAll('[data-operator]')
const clearBut = document.querySelector('[data-clear]')
const delBut = document.querySelector('[data-del]')
const equalBut = document.querySelector('[data-equal]')
const prevTxt = document.querySelector('[data-prev]')
const currentTxt = document.querySelector('[data-current]')


function add(a, b) {
   let sum = a + b;
   return sum
};


function subtract(a, b) {
    let sum = a - b;
    return sum
};


function multiply(a, b) {
    let sum = a * b;
    return sum
};
 

function divide(a, b) {
    let sum = a /= b;
    return sum
};

const display = "";

// passes the appropirate operator function when called //
function operate(operator, a, b) {
    switch(operator){
            case '+':
                return add(a, b);
                break;

            case '-':
                return subtract(a, b);
                break;

            case '*':
                return multiply(a, b);
                break;

            case '/':
                return divide(a, b);
                break;
     }
};

