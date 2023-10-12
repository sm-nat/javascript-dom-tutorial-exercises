let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

let listSize = countries.length;

let mySelect = document.getElementById("mySelect");

for (let i = 0; i < listSize; i++) {
    let option = document.createElement('option');
    option.value = countries[i];
    option.textContent = countries[i];

    mySelect.appendChild(option);
}

mySelect.addEventListener('change', (e) => {
    alert("Selected Country: " + e.target.value);
});



