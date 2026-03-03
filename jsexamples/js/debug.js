"use strict"; // The "use strict" directive in JavaScript enables strict mode, which enforces stricter parsing and error handling on the code at runtime. It was introduced in ECMAScript 5 to help developers write cleaner, more secure, and less error-prone code. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

let message = "Print out this message";

console.log(message);// Logs message to the browser console
alert(message); // Displays an alert dialog with the message

// Updates the inner text of an HTML element with id "heading1" to the message      
document.querySelector("#heading1").innerText = message;
// Alternatively, you can use getElementById, which searches the DOM for an element with the specified ID
document.getElementById("heading1").innerText = message;