var button1 = document.getElementById("Click1");
var button2 = document.getElementById("Click2");

console.log(button1, button2)

button1.addEventListener("click", function(event) {
	alert("I'm Right!");
	console.log("I'm Right!");
	console.log(event);
});

button2.addEventListener("click", function(event) {
	alert("No, I'm Right!");
	console.log("No I'm Right!");
	console.log(event);
});
