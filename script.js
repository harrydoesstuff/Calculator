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

const display = document.getElementById("display");
numberInputs = [];


// const buttons = document.querySelectorAll("button");

// buttons.forEach(buttons => {
//     buttons.addEventListener("click", e => {
//         if(e.target.value != "=") {
//         display.textContent = e.target.value;
//     }
// })
// })

// going to try this using data instead of individual IDs

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll("[data-operation]");
const clearButton = document.querySelectorAll("[data-clear]");
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


let num1;
let num2;

let operator;
let result;

//ok now lets try this using the buttons

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", e => {
    switch (operator) {
        case "+":
            console.log(add(num1, num2));
        break;

        case "-":
            console.log(subtract(num1, num2));
        break;

        case "x":
            console.log(multiply(num1, num2));
        break;

        case "/":
            console.log(divide(num1, num2));
        break;
    }
});

operationButtons.forEach(operationButtons => {
    operationButtons.addEventListener("click", e => {
        operator = e.target.value;
        console.log(operator);
    })
})

numberButtons.forEach(numberButtons => {
    numberButtons.addEventListener("click", e => {
        num1 = parseFloat(e.target.value);
        num2 = parseFloat(e.target.value);
        console.log(num1, num2);
    })
})

function add() {
    let addResult = num1 + num2;
    return addResult;
}

function subtract(num1, num2) {
    let subtractResult = num1 - num2;
    return subtractResult;
}

function multiply(num1, num2) {
    let multiplyResult = num1 * num2;
    return multiplyResult;
}

function divide(num1, num2) {
    let divideResult = num1 / num2;
    return divideResult;
}