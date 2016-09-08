
var questions = {'strong': 'Do ye like your drinks strong?',
'salty': 'do ye like it with a salty tang?',
'bitter': 'are ye a lubber who likes it bitter?',
'sweet': 'would ye like a bit of sweetness with yer posion?',
'fruity': 'are ye one for a fruity finish?'};

var ingredients = {'strong': ['gulg of rum', 'slug of whiskey', 'splash of gin'],
'salty': ['olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
'bitter': ['shake of bitters', 'splash of tonic', 'twist of lemon peel'],
'sweet': ['sugar cube', 'spoonful of honey', 'splash of colar'],
'fruity': ['slice of orange', 'dash of cassis', 'cherry on top']};



var Client = function(name, preferences) {
	this.name = name
	this.preferences = preferences
}

var Bartender = function() {
	this.answers = null;
	this.answerquestion = function(userAnswers) {
		this.answers = userAnswers
	}
}

Bartender.prototype.makeDrink = function(selectArray) {
	for (i = 0; i < selectArray.length; i++) {
		var select = $(selectArray[i]);
		if (select.val() === 'yes') {
			var name = select.attr('name');
			var randomValue = getRandom();
			console.log(ingredients[name][randomValue]);
			console.log(name);
		}
	}
}

var myBartender = new Bartender();
var test = new Bartender();
console.log(test);
console.log(myBartender);

function getRandom(){
	return Math.floor(Math.random() * (2 - 0 + 1) + 0);
}
console.log(getRandom());

$('#typesubmit').submit(function(event){
	event.preventDefault();
	myBartender.makeDrink($('select'));
}) 

