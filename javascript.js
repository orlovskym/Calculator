let a = '0'
let b = ''
let sign = ''
let buttons = document.querySelectorAll("button");
let screen = document.querySelector(`#screen`);
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let operators = ["+", "-", "*", "/"];
let errortext = "destroyed universe";

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        buttonPress(e.target.innerText);
    })
}

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
    if (b == 0) {
        a = errortext;
        return a
    }
    return a / b;
}

function operate(a, b, sign) {
    a = parseInt(a);
    b = parseInt(b);
    switch (sign) {
        case "+":
            return (add(a, b));
        case "-":
            return (subtract(a, b));
        case "*":
            return (multiply(a, b));
        case "/":
            return (divide(a, b));
    }
}

function buttonPress(which) {
    if (a == errortext) clearScreen();
    if (which == "CLR") {
        clearScreen();
    } else if (operators.includes(which)) {
        if (b) {
            a = operate(a, b, sign);
            b = '';
        }
        sign = which;
    } else if (which == "=") {
        if (!b) {
            sign = '';
        } else {
            a = operate(a, b, sign);
            sign = '';
            b = '';
        }
    } else {
        if (!sign) {
            if (a == 0) a = which;
            else a += which;
        }
        if (sign) {
            if (b == 0) b = which;
            else b += which;
        }
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