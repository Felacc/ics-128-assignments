class QuizQuestion {
    static questionCounter = 0;
    constructor(question, answerA, answerB, answerC, answerD) {
        this._question = question;
        this._answerA = answerA;
        this._answerB = answerB;
        this._answerC = answerC;
        this._answerD = answerD;

        this._questionNumber = ++QuizQuestion.questionCounter;
    }

    html() {
        return `<div class="row mb-3">
                    <h3 class="text-warning">${this._questionNumber}. ${this._question}</h3>
                    <fieldset>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}A">
                            <label class="form-check-label" for="${this._questionNumber}A">
                                A. ${this._answerA}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}B">
                            <label class="form-check-label" for="${this._questionNumber}B">
                                B. ${this._answerB}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}C">
                            <label class="form-check-label" for="${this._questionNumber}C">
                                C. ${this._answerC}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}D">
                            <label class="form-check-label" for="${this._questionNumber}D">
                                D. ${this._answerD}
                            </label>
                        </div>
                    </fieldset>
                </div>`
    }

}

class Timer {
    constructor() {
        this.timeElapsed = 0;
        this.timer;
    }
    startTimer() {
        this.timer = setInterval(() => {
            this.timeElapsed++;
            const minutes = Math.floor(this.timeElapsed / 60);
            const seconds = this.timeElapsed % 60;
            $("#timer").text(`${minutes}:${seconds}`);
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
    }
}

const loadWelcome = () => {
    $("#welcomeDiv").removeClass("d-none").hide().show(1250).slideDown("slow");
}

const loadQuiz = (name) => {
    // Create list of quiz questions
    const quizList = [
        new QuizQuestion("How many?", 1, 2, 3, 4),
        new QuizQuestion("If so?", "True", "False", "Maybe", "All of the above"),
        new QuizQuestion("What is 9+10?", 19, 91, 21, 910),
        new QuizQuestion("Is Dr. Mario a real doctor?", "Yes", "No", "Yes, he has a stethoscope", "Answer number 4"),
        new QuizQuestion("I wrote this quiz using Vim because my up arrow key is broken", "Yes", "No", "Using Vim is cool", "Actually I'm just using Vim motions in VSCode, and it is hard")
    ];
    // Loop through list and generate quiz questions
    for (let i = 0; i < quizList.length; i++) {
        $("#quizContent form").append(quizList[i].html());
    }

    // Start timer
    const timer = new Timer();
    timer.startTimer();

    // Hide welcome banner, greet user, and bring up quiz
    $("#welcomeDiv").hide();
    $("#testerName").text(name);
    $("#quizContent").removeClass("d-none").hide().fadeIn(1000);


    $("#submit").click(() => {
        timer.stopTimer();
    });
}

const run = () => {
    $(document).ready(function () {
        loadWelcome();

        $("#begin").click(function () {
            const name = $("#name").val().trim();
            // if the user enters a valid string it results as true
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
}

run();

