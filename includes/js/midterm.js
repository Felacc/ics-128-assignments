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

// Admin Users
const bobDobbs = new User("Bob", "Dobbs", "bobbyd@churchofthesubgenius.org", "jrdobbs", true, "images/userimg.png");
const markM = new User("Mark", "Mothersbaugh", "markm@churchofthesubgenius.org", "mothermarky", true, "images/userimg.png");
const mojoN = new User("Mojo", "Nixon", "mojonono@churchofthesubgenius.org", "mrmojo", true, "images/userimg.png");

// Regular Users
const zoogzR = new User("Zoogz", "Rift", "zoogzy@churchofthesubgenius.org", "zoogzy", false, "images/userimg.png");
const paulM = new User("Paul", "Mavrides", "paulm@churchofthesubgenius.org", "paulm", false, "images/userimg.png");
const paulR = new User("Paul", "Reubens", "reubens@churchthesubgenius.org", "reubdawg", false, "images/userimg.png");
const davidB = new User("David", "Byrne", "callmedavidthewayitbyrnes@churchthesubgenius.org", "byrneysanders", false, "images/userimg.png");
const rCrumb = new User("R.", "Crumb", "crumb@churchthesubgenius.org", "cookiecrumb", false, "images/userimg.png");
const markH = new User("Mark", "Hosler", "hosler@churchthesubgenius.org", "hosler", false, "images/userimg.png");
const davidW = new User("David", "Wills", "weathermanwills@churchthesubgenius.org", "theweatherman", false, "images/userimg.png");
const peterC = new User("Peter", "Conheim", "conheim@churchthesubgenius.org", "conheim", false, "images/userimg.png");
const jonL = new User("Jon", "Leidecker", "wobbly@churchthesubgenius.org", "wobbly", false, "images/userimg.png");
const ericW = new User("Eric", "Wilson", "sublimeeric@churchthesubgenius.org", "sublimeeric", false, "images/userimg.png");
const budG = new User("Bud", "Gaugh", "sublimebud@churchthesubgenius.org", "sublimebud", false, "images/userimg.png");
const jakobN = new User("Jakob", "Nowell", "sublimejakob@churchthesubgenius.org", "sublimejakob", false, "images/userimg.png");