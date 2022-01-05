const numberButton = Array.from(document.getElementsByClassName("number"));
const operatorButton = Array.from(document.getElementsByClassName("operator"));
const display = document.getElementById("number-display");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

let firstNumber;
let secondNumber;
let operator;

let storedNumber;
let output = document.createElement('p');
let total;

changeDisplay(0);

clearButton.addEventListener("click", clear);

function clear() {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    storedNumber = undefined;
    total = undefined;
    
    changeDisplay(0);
}

deleteButton.addEventListener("click", erase);

function erase() {
    nbrLength = storedNumber.length;
    
    if (nbrLength === 1) {
        storedNumber = undefined;

        changeDisplay(0);
    }
    else if (nbrLength > 1) {
        storedNumber = storedNumber.slice(0, nbrLength -1);
        changeDisplay(storedNumber);
    }
    
}

numberButton.forEach(item => item.addEventListener("click", getNumbers));


function getNumbers() {
        if (storedNumber === undefined) {
            storedNumber = this.value;
        }
        else if (!(storedNumber === undefined)) {
            storedNumber += this.value;
        }
        
        changeDisplay(storedNumber);
}

operatorButton.forEach(item => item.addEventListener("click", getOperator));

function getOperator() {
    if (this.value === "=") {
        secondNumber = parseInt(storedNumber);
        total = operate(firstNumber, secondNumber, operator);
        firstNumber = total;
        storedNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        
        changeDisplay(firstNumber);
        console.log("1");
        //this.removeEventListener("click", getOperator);
    }
    else if (operator === undefined && firstNumber === undefined) {
        firstNumber = parseInt(storedNumber);
        storedNumber = undefined;
        operator = this.value;
        
        changeDisplay(firstNumber);
        console.log("2");
    }
    else if (!(operator === undefined) && !(isNaN(firstNumber)) && secondNumber === undefined &&
              this.value != "=") {
        secondNumber = parseInt(storedNumber);
        total = operate(firstNumber, secondNumber, operator);
        firstNumber = total;
        operator = this.value;
        storedNumber = undefined;
        secondNumber = undefined;
        
        changeDisplay(total);
        console.log("3");
    }  
    else if (operator === undefined && !(isNaN(firstNumber)) && this.value !== "=") {
        operator = this.value;
        console.log("4")

        
    }
}

function changeDisplay(content) {
    output.textContent = content;
        display.appendChild(output);
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
    let result;

    if (operator === "+") {
        result = add(a, b);
    }
    else if (operator === "-") {
        result = subtract(a, b);
    }
    else if (operator === "*") {
        result = multiply(a, b);
    }
    else if (operator === "/") {
        result = divide(a, b);
    }
    
    if (result % 1 != 0) {
        return result.toPrecision(14) / 1;
    }
    else {
        return result;
    }
    
}    

let usrop = "/"
