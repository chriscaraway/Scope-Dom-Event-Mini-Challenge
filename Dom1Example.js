var button = document.getElementbyId("Click-1");
var button = document.getElementbyId("Click-2");

button.addEventListener("Click-1", function(event) {
	alert("I'm Right!");
	console.log("I'm Right!");
	console.log(event);
});

button.addEventListener("Click-2", function(event) {
	alert("No, I'm Right!");
	console.log("No I'm Right!");
	console.log(event);
});
