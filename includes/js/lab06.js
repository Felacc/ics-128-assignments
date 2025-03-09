class Hotel {
    constructor(name, city, rooms, booked, gym) {
        this._name = name;
        this._city = city;
        this._rooms = rooms;
        this._booked = booked;
        this._gym = gym;
        this._roomTypes = [];
        this._swimmingPool = false;
        this._airportShuttle = false;
        this._restaurants = new Map();
        this._ID = Math.floor(Math.random() * 1000); // used so I can differentiate between cards when targeting dom nodes
    }

    // getters and setters
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get city() {
        return this._city;
    }

    set city(city) {
        this._city = city;
    }

    get rooms() {
        return this._rooms;
    }

    set rooms(rooms) {
        this._rooms = rooms;
    }

    get booked() {
        return this._booked;
    }

    set booked(booked) {
        this._booked
    }

    get gym() {
        return this._gym;
    }

    set gym(gym) {
        this._gym = gym;
    }

    get restaurants() {
        return this._restaurants;
    }

    get roomTypes() {
        return this._roomTypes;
    }

    get airportShuttle() {
        return this._airportShuttle;
    }

    get swimmingPool() {
        return this._swimmingPool;
    }

    get ID() {
        return this._ID;
    }

    bookRoom() {
        this._booked += 1;
        const availRooms = this._rooms - this._booked;
        alert(`The room was successfully booked. Number of available rooms left: ${availRooms}`)

    }

    cancelRoom() {
        this._booked -= 1;
        const availRooms = this._rooms - this._booked;
        alert(`The room booking was successfully. Number of available rooms left: ${availRooms}`)
    }
}

class Resort extends Hotel {
    constructor(name, city, rooms, booked, gym, resortType, beachFront, kidsClub) {
        super(name, city, rooms, booked, gym);
        this._resortType = resortType;
        this._beachFront = beachFront;
        this._kidsClub = kidsClub;
    }

    get resortType() {
        return this._resortType;
    }

    set resortType(resortType) {
        this._resortType = resortType;
    }

    get beachFront() {
        return this._beachFront;
    }

    set beachFront(beachFront) {
        return this._beachFront = beachFront;
    }

    get kidsClub() {
        return this._kidsClub;
    }

    set kidsClub(kidsClub) {
        this._kidsClub = kidsClub;
    }
}

// display hotel info
function getHotelCardHTML(hotel) {
    // create string literal with html p tags for displaying all the restaurants
    let restaurantsInfo = ``;
    let counter = 1;
    for (let [key, value] of hotel.restaurants) {
        restaurantsInfo += `<p class="card-text"><b>${counter}. ${key}</b> / Type / <b>${value}</b></p>`
        counter++;
    }

    // create string containing html with all hotel info
    const hotelInfo = `
        <div class="card" style="width: 24rem;">
            <div class="card-body">
                <h4 class="card-title">${hotel.name}</h4>
                <h5 class="card-text text-decoration-underline">Hotel Info</h5>
                <p class="card-text">The <b>${hotel.name} located in ${hotel.city}</b></p>
                <p class="card-text">The available room types are: ${hotel.roomTypes}</p>
                <p class="card-text"><b>Hotel has a shuttle?</b> ${hotel.airportShuttle}</p>
                <p class="card-text"><b>Hotel has a swimming pool?</b> ${hotel.swimmingPool}</p>
                <b class="card-text">Hotel has ${hotel.restaurants.size} restaurants each with a different theme:</b>
                ${restaurantsInfo}
                <p id="bookedRooms" class="card-text text-success">There are ${hotel.booked} / ${hotel.rooms} rooms booked.</p>
                <a href="#" id="book${hotel.ID}" class="btn btn-primary">Book Room</a>
                <a href="#" id="cancel${hotel.ID}" class="btn btn-danger">Cancel Room</a>
            </div>
        </div>
`       ;
    return hotelInfo;
}

function getResortCardHTML(resort) {
    // create string containing html with all hotel info
    const resortInfo = `
        <div class="card" style="width: 24rem;">
            <div class="card-body">
                <h4 class="card-title">${resort.name}</h4>
                <h5 class="card-text text-decoration-underline">Resort Info</h5>
                <p class="card-text">The <b>${resort.name} located in ${resort.city}</b></p>
                <p class="card-text"><b>Resort type: </b> ${resort.resortType}</p>
                <p class="card-text"><b>Is it on the beach?</b> ${resort.beachFront}</p>
                <p class="card-text"><b>Does it have a kids club?</b> ${resort.kidsClub}</p>
                <p id="bookedRooms" class="card-text text-success">There are ${resort.booked} / ${resort.rooms} rooms booked.</p>
                <a href="#" id="book${resort.ID}" class="btn btn-primary">Book Room</a>
                <a href="#" id="cancel${resort.ID}" class="btn btn-danger">Cancel Room</a>
            </div>
        </div>
        `;
    return resortInfo;
}

// used to display the js generated cards onto the page
// takes an array of hotel objects as argument
function displayCards(hotels) {
    let cardsHTML = ``;
    for (let i = 0; i < hotels.length; i++) {
        if (hotels[i] instanceof Resort) {
            cardsHTML += getResortCardHTML(hotels[i]);
        } else {
            cardsHTML += getHotelCardHTML(hotels[i]);
        }
    }
    const main = document.querySelector("main");
    main.innerHTML = cardsHTML;
}

// add event listener on to main to detect all click events
// grabs the targeted dom node of the click event
// and uses that node's id to decide what to do
// using this technique used in parallel with my hotel ID's that I added I am able to "easily" target the buttons I want to on each card
// this prevents me from having issues where my cards update each other's information
document.querySelector("main").addEventListener("click", (event) => {
    const target = event.target;

    for (let i = 0; i < hotels.length; i++) {
        if (target.id === `book${hotels[i].ID}`) {
            hotels[i].bookRoom();
            displayCards(hotels);
        }
        if (target.id === `cancel${hotels[i].ID}`) {
            hotels[i].cancelRoom();
            displayCards(hotels);
        }
    }
});

// create array of hotels to keep track of how many hotel cards i am displaying
let hotels = [];

// create hotel object and set additional properties
const felixHotel = new Hotel("Felix Hotel", "Olympia", 155, 135, true);
felixHotel.roomTypes = ["Regular", "Double", "Suite"];
felixHotel.swimmingPool = true;
felixHotel.airportShuttle = true;
felixHotel.restaurants.set("Donde La Arepa", "Colombian");
felixHotel.restaurants.set("Casa Ramen", "Japanese");
felixHotel.restaurants.set("Pizza Hermosa", "Italian");
hotels.push(felixHotel); // add to array of hotels

// test to show that it will auto generate with any new hotel object
// const newHotel = new Hotel("abc", "deg", 1234, 123, true);
// hotels.push(newHotel); // add to array of hotels

// create resort object
const felixResort = new Resort("Felix Resort", "Seattle", 1555, 1355, true, "family", true, false);
hotels.push(felixResort); // add resort to hotels array
displayCards(hotels); // display the generated cards
