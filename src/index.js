// Input thousands separator

var display = document.getElementById("display");
if (display) {
  display.addEventListener("keyup", function (event) {
    var value = this.value.replace(/,/g, "");
    this.dataset.currentValue = parseInt(value, 10);
    var caret = value.length - 1;
    while (caret - 3 > -1) {
      caret -= 3;
      value = value.split("");
      value.splice(caret + 1, 0, ",");
      value = value.join("");
    }
    this.value = value;
  });
}

// Calculator logic
