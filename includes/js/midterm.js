// Global rank variable for users - users must be instantiated in order of rank
let rank = 1;
// Make User class using ES6
class User {
    constructor(firstName, lastName, email, username, isAdmin, profileImg) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._username = username;
        this._isAdmin = isAdmin;
        this._profileImg = profileImg;
        this._rank = rank;
        this._bestMoves = "best moves currently unavailable";

        rank++; // increment global rank var
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

    get isAdmin() {
        return this._isAdmin;
    }

    set isAdmin(isAdmin) {
        this._isAdmin = isAdmin;
    }

    get profileImg() {
        return this._profileImg;
    }

    set profileImg(profileImg) {
        this._profileImg = profileImg;
    }

    get bestMoves() {
        return this._bestMoves;
    }

    set bestMoves(bestMoves) {
        this._bestMoves = `
            <ol>
                <li>${bestMoves[0]}</li>
                <li>${bestMoves[1]}</li>
                <li>${bestMoves[2]}</li>
            </ol>
        `;
    }

    get rank() {
        return this._rank;
    }
}

// Admin Users
const fox = new User("Fox", "McCloud", "marthistrash@fucknintendo.org", "fox", true, "images/midterm/fox.webp");
fox.bestMoves = ["Up Smash", "Drill", "Shine"];

const marth = new User("Marth", "", "fsmash@fucknintendo.org", "marth", true, "images/midterm/marth.webp");
marth.bestMoves = ["Forward Smash", "Neutral Air", "Down Tilt"];

const jigglypuff = new User("jigglypuff", "", "sixjumps@fucknintendo.org", "jigglypuff", true, "images/midterm/jigglypuff.webp");
jigglypuff.bestMoves = ["Rest", "Back Air", "Has 6 jumps"];

// Regular Users
const falco = new User("Falco", "Lombardi", "dair@fucknintendo.org", "falco", false, "images/midterm/falco.webp");
falco.bestMoves = ["Down Air", "Laser", "Shine"];

const sheik = new User("Sheik", "", "notzelda@fucknintendo.org", "sheik", false, "images/midterm/sheik.webp");
sheik.bestMoves = ["All the tilts", "Forward Air", "Needles"];

const captainFalcon = new User("Captain", "Falcon", "smoketwojoints@fucknintendo.org", "falcon", false, "images/midterm/cf.webp");
captainFalcon.bestMoves = ["Knee", "Stomp", "Falcon Punch"];

const peach = new User("Princess", "Peach", "spintowin@fucknintendo.org", "peach", false, "images/midterm/peach.webp");
peach.bestMoves = ["Down Smash", "Down Smash", "There's only Down Smash"];

const iceClimbers = new User("Ice.", "Climbers", "wobble@fucknintendo.org", "iceclimbers", false, "images/midterm/ics.webp");
iceClimbers.bestMoves = ["Wobbling :(", "I genuinely don't know", "Their wavedash looks cool though"];

const pikachu = new User("Pikachu", "", "pikapika@fucknintendo.org", "pikachu", false, "images/midterm/pikachu.webp");
pikachu.bestMoves = ["Neutral Air", "Down B", "Pika Pika"];

const yoshi = new User("Yoshi", "", "dinoboy@fucknintendo.org", "yoshi", false, "images/midterm/yoshi.webp");
yoshi.bestMoves = ["Throw Egg", "Hide in Egg", "Idle Animation"];

const samus = new User("Samus", "Aran", "chargeshot@fucknintendo.org", "samus", false, "images/midterm/samus.png");
samus.bestMoves = ["Energy Ball", "Her Recovery", "Neutral Air?"];

const luigi = new User("Luigi", "", "brother2@fucknintendo.org", "luigi", false, "images/midterm/luigi.webp");
luigi.bestMoves = ["His wavedash is nasty", "Down-left+Jump+R", "Down-right+Jump+R"];

const doctorMario = new User("Doctor", "Mario", "imarealdoctor@fucknintendo.org", "doc", false, "images/midterm/doc.webp");
doctorMario.bestMoves = ["His Doctorate", "Gives giant pills to patients", "Good work ethic"];

const ganondorf = new User("Ganondorf", "", "woah@fucknintendo.org", "ganondorf", false, "images/midterm/ganon.webp");
ganondorf.bestMoves = ["Idk", "this character", "is shit imo"];

const mario = new User("Mario", "", "brother1@fucknintendo.org", "mario", false, "images/midterm/mario.png");
mario.bestMoves = ["It's fuckin", "Mario", "Brother..."];
// Array of Users
let users = [fox, marth, jigglypuff, falco, sheik, captainFalcon, peach, iceClimbers, pikachu, yoshi, samus, luigi, doctorMario, ganondorf, mario];
console.log(users);

// Global DOM variables
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
            login(users[i]);
            break;
        }
    }
});

function generateCharacterCard(character) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col", "m-3", "d-flex", "justify-content-center", "align-items-center");
    cardDiv.innerHTML =
        `<div id="${character.username}" class="card" style="width: 24rem;">
                <img src="${character.profileImg}" class="card-img-top" alt="${character.firstName} ${character.lastName}'s profile picture">
                <div class="card-body">
                    <h5 class="card-title"><span id="characterName">${character.firstName} ${character.lastName}</span></h5>
                    <p class="card-text">Email: <span id="email">${character.email}</span></p>
                    <p class="card-text">Top tier? <span id="isAdmin">${character.isAdmin}</span></p>
                    <p class="card-text">Rank: <span id="rank">${character.rank}</span></p>
                    <p class="card-text">Best Moves: <br>
                        <span id="bestMoves">${character.bestMoves}</span>
                    </p>
                    <button id="delBtn" class="btn btn-danger">Delete</button>
                </div>
            </div>`;
    return cardDiv;
}

function login(user) {
    // Remove potential html from previous logins and hide login modal
    const row = document.querySelector("div#cards.row");
    row.innerHTML = "";
    loginModal.hide();

    // Display content based on user role
    // Shows all for admins
    // Shows only themselves and admins for everyone else
    if (user.isAdmin) {
        users.forEach(character => {
            const cardDiv = generateCharacterCard(character);
            row.appendChild(cardDiv);
        });
    } else {
        users.forEach(character => {
            if (character === user || character.isAdmin) {
                const cardDiv = generateCharacterCard(character);
                row.appendChild(cardDiv);
            }
        });
    }
}

function deleteUser(user) {
    let userCard = document.querySelector("#" + user.username);
    userCard.style.display = "none";
}


// What  I want to do :
// Add a delete function for admins
// Choose a character?
// 