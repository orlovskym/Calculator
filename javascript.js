let a = '0'
let b = ''
let sign = ''
let buttons = document.querySelectorAll("button");
let screen = document.querySelector(`#screen`);
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let operators = ["+", "-", "*", "/"]

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, sign) {
    a = parseInt(a);
    b = parseInt(b);
    switch (sign) {
        case "+":
            return (add(a, b));
            break;
        case "-":
            return (subtract(a, b));
            break;
        case "*":
            return (multiply(a, b));
            break;
        case "/":
            return (divide(a, b));
            break;
    }
}


for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        buttonPress(e.target.innerText);
    })
}


function buttonPress(which) {
    console.log(which);
    if (which == "CLR") {
        clearScreen();
    } else if (operators.includes(which)) {
        sign = which;
    } else if (which == "=") {
        a = operate(a, b, sign);
        sign = '';
        b = '';
    } else {
        if (!sign) {
            if (a == 0) a = which;
            else a += which;
        }
        if (sign) b += which;
    }
    updateScreen();
}

function updateScreen() {
    screen.innerText = a + sign + b;
}

function clearScreen() {
    a = '0';
    b = '';
    sign = '';
}

updateScreen();