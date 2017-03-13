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
console.log('here');
initiatechart(1,2,3);
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


function initiatechart(noofquestions,correct,wrong){
console.log('here');
correctdata=[];
wrongdata=[];
correctdata.push(correct);
wrongdata.push(wrong);

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Your questions data'
    },
    xAxis: {
        categories: [
            'Answers data'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'no of questions'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'correct answers',
        data: correctdata

    }, {
        name: 'Wrong answers',
        data: wrongdata

    }]
});

}

// y-axis no of question 
// x-zxis no of questions corect answered and no of question wrongly answered

