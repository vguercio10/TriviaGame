
console.log("hello");
//Object that contains trivia questions, answer choices, correct answers
let questions = [
    {
        question: "What volatile substance was used during the Battle of Blackwater Bay?",
        answerChoices: ["Tears of Lys", "Wildfire", "The Strangler", "Wolfsbane"],
        answer: 3,
    },{
    
        question: "Dead creatures revived by White Walkers are called: ",
        answerChoices: ["walkers", "wights", "zombies", "walking dead"],
        answer: 1,
    },{
        question: "Which direwolf was killed in retaliation for an attack on Prince Joffery",
        answerChoices: ["Ghost", "Lady", "Nymeria", "Summer"],
        answer: 1,
    },{
        question: "What was Arya's punishment for stealing from the Many-Face God",
        answerChoices: ["Death", "A hand cut off", "Blindness", "Inability to speak"],
        answer: 2,
    },{
        question: "Finish this sentence, You know nothing ....",
        answerChoices: ["Arya Stark", "Jon Snow", "Robb Stark", "Cersei Lannister"],
        answer: 1,
    },{
        question: "The Night King was created using a dagger made of...",
        answerChoices: ["Valyrian steel", "Blue ice", "Dragon glass", "Obsidian"],
        answer: 2,
    },{
        question: "Which of the following is related to the Stark Family?",
        answerChoices: ["Renly Baratheon", "Jamie Lannister", "Sandor Clegane", "Jon Snow"],
    }
        
    ]
    console.log(questions);


// Variables
let timer = 120;
let correctAnswers = 0;
let inccorectAnswers = 0;
let notAnswered = 0;
let answered;

// Start button ---------------------------
$("#startBtn").on("click", function(){
	$(".btn").hide();
    // newGame();
    countDown();
    showQuestions();
});   

// Timer function-----------------
function countDown() {
    seconds = 15;
    $("#timeLeft").html("<h4>Countdown "  + seconds + "</h4>");
    answered = true;
    timer = setInterval(startCountdown, 1000);

// Scoreboard comes up after timer is 0
function startCountdown() {
    seconds--;
    $("#timeLeft").html("<h4>Countdown " + seconds + "</h4>");
        if(seconds < 1) {
            clearInterval(timer);
            endScoreboard();
            $("#timeLeft").hide()
    }
}
function endScoreboard() {
    $("#correctQs").html("<h5>Correct answers: " + correctAnswers + "</h5>");
    $("#incorrectQs").html("<h5>Incorrect answers: " + inccorectAnswers + "</h5>");
    $("#unAnswered").html("<h5> Unanswered questions: " + notAnswered + "</h5>");
    $("#triviaQuestions").hide();


}
// Questions displayed on page
function showQuestions() {
    for (var i = 0; i < questions.length; i++) {
        let question = $("<p>" + questions[i].question + "<br>");
        $("#triviaQuestions").append(question);
    }
// Answer and buttons dispayed on page (not working)
    for (j = 0; j < questions.answerChoices[j].length; j++) {
        $("<button>" + questions.answerChoices[j] + "<br>");
        answer.attr("data", answerChoices[j]).addClass("answer");
        $("#triviaQuestions").append(answer);
        console.log(answer);
    }
}
  


//Need a function that compares and stores answers
// Scoreboard adjusts correct, inccorect and unaswered questions
// When counter equals zero then the game ends and the follow is displayed
    // All DONE
    // Correct Answers:
    // Incorrect Ansers:
    // Unanswered }
}
