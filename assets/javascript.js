
console.log("hello");
//Object that contains trivia questions, answer choices, correct answers
let questions = [
    {
        question: "What volatile substance was used during the Battle of Blackwater Bay?",
        answerChoices: ["Tears of Lys", "Wildfire", "The Strangler", "Wolfsbane"],
        answer: 1,
    }, {

        question: "Dead creatures revived by White Walkers are called: ",
        answerChoices: ["walkers", "wights", "zombies", "walking dead"],
        answer: 1,
    }, {
        question: "Which direwolf was killed in retaliation for an attack on Prince Joffery",
        answerChoices: ["Ghost", "Lady", "Nymeria", "Summer"],
        answer: 1,
    }, {
        question: "What was Arya's punishment for stealing from the Many-Face God",
        answerChoices: ["Death", "A hand cut off", "Blindness", "Inability to speak"],
        answer: 2,
    }, {
        question: "Finish this sentence, You know nothing ....",
        answerChoices: ["Arya Stark", "Jon Snow", "Robb Stark", "Cersei Lannister"],
        answer: 1,
    }, {
        question: "The Night King was created using a dagger made of...",
        answerChoices: ["Valyrian steel", "Blue ice", "Dragon glass", "Obsidian"],
        answer: 2,
    }, {
        question: "Which of the following is related to the Stark Family?",
        answerChoices: ["Renly Baratheon", "Jamie Lannister", "Sandor Clegane", "Jon Snow"],
        answer: 3,
    }

]
console.log(questions);


// Global Variables
let timer = 120;
let correctAnswers = 0;
let inccorectAnswers = 0;
let notAnswered = questions.length;
let answered;

// Onclick event that begins game, displays trivia questions, displays countdown ---------------------------
$("#startBtn").on("click", function () {
    event.preventDefault();
    $(".btn").hide();
    // newGame();
    countDown();
    showQuestions();
});

// Timer function/begins at the start of game-----------------
function countDown() {
    seconds = 30;
    $("#timeLeft").html("<h4>Countdown " + seconds + "</h4>");
    answered = true;
    timer = setInterval(startCountdown, 1000);
}
// Scoreboard comes up after timer is 0
function startCountdown() {
    seconds--;
    $("#timeLeft").html("<h4>Countdown " + seconds + "</h4>");
    if (seconds < 1) {
        clearInterval(timer);
        endScoreboard();
        $("#timeLeft").hide()
    }
}
// Displays scores and questions not answered after timer runs down to 0
function endScoreboard() {
    $("#correctQs").html("<h5>Correct answers: " + correctAnswers + "</h5>");
    
    $("#incorrectQs").html("<h5>Incorrect answers: " + inccorectAnswers + "</h5>");
   
    $("#unAnswered").html("<h5> Unanswered questions: " + notAnswered + "</h5>");
  
    $("#triviaQuestions").hide();


}
// Questions displayed on page
function showQuestions() {
    for (var i = 0; i < questions.length; i++) {
        let question = $("<p>");
        question.text(questions[i].question);
        $("#triviaQuestions").append(question);
        var answers = questions[i].answerChoices;
        for (var j = 0; j < answers.length; j++) {
            let button = $("<button>");
            button
                .text(answers[j])
                .addClass("answer")
                .attr("data", answers[j])
                .attr("validAnswer", questions[i].answerChoices[questions[i].answer]);
            $("#triviaQuestions").append(button);

        }
    }


}
// On click the correct answer is compared to the user guess, keeps track if answer are correct or incorrect
$(document).on("click", ".answer", function () {
    var userChoice = $(this).attr("data");
    var validAnswer = $(this).attr("validAnswer");
    
    console.log(userChoice, validAnswer);
        if (validAnswer === userChoice) {
            correctAnswers++;
            notAnswered = questions.length - correctAnswers - inccorectAnswers;
        } else {
            inccorectAnswers++
            notAnswered = questions.length - correctAnswers - inccorectAnswers;

        }
    })










