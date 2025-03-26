class QuizQuestion {
    static questionCounter = 0;
    constructor(question, hint, answerA, answerB, answerC, answerD) {
        this._question = question;
        this._hint = hint;
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
                    </fieldset>
                    <div class="mt-3"><span id="hintHover${this._questionNumber}">[HINT]</span><span id="hint${this._questionNumber}"></span></div>
                </div>`
            case 3:
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
                    </fieldset>
                    <div class="mt-3"><span id="hintHover${this._questionNumber}">[HINT]</span><span id="hint${this._questionNumber}"></span></div>
                </div>`
            case 4:
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
                    <div class="mt-3"><span id="hintHover${this._questionNumber}">[HINT]</span><span id="hint${this._questionNumber}"></span></div>
                </div>`
            default:
                break;
        }
    }
}

class QuizQuestionCheckboxes extends QuizQuestion {
    constructor(question, hint, answerA, answerB, answerC, answerD) {
        super(question, hint, answerA, answerB, answerC, answerD);
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
                        <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}A">
                            <label class="form-check-label" for="${this._questionNumber}A">
                                A. ${this._answerA}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}B">
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
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}A">
                            <label class="form-check-label" for="${this._questionNumber}A">
                                A. ${this._answerA}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}B">
                            <label class="form-check-label" for="${this._questionNumber}B">
                                B. ${this._answerB}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}C">
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
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}A">
                            <label class="form-check-label" for="${this._questionNumber}A">
                                A. ${this._answerA}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}B">
                            <label class="form-check-label" for="${this._questionNumber}B">
                                B. ${this._answerB}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}C">
                            <label class="form-check-label" for="${this._questionNumber}C">
                                C. ${this._answerC}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="${this._questionNumber}" id="${this._questionNumber}D">
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
        new QuizQuestion("How many?", "It's 3 :D", 1, 2, 3, 4),
        new QuizQuestionCheckboxes("If so?", "Think outside the box []", "True", "False", "Maybe", "All of the above"),
        new QuizQuestion("What is 9+10?", "Famous answer to a famous question.", 19, 91, 21, 910),
        new QuizQuestion("Dr. Mario is a real doctor.", "He has a stethoscope", "True", "False"),
        new QuizQuestion("I like using Vim.", "I have some keyboard troubles...", "True", "False", "Actually I'm just using Vim motions in VSCode, because my up-arrow key is broken")
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

