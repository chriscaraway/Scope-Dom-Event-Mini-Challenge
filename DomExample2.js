 var Hover = document.getElementById("DontHover");

 DontHover.addEventListener("mouseover", function(event) {
	 alert("Hey, I told you not to hover over me!");
	 console.log("Hey, I told you not to hover over me!");
	 console.log(event);
 });
