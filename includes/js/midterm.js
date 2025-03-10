// Make User class using ES6
class User {
    constructor(firstName, lastName, email, username, isAdmin, profileImg) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.isAdmin = isAdmin;
        this.profileImg = profileImg;

        this.htmlCard = `
            <div class="card" style="width: 24rem;">
            <img src="${profileImg}" class="card-img-top" alt="${firstName} ${lastName}'s profile picture">
            <div class="card-body">
                <h5 class="card-title">${firstName} ${lastName}</h5>
                <p class="card-text">Email ${email}</p>
                <p class="card-text">isAdmin ${isAdmin}</p>
            </div>
            </div>
        `;
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
const ganondorf = new User("Ganondorf", "", "iwishiwascaptainfalcon@fucknintendo.org", "ganondorf", false, "images/midterm/ganon.webp");
const mario = new User("Mario", "", "brother1@fucknintendo.org", "mario", false, "images/midterm/mario.png");

// Array of Users
let users = [fox, marth, jigglypuff, falco, sheik, captainFalcon, peach, iceClimbers, pikachu, yoshi, samus, luigi, doctorMario, ganondorf, mario];
console.log(users);


// Generate user cards
// let cardTemplate = `
// <div class="card" style="width: 18rem;">
//   <img src="${profileImg}" class="card-img-top" alt="${firstName} ${lastName}'s profile picture">
//   <div class="card-body">
//     <h5 class="card-title">${firstName} ${lastName}</h5>
//     <p class="card-text">Email ${email}</p>
//     <p class="card-text">isAdmin ${isAdmin}</p>
//   </div>
// </div>
// `;




// Show modal on page load
document.addEventListener("DOMContentLoaded", function () {
    const loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
    loginModal.show();

    // Fixes issues where pressing enter causes form submission
    // makes it so login button is pressed instead
    document.querySelector("#usernameInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents form submission if inside a form
            document.querySelector("#loginBtn").click(); // Triggers login button click
        }
    });
});

// Get text from modal and verify the user exists
const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", () => {
    const usernameInput= document.querySelector("#usernameInput").value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === usernameInput) {
            login();
            break;
        }
    };
});

function login() {
    const row = document.querySelector("div#cards.row");
    row.innerHTML = "";
    users.forEach(user => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("col", "m-3", "d-flex", "justify-content-center", "align-items-center");
        cardDiv.innerHTML = user.htmlCard;
        row.appendChild(cardDiv);
    });
}


