/*
INSTRUCTIONS:
1.  In the "Username:" text box enter the username of either an admin or a regular user

    Admin Usernames: fox, marth, puff

    Regular Usernames: falco, sheik, captainFalcon, peach, iceClimbers, pikachu, yoshi, samus, luigi, doctorMario, ganondorf, mario

    Note: Uses regex to validate username

2.  View content displayed to you...

    Regular Users: - cards for each admin and your own cards

    Admin Users: - cards for all users
                 - are able to delete cards for each user that isn't an admin (user ranks automatically adjust)
                 - are able to adjust the ranks of regular users by pressing rank up and down buttons (the chevrons)
                    * doesn't allow you to set rank higher than an admin and doesn't allow rank lower than 15


3. You can login to another user by pressing the Choose a Character button on the navbar


REFLECTION:

Doing this project I feel that I learned how to better use ES6 and incorporate my object-oriented programming skills into writing JavaScript.
I'm pretty happy with how this project came along because I think I did a better job with using scope and keeping all my logic within my classes,
than I have previously.

One struggle I think I have (created for myself) is complexity. My program does some things weirdly. 
For example how I initialize the ranks is kinda silly. Using a global counter variable (called currentRank) that increments everytime a user object is created.
This made it so I had to sort the users array by rank every time I generated the cards because of a change in ranks or a deleted user. 

Another weird thing that happens because of this is that my admin users MUST be instantiated before all other users. Because otherwise their ranks will not be 1-3,
and they will be treated as regular user in some cases. The point is, the order that user objects are instantiated matters and that's weird (and also absolutely a
result of my bad design choices).

There are definitely more features I wish I added and code that I wish I cleaned up, but I need to take a pause on this project for now and work on other things.

I still have a lot to learn in JS. Especially regarding making better design choices along the way, this would make adding more features less taxing.

P.S. 
I didn't really use any async functions or do any destructuring because I couldn't really think of a time to use either along the way.
And I'm just hoping that wasn't a requirement, because I can't really tell from the rubric.

*/




// Global rank variable for users - users must be instantiated in order of rank
let currentRank = 1;

// Global DOM variables
const loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
const loginBtn = document.querySelector("#loginBtn");
const usernameInput = document.querySelector("#usernameInput");
const row = document.querySelector("div#cards.row"); // row that contains cards

// Make User class using ES6
class User {
    constructor(firstName, lastName, email, username, isAdmin, profileImg) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._username = username;
        this._isAdmin = isAdmin;
        this._profileImg = profileImg;
        this._rank = currentRank;
        this._bestMoves = ["best", "moves", "currently unavailable"];
        this._deleted = false;

        currentRank++; // increment global rank var
    }

    // Getters and Setters
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
                <li id="bestMove">${bestMoves[0]}</li>
                <li id="bestMove">${bestMoves[1]}</li>
                <li id="bestMove">${bestMoves[2]}</li>
            </ol>
        `;
    }

    get rank() {
        return this._rank;
    }

    set rank(rank) {
        this._rank = rank;
    }

    get deleted() {
        return this._deleted;
    }

    set deleted(deleted) {
        this._deleted = deleted;
    }


    generateCharacterCard() {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("col", "m-3", "d-flex", "justify-content-center", "align-items-center");
        cardDiv.innerHTML =
            `<div id="${this.username}" class="card" style="width: 24rem;">
                    <img src="${this.profileImg}" class="card-img-top" alt="${this.firstName} ${this.lastName}'s profile picture">
                    <div class="card-body">
                        <h5 class="card-title"><span id="thisName">${this.firstName} ${this.lastName}</span></h5>
                        <p class="card-text">Username: <span id="username">${this.username}</span></p>
                        <p class="card-text">Email: <span id="email">${this.email}</span></p>
                        <p class="card-text">User Type: <span id="isAdmin">${this.constructor.name}</span></p>
                        <p class="card-text">Rank: <span id="rank">${this.rank}</span></p>
                        <p class="card-text">Best Moves: <br>
                            <span id="bestMoves">${this.bestMoves}</span>
                        </p>
                        <div id="btnContainer" class="container-fluid d-flex justify-content-between p-0"> 
                            <div id="rankBtns${this.username}" class="container p-0"> 
                                <button id="rankUpBtn${this.username}" class="btn btn-dark"><i class="bi bi-chevron-up fs-5"></i></button>
                                <button id="rankDownBtn${this.username}" class="btn btn-dark"><i class="bi bi-chevron-down fs-5"></i></button>
                            </div>
                            <button id="delBtn${this.username}" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>`;
        return cardDiv;
    }

    colorCharacterCard(card) {
        card.querySelector("#thisName").style.color = "tomato";
        card.querySelector("#username").style.color = "mediumseagreen";
        card.querySelector("#email").style.color = "dodgerblue";
        card.querySelector("#isAdmin").style.color = "violet";
        card.querySelector("#rank").style.color = "mediumseagreen";
        const bestMoves = card.querySelectorAll("#bestMove");

        bestMoves.forEach((move) => {
            move.style.color = "yellow";
        })
    }

    removeCards() {
        // Remove potential html from previous logins and hide login modal
        row.innerHTML = "";
        loginModal.hide();
    }

    removeDeleteBtn(user) {
        const delBtn = document.querySelector("#delBtn" + user.username);
        delBtn.style.display = "none";
    }

    removeRanksBtns(user) {
        const rankBtnsContainer = document.querySelector("#rankBtns" + user.username);
        rankBtnsContainer.style.display = "none";
    }

    // Shows only themselves and admins for since basic user role
    login(users) {
        this.removeCards();
        users.forEach(user => {
            if (user === this || user.isAdmin) {
                const cardDiv = user.generateCharacterCard();
                this.colorCharacterCard(cardDiv);
                row.appendChild(cardDiv);
                this.removeDeleteBtn(user);
                this.removeRanksBtns(user);

            }
        });
    }
}

class Admin extends User {
    constructor(firstName, lastName, email, username, isAdmin, profileImg) {
        super(firstName, lastName, email, username, isAdmin, profileImg);
    }



    // shows all users
    login(users) {
        super.removeCards();
        users.sort((a, b) => a.rank - b.rank);
        users.forEach(user => {
            if (!(user.deleted)) {
                const cardDiv = user.generateCharacterCard();
                super.colorCharacterCard(cardDiv);
                row.appendChild(cardDiv);

                // If user is not current user
                // and is not an admin
                // add delete button
                if (!(user.isAdmin)) {
                    this.addDeleteBtn(user, users);
                    this.addRankBtns(user, users);


                } else {
                    super.removeDeleteBtn(user);
                    super.removeRanksBtns(user);

                }
            }
        });
    }

    addDeleteBtn(user, users) {
        const delBtn = document.querySelector("#delBtn" + user.username);
        delBtn.style.display = "block";

        delBtn.addEventListener("click", () => {
            const userCard = document.querySelector("#" + user.username);
            userCard.remove();
            user.deleted = true;

            // Update ranks of remaining users
            users.forEach(u => {
                if (!u.deleted && u.rank > user.rank) {
                    u.rank--; // Increase rank of users ranked lower
                }
            });

            this.login(users); // login again to regenerate cards
        });
    }

    addRankBtns(user, users) {
        const rankBtnsContainer = document.querySelector("#rankBtns" + user.username);
        rankBtnsContainer.style.display = "block";

        const rankUpBtn = document.querySelector("#rankUpBtn" + user.username);
        const rankDownBtn = document.querySelector("#rankDownBtn" + user.username);

        // 4 is the highest rank a normal user can have (admin user ranks cant be changed)
        if (!(user.rank === 4)) {
            rankUpBtn.addEventListener("click", () => {
                // Update rank of user 1 rank above
                for (let i = 1; i <= users.length; i++) {
                    if (users[i].rank === user.rank - 1) {
                        users[i].rank++; // decrease rank of user above (higher rank is worse)
                        break;
                    }
                }

                user.rank--; //  increase rank of user (lower rank is better)
                this.login(users); // login again to regenerate cards
            });
        }

        // 15 is the lowest rank a user can have
        if (!(user.rank === 15)) {
            rankDownBtn.addEventListener("click", () => {
                // Update rank of user 1 rank below
                for (let i = 1; i <= users.length; i++) {
                    if (users[i].rank === user.rank + 1) {
                        users[i].rank--; // increase rank of user above (lower rank is better)
                        break;
                    }
                }

                user.rank++; //  decrease rank of user (higher rank is worse)
                this.login(users); // login again to regenerate cards
            });
        }
    }
}

// Admin Users
const fox = new Admin("Fox", "McCloud", "marthistrash@fucknintendo.org", "fox", true, "images/midterm/fox.webp");
fox.bestMoves = ["Up Smash", "Drill", "Shine"];

const marth = new Admin("Marth", "", "fsmash@fucknintendo.org", "marth", true, "images/midterm/marth.webp");
marth.bestMoves = ["Forward Smash", "Neutral Air", "Down Tilt"];

const jigglypuff = new Admin("Jigglypuff", "", "sixjumps@fucknintendo.org", "puff", true, "images/midterm/jigglypuff.webp");
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

const iceClimbers = new User("Ice.", "Climbers", "wobble@fucknintendo.org", "ics", false, "images/midterm/ics.webp");
iceClimbers.bestMoves = ["Wobbling :(", "I genuinely don't know", "Their wavedash looks cool though"];

const pikachu = new User("Pikachu", "", "pikapika@fucknintendo.org", "pika", false, "images/midterm/pikachu.webp");
pikachu.bestMoves = ["Neutral Air", "Down B", "Pika Pika"];

const yoshi = new User("Yoshi", "", "dinoboy@fucknintendo.org", "yoshi", false, "images/midterm/yoshi.webp");
yoshi.bestMoves = ["Throw Egg", "Hide in Egg", "Idle Animation"];

const samus = new User("Samus", "Aran", "chargeshot@fucknintendo.org", "samus", false, "images/midterm/samus.png");
samus.bestMoves = ["Energy Ball", "Her Recovery", "Neutral Air?"];

const luigi = new User("Luigi", "", "brother2@fucknintendo.org", "luigi", false, "images/midterm/luigi.webp");
luigi.bestMoves = ["His wavedash is nasty", "Down-left+Jump+R", "Down-right+Jump+R"];

const doctorMario = new User("Doctor", "Mario", "imarealdoctor@fucknintendo.org", "doc", false, "images/midterm/doc.webp");
doctorMario.bestMoves = ["His Doctorate", "Gives giant pills to patients", "Good work ethic"];

const ganondorf = new User("Ganondorf", "", "swagless@fucknintendo.org", "ganon", false, "images/midterm/ganon.webp");
ganondorf.bestMoves = ["Idk", "this character", "is shit imo"];

const mario = new User("Mario", "", "brother1@fucknintendo.org", "mario", false, "images/midterm/mario.png");
mario.bestMoves = ["It's fuckin", "Mario", "Brother..."];

// Array of Users
let users = [fox, marth, jigglypuff, falco, sheik, captainFalcon, peach, iceClimbers, pikachu, yoshi, samus, luigi, doctorMario, ganondorf, mario];


function run() {
    // Show modal on page load
    document.addEventListener("DOMContentLoaded", () => {
        loginModal.show();
        // Change text of main header in case they click out of modal:
        document.querySelector("#mainHeader").textContent = "Choose a Character :)";
        // Fixes issues where pressing enter causes form submission
        // makes it so login button is pressed instead
        usernameInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault(); // Prevents form submission if inside a form
                loginBtn.click(); // Triggers login button click
            }
        });
    });

    // if navbar login button is pressed
    document.querySelector("#navLoginBtn").addEventListener("click", () => {
        loginModal.show();
    });

    // Get text from modal and verify the user exists
    loginBtn.addEventListener("click", () => {
        // verify user input w/ regex
        const reggie = /^[0-9a-zA-Z]+$/;

        if (reggie.test(usernameInput.value)) {
            let userExists = false;
            for (let i = 0; i < users.length; i++) {
                if (users[i].username === usernameInput.value) {
                    userExists = true;
                    users[i].login(users);
                    document.querySelector("#mainHeader").textContent = 'Dashboard of SSBM Characters';
                    break;
                }
            }

            if (!(userExists)) {
                document.querySelector("div#errorMessage").textContent = "User not found";
            }
        } else {
            document.querySelector("div#errorMessage").textContent = "Please use only alphanumeric characters";
        }
    });
}

run();

// Potential additions:
// Add fix for when login modal is clicked out of
// Choose a character screen (like with icons)? - this would be cool (think menu)
// Add the ability to set ranks???? - each rank would become an object property and there would have to be a checksum to ensure that the rank is not taken, and not greater than the max # of users