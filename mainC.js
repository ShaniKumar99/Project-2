let display = document.getElementById('display');

  function append(value) {
    if (display.innerText === '0' || display.innerText === 'Error') {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }

  function clearDisplay() {
    display.innerText = '0';
  }

  function calculate() {
    try {
      display.innerText = eval(display.innerText);
    } catch (e) {
      display.innerText = 'Error';
    }
  }

  function percentage() {
    try {
      display.innerText = parseFloat(display.innerText) / 100;
    } catch (e) {
      alert("Invalid percentage operation");
    }
  }

  function deleteLast() {
    if (display.innerText.length === 1 || display.innerText === "Error") {
      display.innerText = "0";
    } else {
      display.innerText = display.innerText.slice(0, -1);
    }
  }