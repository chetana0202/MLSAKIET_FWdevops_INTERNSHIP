let displayValue = "";  // To keep track of the current input

// Function to append numbers and operators to the display
function appendNumber(number) {
  displayValue += number;
  document.getElementById("display").value = displayValue;
}

function appendOperator(operator) {
  displayValue += operator;
  document.getElementById("display").value = displayValue;
}

// Function to clear the display
function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

// Function to delete the last character from the display
function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = displayValue;
}

// Function to calculate the result
function calculate() {
  try {
    displayValue = eval(displayValue);  // Calculate the result
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
