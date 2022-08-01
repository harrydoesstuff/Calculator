const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(buttons => {
    buttons.addEventListener("click", e => {
        if(e.target.value != "=") {
        display.textContent = e.target.value;
    }
})
})

