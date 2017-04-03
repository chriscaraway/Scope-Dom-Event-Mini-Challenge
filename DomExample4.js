// Make a ariable for desired password

var desiredPassword = "12345678";

// Grab our elements from the dom and assign them to variables

var formEl= document.getElementById("password-form");
var nameEl= document.getElementById("password-input");

// Event

formEl.addEventListener("submit", function(event) {
	if (desiredPassword === nameEl.value) {
		alert("Correct!");
	}
	else {
		alert("Nope.");
		event.preventDefault();
	}
});
