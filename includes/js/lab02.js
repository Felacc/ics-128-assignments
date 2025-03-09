

const pricesBtn = document.querySelector("#prices-btn");
// calc btn on click function
pricesBtn.addEventListener("click", () => {
    // get prices
    let prices = [];
    for (let i = 0; i < 3; i++) {
        prices[i] = parseInt(prompt("Price: ", ""));
    }

    // display prices
    document.querySelector("#prices").innerHTML = ""; // reset in case of multiple btn press
    for (let i = 0; i < prices.length; i++) {
        if (i == prices.length - 1) {
            document.querySelector("#prices").innerHTML += "$" + prices[i];
        } else {
            document.querySelector("#prices").innerHTML += "$" + prices[i] + ", ";
        }
    }
    
    // sorts array using sort() and passing comparative anonymous function into sort()
    // the return value of the compare function tells sort where to place element a relative to element b
    // example if a - b is negative, a should come before b
    prices.sort((a, b) => a - b);

    // display middle value
    let midPrice = prices[parseInt(prices.length / 2)];
    document.querySelector("#middle-price").innerHTML = "$" + midPrice;

    // if mid val even make red
    if (midPrice % 2 == 0) {
        document.querySelector("#middle-price").style.color = "red";
    }

    // display mean value
    let totalSum = 0;
    for (let i = 0; i < prices.length; i++) {
        totalSum += prices[i];
    }
    let mean = totalSum / prices.length;
    document.querySelector("#mean-price").innerHTML = "$"  + parseInt(mean);
});

// hotel section
const hotBtn = document.querySelector("#hotel-btn");
hotBtn.addEventListener("click", () => {
    const occPercent = document.querySelector("#occ-percent").value;
    if (isNaN(occPercent) || occPercent < 0 || occPercent > 100) {
        document.querySelector("#hotel-result-colored").innerHTML = ""; // removes text from previous button press
        document.querySelector("#hotel-result-normal").innerHTML = "Incorrect - not between 0-100";
    } else if (occPercent == 100) {
        document.querySelector("#hotel-result-normal").innerHTML = ""; // removes text from previous button press
        document.querySelector("#hotel-result-colored").innerHTML = "THE HOTEL IS FULL!";
        document.querySelector("#hotel-result-colored").style.color = "red";
    } else {
        document.querySelector("#hotel-result-colored").innerHTML = occPercent + "%";
        document.querySelector("#hotel-result-normal").innerHTML = " booked!";
        if (occPercent >= 90) {
            document.querySelector("#hotel-result-colored").style.color = "blue";
        } else if (occPercent >= 80) {
            document.querySelector("#hotel-result-colored").style.color = "green";
        } else if (occPercent >= 65) {
            document.querySelector("#hotel-result-colored").style.color = "yellow";
        } else if (occPercent >= 51) {
            document.querySelector("#hotel-result-colored").style.color = "orange";
        } else {
            document.querySelector("#hotel-result-colored").style.color = "red";
        }
    }
});

//iterate section
const itBtn = document.querySelector("#iterate-btn");
itBtn.addEventListener("click", () => {
    const iteratedItem = document.querySelector("#num-of-iterations").value;

    let triangle = document.querySelector("#triangle");
    triangle.innerHTML = ""; // clear triangle
    // draw increasing triangle
    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j < i; j++) {
            triangle.innerHTML += iteratedItem;
        }
        triangle.innerHTML += "<br>";
    }
    // draw decreasing triangle
    for (let i = 4; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            triangle.innerHTML += iteratedItem;
        }
        triangle.innerHTML += "<br>";
    }
});

//siri alexa race
const speedBtn = document.querySelector("#speed-btn");
speedBtn.addEventListener("click", () => {
    let aSpeed = parseInt(document.querySelector("#alexa-spd").value);
    let sSpeed = parseInt(document.querySelector("#siri-spd").value);

    document.querySelector("#alexa-output").innerHTML = aSpeed;
    document.querySelector("#alexa-output").style.color = "blue";

    document.querySelector("#siri-output").innerHTML = sSpeed;
    document.querySelector("#siri-output").style.color = "red";

    if (aSpeed == sSpeed) {
        document.querySelector("#winner").textContent = "No one";
        document.querySelector("#winner").style.color = "green";
    } else if (aSpeed > sSpeed) {
        document.querySelector("#winner").innerHTML = "Alexa";
        document.querySelector("#winner").style.color = "blue";
    } else {
        document.querySelector("#winner").innerHTML = "Siri";
        document.querySelector("#winner").style.color = "red";
    }


});



