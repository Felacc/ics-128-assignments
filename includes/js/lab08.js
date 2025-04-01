$(function () {
        $(".datepicker").datepicker();
    
} );

// Returns number of nights in the stay
function getNumberOfNights(arrivalDate, departureDate) {
    const oneDay = 1000 * 60 * 60 * 24; // 1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day
    const nights = (departureDate - arrivalDate) / oneDay;
    return nights;
}

$("#bookRoomBtn").on("click", function () {
    // Dates are represented as time in milliseconds that has elapsed since midnight January 1, 1970, UTC
    const arrivalDate = Date.parse($("#arrivalInput").val());
    const departureDate = Date.parse($("#departureInput").val());
    const nights = getNumberOfNights(arrivalDate, departureDate);
    const pricePerNight = $("input[name='rooms']:checked").val(); // value attribute in HTML is set to the rooms price per night
    const totalPrice = nights * pricePerNight;
    const resultsHTML = `
        <p class="text-white">Your length of stay is: ${nights} nights</p>
        <p class="text-white">$${pricePerNight}/night</p>
        <p class="text-white">Total: $${totalPrice}.00</p>
    `

    $("#results").html(resultsHTML);
});