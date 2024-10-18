const display = document.querySelector('input[name="display"]');

const buttons = document.querySelectorAll('input[type="button"]');

let displayValue = '';
let operatorAdded = false;
let decimalAdded = false;  
let percentAdded = false; 

function updateDisplay(value) {
    display.value = value;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay(displayValue);
    } catch (e) {
        displayValue = 'Error';
        updateDisplay(displayValue);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value == 'C') {
            displayValue = '';
            operatorAdded = false;
            decimalAdded = false;  
            percentAdded = false;

        } else if (value == 'DEL') {
            const lastChar = displayValue.slice(-1);
            displayValue = displayValue.slice(0, -1);
            if (['+', '-', '*', '/', '%'].includes(lastChar)) {
                operatorAdded = false;
                percentAdded = false; 
            }
            if (lastChar === '.') {
                decimalAdded = false;
            }

        } else if (value === '=') {
            calculate(); 
            displayValue = '';
            return;

        } else if (['+', '-', '*', '/', '%'].includes(value)) {
            if (!operatorAdded && displayValue !== '') {
                displayValue += value;
                operatorAdded = true;
                decimalAdded = false;
                percentAdded = false;
            }

        } else if (value === '.') {
            if (!decimalAdded) {
                displayValue += value;
                decimalAdded = true;
            }

        } else {
            displayValue += value;
            operatorAdded = false; 
            percentAdded = false;
        }

        updateDisplay(displayValue);
    });
});
