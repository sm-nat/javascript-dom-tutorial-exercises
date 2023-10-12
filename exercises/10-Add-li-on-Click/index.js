let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	
	let newLi = document.createElement("li");
	newLi.textContent = "Forth element";
	
	let myList = document.getElementById("myList");

  myList.appendChild(newLi);
	
});


