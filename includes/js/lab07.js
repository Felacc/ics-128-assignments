/*
    Lot's I should have done differently. Should have stored answers as an array in my quiz objects,
    and also should have done getHTML() way different so it's less repetitive and takes up less space.
    Also should have probably implemented scoring system in a more simple way. Idk how it happened but this js is just gross.
    - Felix
*/

class QuizQuestion {
    static questionCounter = 0;
    constructor(question, hint, correctAnswer, answerA, answerB, answerC, answerD) {
        this._question = question;
        this._hint = hint;
        this._correctAnswer = correctAnswer;
        this._answerA = answerA;
        this._answerB = answerB;
        this._answerC = answerC || null; // using default parameters to mimic constructor overloading
        this._answerD = answerD || null; // this way I can leave answerC and answerD as optional

        this._questionNumber = ++QuizQuestion.questionCounter;
    }

    get questionNumber() {
        return this._questionNumber;
    }

    get hint() {
        return this._hint;
    }

    get correctAnswer() {
        return this._correctAnswer;
    }

    getHTML()   {
        let numberOfAnswers = 2; // minimum 2 answers
        // if there are three answers
        if (!(this._answerC === null)) {
            numberOfAnswers++;
            // if there are four answers
            if (!(this._answerD === null)) {
                numberOfAnswers++;
            }
        }

        switch (numberOfAnswers) {
            case 2:
                return `<div class="row mb-3">
                    <h3 class="text-warning">${this._questionNumber}. ${this._question}</h3>
                    <fieldset>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}A" value="A">
                            <label class="form-check-label" for="${this._questionNumber}A">
                                A. ${this._answerA}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}B" value="B">
                            <label class="form-check-label" for="${this._questionNumber}B">
                                B. ${this._answerB}
                            </label>
                        </div>
                    </fieldset>
                    <div class="mt-3"><span id="hintHover${this._questionNumber}">[HINT]</span><span id="hint${this._questionNumber}"></span></div>
                </div>`
            case 3:
                return `<div class="row mb-3">
                    <h3 class="text-warning">${this._questionNumber}. ${this._question}</h3>
                    <fieldset>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}A" value="A">
                            <label class="form-check-label" for="${this._questionNumber}A">
                                A. ${this._answerA}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}B" value="B">
                            <label class="form-check-label" for="${this._questionNumber}B">
                                B. ${this._answerB}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}C" value="C">
                            <label class="form-check-label" for="${this._questionNumber}C">
                                C. ${this._answerC}
                            </label>
                        </div>
                    </fieldset>
                    <div class="mt-3"><span id="hintHover${this._questionNumber}">[HINT]</span><span id="hint${this._questionNumber}"></span></div>
                </div>`
            case 4:
                return `<div class="row mb-3">
                    <h3 class="text-warning">${this._questionNumber}. ${this._question}</h3>
                    <fieldset>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}A" value="A">
                            <label class="form-check-label" for="${this._questionNumber}A">
                                A. ${this._answerA}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}B" value="B">
                            <label class="form-check-label" for="${this._questionNumber}B">
                                B. ${this._answerB}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}C" value="C">
                            <label class="form-check-label" for="${this._questionNumber}C">
                                C. ${this._answerC}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${this._questionNumber}" id="${this._questionNumber}D" value="D">
                            <label class="form-check-label" for="${this._questionNumber}D">
                                D. ${this._answerD}
                            </label>
                        </div>
                    </fieldset>
                    <div class="mt-3"><span id="hintHover${this._questionNumber}">[HINT]</span><span id="hint${this._questionNumber}"></span></div>
                </div>`
            default:
                break;
        }
    }
}

class QuizQuestionCheckboxes extends QuizQuestion {
    constructor(question, hint, correctAnswers, answerA, answerB, answerC, answerD) {
        super(question, hint, correctAnswers, answerA, answerB, answerC, answerD);
    }

    getHTML() {
        let numberOfAnswers = 2; // minimum 2 answers
        // if there are three answers
        if (!(this._answerC === null)) {
            numberOfAnswers++;
            // if there are four answers
            if (!(this._answerD === null)) {
                numberOfAnswers++;
            }
        }

        switch (numberOfAnswers) {
            case 2:
                return `<div class="row mb-3">
                    <h3 class="text-warning">${this._questionNumber}. ${this._question}</h3>
                    <fieldset>
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}A" value="A">
                            <label class="form-check-label" for="${this._questionNumber}A">
                                A. ${this._answerA}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}B" value="B">
                            <label class="form-check-label" for="${this._questionNumber}B">
                                B. ${this._answerB}
                            </label>
                        </div>
                    </fieldset>
                    <div class="mt-3"><span id="hintHover${this._questionNumber}">[HINT]</span><span id="hint${this._questionNumber}"></span></div>
                </div>`
            case 3:
                return `<div class="row mb-3">
                    <h3 class="text-warning">${this._questionNumber}. ${this._question}</h3>
                    <fieldset>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}A" value="A">
                            <label class="form-check-label" for="${this._questionNumber}A">
                                A. ${this._answerA}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}B" value="B">
                            <label class="form-check-label" for="${this._questionNumber}B">
                                B. ${this._answerB}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}C" value="C">
                            <label class="form-check-label" for="${this._questionNumber}C">
                                C. ${this._answerC}
                            </label>
                        </div>
                    </fieldset>
                    <div class="mt-3"><span id="hintHover${this._questionNumber}">[HINT]</span><span id="hint${this._questionNumber}"></span></div>
                </div>`
            case 4:
                return `<div class="row mb-3">
                    <h3 class="text-warning">${this._questionNumber}. ${this._question}</h3>
                    <fieldset>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}A" value="A">
                            <label class="form-check-label" for="${this._questionNumber}A">
                                A. ${this._answerA}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}B" value="B">
                            <label class="form-check-label" for="${this._questionNumber}B">
                                B. ${this._answerB}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}C" value="C">
                            <label class="form-check-label" for="${this._questionNumber}C">
                                C. ${this._answerC}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}D" value="D">
                            <label class="form-check-label" for="${this._questionNumber}D">
                                D. ${this._answerD}
                            </label>
                        </div>
                    </fieldset>
                    <div class="mt-3"><span id="hintHover${this._questionNumber}">[HINT]</span><span id="hint${this._questionNumber}"></span></div>
                </div>`
            default:
                break;
        }
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
        new QuizQuestion("How many?", "(answer is C)", "C", 1, 2, 3, 4),
        new QuizQuestionCheckboxes("If so?", "Think outside the box []... (answer is A, B, and C) ", "ABC", "True", "False", "Maybe", "All of the above"),
        new QuizQuestion("What is 9+10?", "Famous answer to a famous question... (answer is C)", "C", 19, 91, 21, 910),
        new QuizQuestion("Dr. Mario is a real doctor.", "He has a stethoscope... (answer is A)", "A", "True", "False"),
        new QuizQuestion("I like using Vim.", "I have some keyboard troubles... (answer is C)", "C", "True", "False", "Actually I'm just using Vim motions in VSCode, because my up-arrow key is broken")
    ];
    // Loop through list and generate quiz questions
    for (let i = 0; i < quizList.length; i++) {
        $("#quizContent form").append(quizList[i].getHTML());
        // Hints on hover
        $("#hintHover" + quizList[i].questionNumber).on("mouseenter", () => {
            $("#hint" + quizList[i].questionNumber).hide().text(" = " + quizList[i].hint).fadeIn(1000);
        }).on("mouseleave", () => {
            $("#hint" + quizList[i].questionNumber).fadeOut(500);
        });
    }

    // Start timer
    const timer = new Timer();
    timer.startTimer();

    // Hide welcome banner, greet user, and bring up quiz
    $("#welcomeDiv").hide();
    $("#testerName").text(name);
    $("#quizContent").removeClass("d-none").hide().fadeIn(1000);

    // Pressing enter anytime on the page registers the submit button click
    // will also register when pressing enter to enter the name on the welcome, but the submit button won't work since questions are unanswered
    $(document).keydown(function (event) {
        if (event.which === 13) { // 13 is the Enter key
            $("#submit").click();
            
        }
    });
    // this is the grossest thing ever... i made so many bad design choices that have led to this monstrosity
    // i don't feel like refactoring
    // apologies in advanced
    $("#submit").click(() => {
        let allQuestionsAnswered = true;
        let score = 0;

        timer.stopTimer();

        for (let i = 1; i <= quizList.length; i++) {
            // return checked inputs for each question; returns a list in case it's a checkbox question
            let checkedList = $('fieldset input[name="' + i + '"]:checked');

            // if no questions answered, stop execution
            if (checkedList.length === 0) {
                allQuestionsAnswered = false;
                break;
            }

            // figure out which questions user answered by storing the answer letter (A, B, C, or D) in a String
            // for checkbox questions will return the letters sequentially with no spaces ex: "ACD" if box A, C, and D checked
            // note: correctAnswer stored in objects is a string that holds the letter(s) of the correct answer
            let userAnswer = "";
            for (let j = 0; j < checkedList.length; j++) {
                userAnswer += checkedList[j].value;
            }
            // check answer against correct answer, and increment score
            if (userAnswer == quizList[i - 1].correctAnswer) {
                score++;
            }

        }

        // display results
        if (allQuestionsAnswered) {
            const modal = new bootstrap.Modal('.modal');
            $("#score").hide().fadeIn(3000).text("You score is loading...");
            $("#resultsScore").text("Waiting for results");
            $("#resultsTime").text("...");
            $(".modal").fadeIn(3000);
            modal.show();

            // flash ten times after modal appears
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    if (score === quizList.length) {
                        $("#resultsScore").fadeOut(1000).fadeIn(1000).text("You scored " + score + "/" + quizList.length + ". Perfect!");
                    } else {
                        $("#resultsScore").fadeOut(1000).fadeIn(1000).text("RESULTS for " + name + ": Scored " + score + " out of " + quizList.length);
                    }

                    $("#resultsTime").fadeOut(1000).fadeIn(1000).text("You finished in " + $("#timer").html() + " seconds !");
                    $("#score").fadeOut(1000).fadeIn(1000).text("You scored " + score + " out of " + quizList.length);
                    $("#timer").fadeOut(1000).fadeIn(1000);
                }
            }, 3000);
            // for (let i = 0; i < 10; i++) {
            //     if (score === quizList.length) {
            //         $("#resultsScore").fadeOut(500).fadeIn(500).text("You scored " + score + "/" + quizList.length + ". Perfect!");
            //     } else {
            //         $("#resultsScore").fadeOut(500).fadeIn(500).text("RESULTS for " + name + ": Scored " + score + " out of " + quizList.length);
            //     }

            //     $("#resultsTime").fadeOut(500).fadeIn(500).text("You finished in " + $("#timer").html() + " seconds !");
            // }


        }
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

        // Pressing enter while in the name input field registers as a button click for the begin button
        $("#name").keypress(function (event) {
            if (event.which === 13) { // 13 is the Enter key
                $("#begin").click();
            }
        });
    });
}

run();

