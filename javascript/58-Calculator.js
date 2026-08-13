const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function allClearDisplay() {
    display.value = "";
}

function clearDisplay() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const sanitizedInput = display.value.replace(/x/g, '*');
        display.value = eval(sanitizedInput);
    } catch (error) {
        display.value = "Error"; 
    }
}
