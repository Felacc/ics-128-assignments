function loadWelcome() {
    $("#welcomeDiv").removeClass("d-none").hide().show(1250).slideDown("slow");
}

function loadQuiz(name) {
    let finished = false;

    let timeElapsed = 0;
    let stopwatch = setInterval( () => {
        timeElapsed++;
        $("#stopwatch").text(timeElapsed);
    }, 1000);

    $("#welcomeDiv").hide();
    $("#testerName").text(name);
    $("#quizContent").removeClass("d-none").hide().fadeIn(500);

    
    $("#submit").click(() => {
        if (finished) {
            clearInterval(stopwatch); // stops timer
        }

    });

}

$(document).ready(function () {
    loadWelcome();
    
    $("#begin").click(function () {
        const name = $("#name").val().trim();

        if (name) {
            loadQuiz(name);
        } else {
            $("#errorMessage").html('<p class="text-warning fs-5 mt-3">Please enter your name :)</p>');
        }
    });

    // Pressing enter while in the input field registers as a button click for the begin button
    $("#name").keypress(function (event) {
        if (event.which === 13) { // 13 is the Enter key
            $("#begin").click(); // Trigger button click
        }
    });
});
