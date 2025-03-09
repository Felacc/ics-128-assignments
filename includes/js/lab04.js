// Array with properties of each room
let rooms = [];
rooms.push({
    type: "Standard",
    description: "Simple room with one bed",
    price: 159
});
rooms.push({
    type: "Double",
    description: "Simple room with two beds",
    price: 229
});
rooms.push({
    type: "Penthouse",
    description: "King size bed<br>" + "Bar<br>" + "Jacuzzi",
    price: 229
});
// Array with reference to corresponding DOM elements in which room properties will be displayed
// Each domElements object must have the same index as the corresponding rooms object
let domElements = [];
domElements.push({
    title: document.querySelector("#standardTitle"),
    text: document.querySelector("#standardDescription"),
    price: document.querySelector("#standardPrice"),
    button: document.querySelector("#standardButton")
});
domElements.push({
    title: document.querySelector("#doubleTitle"),
    text: document.querySelector("#doubleDescription"),
    price: document.querySelector("#doublePrice"),
    button: document.querySelector("#doubleButton")
});
domElements.push({
    title: document.querySelector("#penthouseTitle"),
    text: document.querySelector("#penthouseDescription"),
    price: document.querySelector("#penthousePrice"),
    button: document.querySelector("#penthouseButton")
});


addEventListener("load", () => {
    for (let i = 0; i < rooms.length; i++) {
        domElements[i].title.innerHTML += rooms[i].type;
        domElements[i].text.innerHTML += rooms[i].description;
        domElements[i].price.innerHTML += rooms[i].price;
        // add on click event listener for each button
        domElements[i].button.addEventListener("click", () =>  {
            alert("Your room is $" + rooms[i].price + " per night")
        })
    }
});

const tableBtn = document.querySelector("#myButton");
let currentRow = 2;
tableBtn.addEventListener("click", () => {
    let table = document.querySelector("tbody");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.textContent = "Row" + currentRow + " cell1";
    td2.textContent = "Row" + currentRow + " cell2";
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
    currentRow++;
    
});

