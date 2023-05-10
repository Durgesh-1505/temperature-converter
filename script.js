const celsiusInput = document.getElementById("celsius-input");
const fahrenheitInput = document.getElementById("fahrenheit-input");
const celsiusToFahrenheitResult = document.getElementById(
  "celsius-to-fahrenheit"
);
const fahrenheitToCelsiusResult = document.getElementById(
  "fahrenheit-to-celsius"
);

// Update Fahrenheit as Celsius is updated
celsiusInput.addEventListener("input", function () {
  const celsiusTemp = parseFloat(celsiusInput.value);
  if (!isNaN(celsiusTemp)) {
    const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    celsiusToFahrenheitResult.textContent = `${celsiusTemp}\xB0C = ${fahrenheitTemp}\xB0F`;
  } else {
    celsiusToFahrenheitResult.textContent = "";
  }
});

// Update Celsius as Fahrenheit is updated
fahrenheitInput.addEventListener("input", function () {
  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheitTemp)) {
    const celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
    fahrenheitToCelsiusResult.textContent = `${fahrenheitTemp}\xB0F = ${celsiusTemp}\xB0C`;
  } else {
    fahrenheitToCelsiusResult.textContent = "";
  }
});
