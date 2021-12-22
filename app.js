const numberButton = Array.from(document.getElementsByClassName("number"));
const operatorButton = Array.from(document.getElementsByClassName("operator"));

let lastNumber;
let newNumber;
let operator;

let storedNumber;


numberButton.forEach(item => item.addEventListener("click", getNumbers));


function getNumbers() {
        if (storedNumber === undefined) {
            storedNumber = this.value;
            console.log(storedNumber)
        }
        else if (!(storedNumber === undefined)) {
            storedNumber += this.value;
            console.log(storedNumber)
        }
}

operatorButton.forEach(item => item.addEventListener("click", getOperator));

function getOperator() {
    if (operator === undefined && lastNumber === undefined) {
        lastNumber = parseInt(storedNumber);
        storedNumber = undefined;
        operator = this.value;
    }
    else if (!(operator === undefined) && !(isNaN(lastNumber)) && newNumber === undefined) {
        newNumber = parseInt(storedNumber);
        let total = operate(lastNumber, newNumber, operator);
        lastNumber = total;

        operator = undefined;
        storedNumber = undefined;
        newNumber = undefined;
        console.log(total);
    }
    else if (operator === undefined && !(isNaN(lastNumber)) && newNumber === undefined) {
        operator = this.value;
        newNumber = parseInt(storedNumber);
        let total = operate(lastNumber, newNumber, operator);
        lastNumber = total;

        operator = undefined;
        storedNumber = undefined;
        newNumber = undefined;
        console.log(total);
    }
}

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
}    

let usrop = "/"
