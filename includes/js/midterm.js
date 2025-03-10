// Make User class using ES6
class User {
    constructor(firstName, lastName, email, password, isAdmin, profileImg) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.profileImg = profileImg;
    }
}

// Admin Users
const dobbsB = new User("Bob", "Dobbs", "dobbsb@churchofthesubgenius.org", "jrdobbs", true, "images/userimg.png");
const mothersbaughM = new User("Mark", "Mothersbaugh", "mothersbaughm@churchofthesubgenius.org", "mothermarky", true, "images/userimg.png");
const nixonM = new User("Mojo", "Nixon", "nixonm@churchofthesubgenius.org", "mrmojo", true, "images/userimg.png");

// Regular Users
const riftZ = new User("Zoogz", "Rift", "riftz@churchofthesubgenius.org", "zoogzy", false, "images/userimg.png");
const mavridesP = new User("Paul", "Mavrides", "mavridesp@churchofthesubgenius.org", "paulm", false, "images/userimg.png");
const reubensP = new User("Paul", "Reubens", "reubensp@churchthesubgenius.org", "reubdawg", false, "images/userimg.png");
const byrneD = new User("David", "Byrne", "byrned@churchthesubgenius.org", "byrneysanders", false, "images/userimg.png");
const crumbR = new User("R.", "Crumb", "crumbr@churchthesubgenius.org", "cookiecrumb", false, "images/userimg.png");
const hoslerM = new User("Mark", "Hosler", "hoslerm@churchthesubgenius.org", "hosler", false, "images/userimg.png");
const willsD = new User("David", "Wills", "willsd@churchthesubgenius.org", "theweatherman", false, "images/userimg.png");
const conheimP = new User("Peter", "Conheim", "conheimp@churchthesubgenius.org", "conheim", false, "images/userimg.png");
const leideckerJ = new User("Jon", "Leidecker", "leideckerj@churchthesubgenius.org", "wobbly", false, "images/userimg.png");
const wilsonE = new User("Eric", "Wilson", "wilsone@churchthesubgenius.org", "sublimeeric", false, "images/userimg.png");
const gaughB = new User("Bud", "Gaugh", "gaughb@churchthesubgenius.org", "sublimebud", false, "images/userimg.png");
const nowellJ = new User("Jakob", "Nowell", "nowellj@churchthesubgenius.org", "sublimejakob", false, "images/userimg.png");

// Array of Users
let users = [dobbsB, mothersbaughM, nixonM, riftZ, mavridesP, reubensP, byrneD, crumbR, hoslerM, willsD, conheimP, leideckerJ, wilsonE, gaughB, nowellJ];
console.log(users);


// Show modal on page load
document.addEventListener("DOMContentLoaded", function () {
    const loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
    loginModal.show();

    // Fixes issues where pressing enter causes form submission
    // makes it so login button is pressed instead
    document.querySelector("#emailInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents form submission if inside a form
            document.querySelector("#loginBtn").click(); // Triggers login button click
        }
    });

    // Fixes issues where pressing enter causes form submission
    // makes it so login button is pressed instead
    document.querySelector("#passwordInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents form submission if inside a form
            document.querySelector("#loginBtn").click(); // Triggers login button click
        }
    });

});

// Get text from modal and verify the user exists
const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", () => {
    const emailInput = document.querySelector("#emailInput").value;
    const passwordInput = document.querySelector("#passwordInput").value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === emailInput && users[i].password === passwordInput) {
            alert("SUCCESS");
            break;
        }
    };
});


