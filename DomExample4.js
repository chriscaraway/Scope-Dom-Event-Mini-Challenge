// Make a ariable for desired password

var desiredPassword = "12345678";

// Grab our elements from the dom and assign them to variables

var formEl = document.getElementbyId("password-form");
var nameEl = document.getElementbyId("password-input");

// Event

formEl.addEventListener("submit", function(event) {
	if (desiredPassword === nameEl.value) {
		alert("Correct!");
	}
	else {
		alert("Incorrect");
		event.preventDefault();
	}
});
