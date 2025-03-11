// Make User class using ES6
class User {
    constructor(firstName, lastName, email, username, isTopTier, profileImg) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._username = username;
        this._isTopTier = isTopTier;
        this._profileImg = profileImg;

        this._htmlCard = `
            <div class="card" style="width: 24rem;">
            <img src="${profileImg}" class="card-img-top" alt="${firstName} ${lastName}'s profile picture">
            <div class="card-body">
                <h5 class="card-title">${firstName} ${lastName}</h5>
                <p class="card-text">Email: ${email}</p>
                <p class="card-text">Top tier? ${isTopTier}</p>
            </div>
            </div>
        `;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get username() {
        return this._username;
    }

    set username(username) {
        this._username = username;
    }

    get isTopTier() {
        return this._isTopTier;
    }

    set isTopTier(isTopTier) {
        this._isTopTier = isTopTier;
    }

    get profileImg() {
        return this._profileImg;
    }

    set profileImg(profileImg) {
        this._profileImg = profileImg;
    }

    get htmlCard() {
        return this._htmlCard;
    }

    set htmlCard(htmlCard) {
        this._htmlCard = htmlCard;
    }
}

// Admin Users
const fox = new User("Fox", "McCloud", "marthistrash@fucknintendo.org", "fox", true, "images/midterm/fox.webp");
const marth = new User("Marth", "", "fsmash@fucknintendo.org", "marth", true, "images/midterm/marth.webp");
const jigglypuff = new User("jigglypuff", "", "sixjumps@fucknintendo.org", "jigglypuff", true, "images/midterm/jigglypuff.webp");

// Regular Users
const falco = new User("Falco", "Lombardi", "dair@fucknintendo.org", "falco", false, "images/midterm/falco.webp");
const sheik = new User("Sheik", "", "notzelda@fucknintendo.org", "sheik", false, "images/midterm/sheik.webp");
const captainFalcon = new User("Captain", "Falcon", "smoketwojoints@fucknintendo.org", "falcon", false, "images/midterm/cf.webp");
const peach = new User("Princess", "Peach", "spintowin@fucknintendo.org", "peach", false, "images/midterm/peach.webp");
const iceClimbers = new User("Ice.", "Climbers", "wobble@fucknintendo.org", "iceclimbers", false, "images/midterm/ics.webp");
const pikachu = new User("Pikachu", "", "pikapika@fucknintendo.org", "pikachu", false, "images/midterm/pikachu.webp");
const yoshi = new User("Yoshi", "", "dinoboy@fucknintendo.org", "yoshi", false, "images/midterm/yoshi.webp");
const samus = new User("Samus", "Aran", "chargeshot@fucknintendo.org", "samus", false, "images/midterm/samus.png");
const luigi = new User("Luigi", "", "brother2@fucknintendo.org", "luigi", false, "images/midterm/luigi.webp");
const doctorMario = new User("Doctor", "Mario", "imarealdoctor@fucknintendo.org", "doc", false, "images/midterm/doc.webp");
const ganondorf = new User("Ganondorf", "", "woah@fucknintendo.org", "ganondorf", false, "images/midterm/ganon.webp");
const mario = new User("Mario", "", "brother1@fucknintendo.org", "mario", false, "images/midterm/mario.png");

// Array of Users
let users = [fox, marth, jigglypuff, falco, sheik, captainFalcon, peach, iceClimbers, pikachu, yoshi, samus, luigi, doctorMario, ganondorf, mario];
console.log(users);

// Other global variables
const loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
const loginBtn = document.querySelector("#loginBtn");
const usernameInput = document.querySelector("#usernameInput");


// Show modal on page load
document.addEventListener("DOMContentLoaded", () => {
    loginModal.show();
    // Fixes issues where pressing enter causes form submission
    // makes it so login button is pressed instead
    usernameInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents form submission if inside a form
            loginBtn.click(); // Triggers login button click
        }
    });
});

// Get text from modal and verify the user exists
loginBtn.addEventListener("click", () => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === usernameInput.value) {
            login();
            break;
        }
    };
});

function login() {
    const row = document.querySelector("div#cards.row");
    row.innerHTML = "";

    loginModal.hide();
    users.forEach(user => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("col", "m-3", "d-flex", "justify-content-center", "align-items-center");
        cardDiv.innerHTML = user.htmlCard;
        row.appendChild(cardDiv);
    });
}


