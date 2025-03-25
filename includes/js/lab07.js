function loadQuiz(name) {
    $("#welcomeDiv").hide();
    $("#testerName").text(name);
    $("#quizContent").removeClass("d-none");
    $("#quizContent").css("display", "block")
}

$(document).ready(function () {
    $("#quizContent").hide(); // ensure quiz is hidden

    // Pressing enter while in the input field registers as a button click for the begin button
    $("#name").keypress(function (event) {
        if (event.which === 13) { // 13 is the Enter key
            $("#begin").click(); // Trigger button click
        }
    });

    $("#begin").click(function () {
        const name = $("#name").val().trim();

        if (name) {
            loadQuiz(name);
        } else {
            $("#errorMessage").html('<p class="text-warning fs-5 mt-3">Please enter your name :)</p>');
        }
    });
});
