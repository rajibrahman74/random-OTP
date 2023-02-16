// Convert 4 digits in random numbers
function getOtt() {
  const ott = randomOtt();
  const ottString = ott + "";
  if (ottString.length === 4) {
    return ott;
  } else {
    return getOtt();
  }
}




// Get Random
function randomOtt() {
  const random = Math.round(Math.random() * 10000);
  return random;
}





// Add even listener in Generate button

document.getElementById("generate-btn").addEventListener("click", function () {
  const randomOtt = getOtt();

  // Disply ott
  const ottField = document.getElementById("ott-field");
  ottField.value = randomOtt;
});






// calculator body

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const claculatorElementValue = event.target.innerText;

    const calculatorFieldValue = document.getElementById("calculator-field");
    const previousCalculatorFieldValue = calculatorFieldValue.value;

    if (isNaN(claculatorElementValue)) {
      if (claculatorElementValue === "C") {
        calculatorFieldValue.value = "";
      } else if (claculatorElementValue === "<") {
        const digits = previousCalculatorFieldValue.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        calculatorFieldValue.value = remainingDigits;
      }
    } else {
      const currentCalculatorFieldValue =
        previousCalculatorFieldValue + claculatorElementValue;
      calculatorFieldValue.value = currentCalculatorFieldValue;
    }
  });





// Match ott

document
  .getElementById("ott-submit-btn")
  .addEventListener("click", function () {
    const ottField = document.getElementById("ott-field");
    const ottFieldValue = ottField.value;

    const claculatorField = document.getElementById("calculator-field");
    const claculatorFieldValue = claculatorField.value;

    const correctOtt = document.getElementById('correct-ott');

    const incorrectOtt = document.getElementById('incorrect-ott');

    if (ottFieldValue === claculatorFieldValue) {
      correctOtt.style.display = 'block';
      // ottField.value = '';
      // claculatorField.value = '';
      incorrectOtt.style.display = 'none';
    } else {
      incorrectOtt.style.display = 'block';
      // ottField.value = '';
      // claculatorField.value = '';
      correctOtt.style.display = 'none';
    }
  });