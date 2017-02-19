function populate(argument) {
	if (quiz.isEnded()) {
		showScores();
	}
	else{
		//show questions
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;


		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
		guess("btn" + i, choices[i]);
			}
			showProgress();
		}
	};
	function guess(id,guess){
		var button = document.getElementById(id);
		button.onclick = function(){
			quiz.guess(guess);
			populate();
		}
	};

	function showProgress(){
		var currentQuestionNumber = quiz.questionIndex + 1;
		var element = document.getElementById("progress");
		element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
		
	}

function showScores(){
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'>Your scores:" + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
};







var questions = [
new Question("What is 50+35?", ["50","30","80","85"],"85"),
new Question("What is 50+15?", ["65","75","80","85"],"65"),
new Question("What is 50+25?", ["65","75","80","85"],"75"),
new Question("What is 50+30?", ["65","75","80","85"],"80"),
new Question("What is 50+45?", ["65","75","95","85"],"95"),

];

var quiz= new Quiz(questions);
populate();