// Create the title element
var title = document.createElement("h1");
title.setAttribute("id", "title");
title.textContent = "Calculator";
title.style.textAlign = "center"; // Example: Center-align the title
title.style.color = "white"; // Example: Set text color
// Add any other styles as needed

// Insert the title before the firstDiv
document.body.insertBefore(title, firstDiv);

// Create the description element
var description = document.createElement("p");
description.setAttribute("id", "description");
description.textContent =
  "This is a simple calculator interface. Use the buttons or keyboard to perform calculations.";
description.style.textAlign = "center"; // Example: Center-align the description
description.style.color = "white"; // Example: Set text color
// Add any other styles as needed

// Insert the description before the firstDiv
document.body.insertBefore(description, firstDiv);

var firstDiv = document.createElement("div");
firstDiv.setAttribute(
  "style",
  "width: 40%; height: 500px ;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 2px solid black; border-radius:20px;background:black"
);
var display = document.createElement("input");
display.setAttribute(
  "style",
  " width:98.5%; height:95px;background:black;border-radius:20px;color:white;font-size: 36px; "
);
display.setAttribute("id", "result");
display.setAttribute("type", "text");
firstDiv.appendChild(display);
document.body.appendChild(firstDiv);

// create second div

var secondDiv = document.createElement("div");
secondDiv.setAttribute(
  "style",
  "width:100%;height:80px;background:black; display:flex; "
);
firstDiv.appendChild(secondDiv);

var button = document.createElement("button");
button.innerText = "7";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px; "
);
button.addEventListener("click", (e) => {
  addToDisplay("7");
});
secondDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "8";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("8");
});
secondDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "9";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("9");
});
secondDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "/";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black; background:orange;border-radius:25px;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("/");
});
secondDiv.appendChild(button);

// create third div

var thirdDiv = document.createElement("div");
thirdDiv.setAttribute(
  "style",
  "width:100%;height:80px;background:black; display:flex;"
);
firstDiv.appendChild(thirdDiv);

var button = document.createElement("button");
button.innerText = "4";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("4");
});
thirdDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "5";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("5");
});
thirdDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "6";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("6");
});
thirdDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "-";
button.setAttribute("type", "button");
button.setAttribute("id", "subtract");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black; background:orange;border-radius:25px;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("-");
});
thirdDiv.appendChild(button);

//create  fourthDiv

var fourthDiv = document.createElement("div");
fourthDiv.setAttribute(
  "style",
  "width:100%;height:80px;background:black; display:flex"
);
firstDiv.appendChild(fourthDiv);

// Inside the creation of fourthDiv (where buttons 1, 2, 3, and + are created)

var button = document.createElement("button");
button.innerText = "1";
button.setAttribute("type", "button");
button.setAttribute("id", "1"); // Set the ID for button 1
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("1");
});
fourthDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "2";
button.setAttribute("type", "button");
button.setAttribute("id", "2"); // Set the ID for button 2
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("2");
});
fourthDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "3";
button.setAttribute("type", "button");
button.setAttribute("id", "3"); // Set the ID for button 3
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("3");
});
fourthDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "+";
button.setAttribute("type", "button");
button.setAttribute("id", "add");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black; background:orange; border-radius:25px;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("+");
});
fourthDiv.appendChild(button);

// create fifth div

var fifthDiv = document.createElement("div");
fifthDiv.setAttribute(
  "style",
  "width:100%;height:80px;background:black; display:flex;"
);
firstDiv.appendChild(fifthDiv);

var button = document.createElement("button");
button.innerText = "0";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("0");
});
fifthDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "00";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("00");
});
fifthDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = ".";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay(".");
});
fifthDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "*";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;background:orange;border-radius:25px;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  addToDisplay("*");
});
fifthDiv.appendChild(button);

// create sixth div

var sixthDiv = document.createElement("div");
sixthDiv.setAttribute(
  "style",
  "width:100%;height:80px;background:black; display:flex;border-radius:20px;"
);
firstDiv.appendChild(sixthDiv);

var clearButton = document.createElement("button");
clearButton.innerText = "Clear";
clearButton.setAttribute("type", "button");
clearButton.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;background:lightblue;border-radius:25px;font-size: 25px;margin-left:5px;"
);
clearButton.setAttribute("id", "clear");
clearButton.addEventListener("click", clearDisplay);
sixthDiv.appendChild(clearButton);

var button = document.createElement("button");
button.innerText = "<=";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black; background:lightgreen;border-radius:25px;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  clearOne("");
});
sixthDiv.appendChild(button);

var button = document.createElement("button");
button.innerText = "%";
button.setAttribute("type", "button");
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black; background:orange; border-radius:25px;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  calculate();
});
sixthDiv.appendChild(button);

// Inside the creation of sixthDiv (where Clear, <=, %, and = buttons are created)

var button = document.createElement("button");
button.innerText = "=";
button.setAttribute("type", "button");
button.setAttribute("id", "equal"); // Set the ID for the equal button
button.setAttribute(
  "style",
  "width:30%;height:100%;border:1px solid black;background:orange;border-radius:25px;font-size: 25px;"
);
button.addEventListener("click", (e) => {
  calculate();
});
sixthDiv.appendChild(button);

document.addEventListener("keydown", (event) => {
  if (event.shiftKey && event.key === "*") {
    addToDisplay("*");
  } else if (event.shiftKey && event.key === "+") {
    addToDisplay("+");
  } else if (event.shiftKey && event.key === "%") {
    calculate();
  } else if (event.key >= "0" && event.key <= "9") {
    addToDisplay(event.key);
  } else if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/" ||
    event.key === "." ||
    event.key === "%"
  ) {
    addToDisplay(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key == "Backspace") {
    clearOne();
  } else if (event.key == "Shift") {
    addToDisplay("");
  } else {
    alert("Only numbers and operators are allowed!");
  }
});



function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}
function clearOne() {
  display.value = display.value.slice(0, -1);
}

var resultInput = document.getElementById("result");
function calculate() {
  var result = document.getElementById("result").value;
  if (result) {
    var finalResult = eval(result); // Using eval to perform calculation
    document.getElementById("result").value = finalResult;
  }
}
