// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("six");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight");
// const nine = document.getElementById("nine");
// const zero = document.getElementById("zero");
// const add = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const multiply = document.getElementById("multiply");
// const divide = document.getElementById("divide");
// const clear = document.getElementById("clear");
// const equals = document.getElementById("equals");

// const display = document.getElementById("display");


// const buttons = document.querySelectorAll("button");

// buttons.forEach(buttons => {
//     buttons.addEventListener("click", e => {
//         if(e.target.value != "=") {
//         display.textContent = e.target.value;
//     }
// })
// })

// going to try this using data instead of individual IDs

// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll("[data-operation]");
// const clearButton = document.getElementById("clear");
// const currentOperand = document.getElementById("currentOperand");
// const equalsButton = document.getElementById("equals");

// let num1;
// let num2;
// let operator;

// numberButtons.forEach(numberButtons => {
//     numberButtons.addEventListener("click", e => {
//         numberInputs.push(e.target.value);
//         numberInputs.map(Number);
//         numberInputs.join("");
//         display.innerHTML = numberInputs;
//     })
// })


//going to do a prompt based calculator down here to get the operations functioning properly. Then I'll move back to getting the buttons to work. 


// let num1;
// let num2;

// let operator;
// let result;

//ok now lets try this using the buttons

// equalsButton.addEventListener("click", e => {

// function calculate() {
//     switch (operator) {
//         case "+":
//             display.innerText = add(num1, num2);
//         break;

//         case "-":
//             display.innerText = subtract(num1, num2);
//         break;

//         case "x":
//             display.innerText = multiply(num1, num2);
//         break;

//         case "/":
//             display.innerText = divide(num1, num2);
//         break;
//     }
// };

// operationButtons.forEach(operationButtons => {
//     operationButtons.addEventListener("click", e => {
//         operator = e.target.value;
//         console.log(operator);
//     })
// })

// numberButtons.forEach(numberButtons => {
//     numberButtons.addEventListener("click", e => {
//         num1 = parseFloat(e.target.value);
//         num2 = parseFloat(e.target.value);
//         console.log(num1, num2);
//     })
// })

// function add() {
//     let int1 = parseFloat(num1);
//     let int2 = parseFloat(num2);
//      calcResult = int1 + int2;
//     return calcResult;
// }

// function subtract() {
//     let int1 = parseFloat(num1);
//     let int2 = parseFloat(num2);
//     calcResult = int1 - int2;
//     return calcResult;
// }

// function multiply() {
//     let int1 = parseFloat(num1);
//     let int2 = parseFloat(num2);
//     calcResult = int1 * int2;
//     return calcResult;
// }

// function divide() {
//     let int1 = parseFloat(num1);
//     let int2 = parseFloat(num2);
//     calcResult = int1 / int2;
//     return calcResult;
// }

//I think I'm going to need arrays here so I'm going to pseudo it out
// 
// 
// take first number input and store in temp array
// store that number in an array when an operator or equals is pushed
// clear the temp array
// take second number input and store in temp array
// if equals is pressed
///////store second number in new array and clear temp array
///////run operation on two numbers
///////display result and store it in the temp array
// if operator is pressed
///////store second number in new array and clear temp array
///////allow input of a third number to the temp array



//take first number input and store in a temp array

// currentInput = [];
// let calcResult;

// numberButtons.forEach(numberButtons => {
//     numberButtons.addEventListener("click", e => {
//         currentInput.push(e.target.value);
//         display.innerText = currentInput.join("");
//     })
// })

//store that number in an array when an operator or equals is pushed

// operationButtons.forEach(operationButtons => {
//     operationButtons.addEventListener("click", e => {
//         operator = e.target.value;
//         display.innerText = operator;
//         num1 = currentInput.join("");
//         currentInput = [];
//     })
// })


//equals is pressed, run operation and clear temp array

// equalsButton.addEventListener("click", e => {
//     num2 = currentInput.join("");
//     currentInput = [];
//     calculate();
// })

//clear button

// clearButton.addEventListener("click", e => {
//     currentInput = [];
//     num1 = 0;
//     num2 = 0;
//     display.innerText = "";
// })




// const numb1 = new Number(2)
// console.log(numb1)


// for (let i = 1; i <= 5; i++) {
//     this["numb" + i] = i;
// }
// console.log(numb5)

//Had a total rethink in the logic of how this should work. I've watched some videos on classes and constructor functions and I 
//think that's the way to go. 

//I'll keep all of my previous code in here though to see where I've come from. 

const numbers = document.querySelectorAll("[data-number]");
const operator = document.querySelectorAll("[data-operation]");
const equals = document.querySelector("[data-equals]");
const clear = document.querySelector("[data-clear]");
const del = document.querySelector("[data-delete]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");


class Calc {
    constructor (previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operator = undefined;
    }

    del() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1) //slices the last part of the string 
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;  //makes sure point can only be added once
        this.currentOperand = this.currentOperand.toString() + number.toString(); //appends all clicked numbers using a string instead of adding together as ints
    }

    chooseOperator(operator) {
        if (this.currentOperand === "") return; //checks if operator is empty
        if (this.previousOperand != "") { //checks if an operand has been hit previously, and if so performs the calculation 
            this.compute()
        }

        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
        //this pushes the previous operand and operator to the previous operand display and clears the current operand
    }

    compute() {
        let computation; 
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return; //doesn't allow to run if no number entered

        switch (this.operator) {
            case "+":
                 computation = prev + current;
            break;

            case "-":
                computation = prev - current;
            break;

            case "x":
                computation = prev * current;
            break;

            case "/":
                computation = prev / current;
            break;

           default: 
            return;
    } //this is all the same as the switch I'd previously made
    this.currentOperand = computation; //brings the calculated amount to the current operand (this is what i struggled a lot with previously)
    this.operator = undefined;
    this.previousOperand = "";
    };

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand;
        if (this.operator != null) {
            this.previousOperandText.innerText = 
            `${this.previousOperand} ${this.operator}`;
        }    
    }
}

const calculator = new Calc(previousOperandText, currentOperandText);

numbers.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operator.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperator(button.innerText);
        calculator.updateDisplay();
    })
})

equals.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
})

clear.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
})

del.addEventListener("click", button => {
    calculator.del();
    calculator.updateDisplay();
})