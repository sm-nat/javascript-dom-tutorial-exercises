let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let mySelect = document.getElementById("#mySelect");
mySelect.appendChild("countries");


mySelect.addEventListener("change", () => {
    alert("Selected Country: " + mySelect.value);
  });

