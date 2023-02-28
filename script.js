function addItem() {
    var inputField = document.getElementById("input-field");
    var cardContainer = document.getElementById("card-container");

    if(inputField.value === "") {
        alert("Please enter a value.");
        return;
    }

    var card = document.createElement("div");
    card.className = "card";

    var h2 = document.createElement("h2");
    h2.innerHTML = inputField.value;
    card.appendChild(h2);

    cardContainer.appendChild(card);

    inputField.value = "";
}


function removeAll() {
    var cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
}
