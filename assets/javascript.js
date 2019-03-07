
console.log("hello");
 
// Variables
let timer = 120;
let correctAnswers = 0;
let inccorectAnswers = 0;
let notAnswered = 0;
let answered;

$("#startBtn").on("click", function(){
	$(".btn").hide();
    // newGame();
    countDown();
});   


function countDown() {
    seconds = 120;
    $("#timeLeft").html("<h4>Countdown "  + seconds + "</h4>");
    answered = true;
    timer = setInterval(startCountdown, 1000);

}

function startCountdown() {
    seconds--;
    $("#timeLeft").html("<h4>Countdown " + seconds + "</h4>");
        if(seconds < 1) {
            clearInterval(timer);


        }
}











//Once start button is clicked counter begins to count down (120 ish secs)




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
    }
        
    ]
    console.log(questions);

//Need a function that sorts and stores correct answers



// When counter equals zero then the game ends and the follow is displayed
    // All DONE
    // Correct Answers:
    // Incorrect Ansers:
    // Unanswered:
