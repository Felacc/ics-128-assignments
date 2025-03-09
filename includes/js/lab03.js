// EXERCISE 1.1

function counter(string, char) {
    // find number of occurrences of the character in the string
    let numOfChar = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i).toLowerCase() == char.toLowerCase()) {
            numOfChar += 1;
        }
    }
    return numOfChar;
}

const counterBtn = document.querySelector("#counter-btn");
// on button click display the results from the counter of each input
counterBtn.addEventListener("click", () => {
    // get strings in input 1 and input 2
    let input1 = document.querySelector("#spaces-input").value;
    let input2 = document.querySelector("#letter-input").value;

    // calculate num of occurrences for each input
    let numOfSpaces = counter(input1, " ");
    let numOfLetter = counter(input2, "A");

    // grab tags to display results to
    let spacesAreIs = document.querySelector("#spaces-text-are-is");
    let spacesNum = document.querySelector("#spaces-text-num");
    let spacesSpaceSpaces = document.querySelector("#spaces-text-space-spaces");
    let letterAreIs = document.querySelector("#letter-text-are-is");
    let letterNum = document.querySelector("#letter-text-num");
    let letterLetterLetters = document.querySelector("#letter-text-letter-letters");

    // display number of spaces to card
    if (numOfSpaces == 1) {
        spacesAreIs.textContent = "is";
        spacesNum.textContent = numOfSpaces;
        spacesSpaceSpaces.textContent = "space";
    } else {
        spacesAreIs.textContent = "are";
        spacesNum.textContent = numOfSpaces;
        spacesSpaceSpaces.textContent = "spaces";
    }

    // display number of letter to card
    if (numOfLetter == 1) {
        letterAreIs.textContent = "is";
        letterNum.textContent = numOfLetter;
        letterSpaceSpaces = "a";
    } else {
        letterAreIs.textContent = "are";
        letterNum.textContent = numOfLetter;
        letterLetterLetters.textContent = "a's"
    }
});

// EXERCISE 1.2
// step 1
var labDay = new Date(2022, 2, 1);
// step 2
console.log(labDay);
// step 3
console.log(labDay.toDateString());
// step 4
console.log(labDay.toTimeString());
// step 5
console.log(labDay.getTime());
// step 6
console.log(labDay.getDate() + " / " + labDay.getMonth() + " / " + labDay.getFullYear());
// step 7
console.log(labDay.getHours() + " : " + labDay.getMinutes());
// step 8
var now = Date.now(); // same as (new Date()).getTime()
// step 9
console.log(now);
// step 10
var errorDate = new Date(2016, 33, 1);
// step 11
console.log(errorDate);
// step 12
var invalidDate = new Date("Funuary 3, 2018");
// step 13
console.log(invalidDate);
// step 14
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// step 15
console.log(labDay.toLocaleString('de-DE', options));
// step 16

// step 17
var msDay = 24 * 60 * 60 * 1000;
// step 18
var mslabDay = now;
// step 19
labDay = new Date(mslabDay + msDay);
// step 20
console.log(labDay);



function daysInMonth(date) {
    let month = date.getMonth();
    if (month === 3 || month === 5 || month === 8 || month === 10) { // april, june, sept, nov
        return 30;
    } else if (month === 1) { // feb
        if (isLeapYear(year)) {
            return 29;
        } else {
            return 28;
        }
    } else { // all other months
        return 31;
    }
}

function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }

    return false;
}

function moveDayForward(date) {
    let msDay = 24 * 60 * 60 * 1000;
    let msCurrentDay = date.getTime();
    return new Date(msCurrentDay + msDay);
}

function calculateWorkDays(date) {
    console.log(date);


    let monthLength = daysInMonth(date.getFullYear(), date.getMonth());
    let dayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let workdays = 0;
    console.log(workdays);
    for (let i = 0; i < monthLength; i++) {
        if (dayOfMonth.getDay() === 0 || dayOfMonth.getDay() === 6) {
            dayOfMonth = moveDayForward(dayOfMonth);
        } else {
            workdays++;
            dayOfMonth = moveDayForward(dayOfMonth);
        }
    }
    return workdays;
}

// display salary results on button click
const dateBtn = document.querySelector("#wage-button");
dateBtn.addEventListener("click", () => {
    let dateInput = document.querySelector("#date-input").value;
    let date = new Date(dateInput);
    let year = date.getFullYear();
    let month = date.getMonth();
    let minWage = 17.4;
    let salary = minWage * 8 * calculateWorkDays(date);


    // Display date here:
    document.querySelector("#current-date").textContent = dateInput;
    document.querySelector("#current-date").style.color = "red";

    // How many days in the month:
    document.querySelector("#total-days").textContent = daysInMonth(date);
    document.querySelector("#total-days").style.color = "blue";

    // How many work days:
    document.querySelector("#work-days").textContent = calculateWorkDays(date);
    document.querySelector("#work-days").style.color = "teal";

    // BC Minimum Wage:
    document.querySelector("#minimum-wage").textContent = "$" + minWage.toFixed(2);
    document.querySelector("#minimum-wage").style.color = "green";

    // Salary for the month (8hours):
    document.querySelector("#salary").textContent = "$" + salary.toFixed(2);
    document.querySelector("#salary").style.color = "orange";

});


//  PART 2
function isItInRange(val) {

    if (val < 2) {
        document.querySelector("#less-than-greater-than").textContent = "Your number is less than 2:";

    } else if (val > 2) {
        document.querySelector("#less-than-greater-than").textContent = "Your number is greater than 2:";
    } else {
        document.querySelector("#less-than-greater-than").textContent = "Your number is 2:";
    }

    document.querySelector("#number-val").textContent = val;
    document.querySelector("#number-val").style.color = "blue";
    // i don't really understand what we were supposed to do for this part at all lol
    try {
        if (val <= 0) {
            throw new Error("The value must be greater than 0");
        }

        if (val < 2) {
            throw new Error("The value is less than 2");
        }

        if (val > 2) {
            document.querySelector("#error-message").textContent = "The value is over 2";

        }
        if (val >= 4) {
            document.querySelector("#error-message").textContent = "The value is in the correct range";

        }
        if (val == 2) {
            document.querySelector("#error-message").textContent = "You have entered the mysterious space, I'm not sure what to write here";

        }

    } catch (err) {
        document.querySelector("#error-message").textContent = err;
    }
}

const numberBtn = document.querySelector("#number-button");
numberBtn.addEventListener("click", () => {
    let number = document.querySelector("#number-input").value;
    document.querySelector("#number-val-bold").textContent = number;
    document.querySelector("#number-val-bold").style.fontWeight = "bold";
    isItInRange(number);
});


