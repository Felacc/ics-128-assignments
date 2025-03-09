function validateNumber(number) {
    while(Number.isNaN(number)) { 
        number = parseFloat(prompt("Please enter a valid number", ""));
    }
    
    return number;
}

// hello world alert
alert("hello world")

// get user's name
const name = prompt("What's your name?","");
document.getElementById("hello").innerHTML = `Hello, ${name}! How many rooms would you like to book?`;

// select the btn element
const btn = document.querySelector("button.btn");
// when btn is clicked get numbers from user, users must enter a valid number
btn.onclick = () => {

    let amount = validateNumber(parseFloat(prompt("What's the amount?")));
    document.getElementById("amount").innerHTML = `$${amount.toFixed(2)}`;
    
    let rate = validateNumber(parseInt(prompt("What's the tax rate?")));
    document.getElementById("rate").innerHTML = `${rate}%`;
    
    let rooms = validateNumber(parseInt(prompt("What's the # of rooms?")));
    document.getElementById("rooms").innerHTML = rooms;
    
    let total = (amount * rooms) +  (amount * rooms * (rate / 100)) ;
    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;

};






