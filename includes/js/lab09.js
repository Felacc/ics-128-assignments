// Start of Lab 5 JS (login modal and user account info)

// Buttons
const submitBtn = document.querySelector("#submit");
const closeBtn = document.querySelector("#close");
const loginBtn = document.querySelector("#login");
const logoutBtn = document.querySelector("#logout");

// create modal object so modal can be hidden, and modal reference to the node itself
let modal = new bootstrap.Modal(document.getElementById('loginModal'));
const modalReference = document.getElementById('loginModal');

// when modal hidden, remove focus
modalReference.addEventListener('hidden.bs.modal', function () {
    // Set focus to the body or any other element you'd like
    document.body.focus();
});

// On clicks
logoutBtn.addEventListener("click", () => {
    logout();
});

loginBtn.addEventListener("click", () => {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    logout();
});


submitBtn.addEventListener("click", () => {
    // Error message shit
    let error = false;
    let errorDiv = document.querySelector("#error");
    let errorMessage = "";

    // Input values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const age = document.querySelector("#age").value;
    const postalCode = document.querySelector("#postalCode").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    // Regex
    const nameReggie = /^[a-zA-Z]+$/;
    const emailReggie = /^\w+@[a-zA-Z]+\.[a-zA-Z]+$/;
    const postalReggie = /^[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$/;
    const phoneReggie = /^[0-9][0-9][0-9][ |-]?[0-9][0-9][0-9][ |-]?[0-9][0-9][0-9][0-9]$/

    // more Regex
    const checkForBlank = /^$/;
    const checkForSpace = / /;
    const checkForNotAZ = /[^A-Za-z]/;
    const checkForNotAZEmailEdition = /@.*[^A-Za-z|.].*/ // after the @ if there are any non alphabetical or non period characters

    // Validate name inputs
    // Add check for each kind of error
    if (!(nameReggie.test(firstName))) {
        errorMessage = "First name:\n";

        if (checkForBlank.test(firstName)) {
            errorMessage += "is blank\n";
        }

        if (checkForSpace.test(firstName)) {
            errorMessage += "has a space\n";
        }

        if (checkForNotAZ.test(firstName)) {
            errorMessage += "has a non alphabetical character\n";
        }

        error = true;

        document.querySelector("#firstName").value = "";
    }

    if (!(nameReggie.test(lastName))) {
        errorMessage = "Last name:\n";

        if (checkForBlank.test(lastName)) {
            errorMessage += "is blank\n";
        }

        if (checkForSpace.test(lastName)) {
            errorMessage += "has a space\n";
        }

        if (checkForNotAZ.test(lastName)) {
            errorMessage += "has a non alphabetical character\n";
        }

        error = true;

        document.querySelector("#lastName").value = "";
    }

    if (!error) {
        // Validate email inputs
        if (!(emailReggie.test(email))) {
            errorMessage = "Email must be entered as email@email.com\n";

            if (checkForNotAZEmailEdition.test(email)) {
                errorMessage += "and the domains must be alphabetical\n"
            }

            error = true;

            document.querySelector("#email").value = "";
        }
    }

    if (!error) {
        // Validate age
        if (age <= 0 || age >= 120) {
            errorMessage = "Age must be between 1-119 (inclusive)\n";
            error = true;

            document.querySelector("#age").value = "";
        }
    }

    if (!error) {
        // Validate postal code
        if (!(postalReggie.test(postalCode))) {
            errorMessage = "Postal format: X0X0X0 or X0X 0X0\n";
            error = true;

            document.querySelector("#postalCode").value = "";
        }
    }

    if (!error) {
        // Validate phone number
        if (!(phoneReggie.test(phoneNumber))) {
            errorMessage = "Phone number format whack\n";
            error = true;

            document.querySelector("#phoneNumber").value = "";
        }
    }



    errorDiv.innerText = errorMessage;

    if (!error) {
        modal.hide();
        displayUserMessage();
        createUser();
    }
});

function logout() {
    modal.hide();
    logoutBtn.style.display = "none";
    loginBtn.style.display = "block";
    document.querySelector(".offcanvas .card").style.display = "none";
    document.querySelector("#hello").style.display = "none";
}

function createUser() {
    document.querySelector("#displayFirstName").textContent = document.querySelector("#firstName").value;
    document.querySelector("#displayLastName").textContent = document.querySelector("#lastName").value;
    document.querySelector("#displayEmail").textContent = document.querySelector("#email").value;
    document.querySelector("#displayAge").textContent = document.querySelector("#age").value;
    document.querySelector("#displayPostalCode").textContent = document.querySelector("#postalCode").value;
    document.querySelector("#displayPhoneNumber").textContent = document.querySelector("#phoneNumber").value;

    document.querySelector(".offcanvas .card").style.display = "block";
}

function displayUserMessage() {
    document.querySelector("#hello").style.display = "block";
    document.querySelector("#helloFirstName").textContent = "Hello, " + document.querySelector("#firstName").value;
    document.querySelector("#helloLastName").textContent = " " + document.querySelector("#lastName").value + "!";
}

logout();

// End of Lab 5 JS

// Weather widget

// Fetch weather data from OpenWeatherMap API
async function getWeatherData() {
    // not my api key, so feel free to take it lol
    // note to self: if you do start using your own key, please don't put it here :)
    const apiKey = "408910547897fd9d7029410128827a6d";
    const lat = 48.4329; // victoria, bc latitude
    const lon = -123.3693; // victoria bc longitude
    const units = "metric";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("An error occurred while fetching weather data: ", error);
    }
    
}


function displayWeatherData(data) {
    const temp = data.main.temp;
    const main = data.weather[0].main;
    const iconID = data.weather[0].icon;


    $("#weatherTemp").html(temp + "&deg;C");
    $("#weatherDescription").text(main);
    $("#weatherIcon").attr("src", `https://openweathermap.org/img/wn/${iconID}.png`);
}

async function loadWeatherData() {
    const data = await getWeatherData();
    displayWeatherData(data);
}

loadWeatherData();