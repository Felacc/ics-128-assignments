// Make User class using ES6
class User {
    constructor(firstName, lastName, email, username, isAdmin, profileImg) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.isAdmin = isAdmin;
        this.profileImg = profileImg;
    }
}

const bobDobbs = new User("Bob", "Dobbs", "bobbyd@churchofthesubgenius.org", "jrdobbs", true, "images/userimg.png");
console.log(bobDobbs);

