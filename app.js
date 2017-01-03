'use strict';

// ask user if they are ready to take the quiz
var answer1 = confirm('Are you ready to take a quiz about Puffy and Spencer, two super cool cats?');

if (answer1) {
  console.log('Woooooooooooo, user is ready');
  alert('Great, get ready to answer five random questions. Please answer Y for Yes or N for No.');
}
else {
  console.log('Sorry, user is not ready.');
}

// repeated language used in questions, stored as variables
var yesOrNo = 'Y or N: ';
var userAnswered = 'User answered ';
var incorrect = 'I\'m sorry, but that\'s incorrect. ';
var correct = 'Correct! ';

// quiz questions, console log of user answers,and responses
var quizAnswer1 = prompt(yesOrNo + 'Are Puffy and Spencer are from Spokane?').toUpperCase();
console.log(userAnswered + quizAnswer1);
if (quizAnswer1 === 'Y' || quizAnswer1 === 'y' || quizAnswer1 === 'Yes' || quizAnswer1 === 'yes' ) {
  alert(correct + 'They were rescued from a benevolent hoarding situation in Spokane and brought to a shelter in Seattle.');
}
else {
  alert(incorrect + 'They are, in fact, from Spokane.');
}

var quizAnswer2 = prompt(yesOrNo + 'Does Spencer prefer kibble?').toUpperCase();
console.log(userAnswered + quizAnswer2);
if (quizAnswer2 === 'N' || quizAnswer2 === 'n' || quizAnswer2 === 'No' || quizAnswer2 === 'no' ) {
  alert(correct + 'He strongly prefers canned food.');
}
else {
  alert(incorrect + 'Spencer strongly prefers canned food.');
}

var quizAnswer3 = prompt(yesOrNo + 'Puffy is a Norwegian Forest cat?').toUpperCase();
console.log(userAnswered + quizAnswer3);
if (quizAnswer3 === 'N' || quizAnswer3 === 'n' || quizAnswer3 === 'No' || quizAnswer3 === 'no' ) {
  alert('You\'re right! Puffy is a Maine Coon cat.');
}
else {
  alert('Close but that\'s incorrect. Puffy is a Maine Coon breed.');
}

var quizAnswer4 = prompt(yesOrNo + 'Spencer is teaching himself English?').toUpperCase();
console.log(userAnswered + quizAnswer4);
if (quizAnswer4 === 'Y' || quizAnswer4 === 'y' || quizAnswer4 === 'Yes' || quizAnswer4 === 'yes' ) {
  alert('He certainly seems to be. He yells \"HELLO!\" with alarming frequency and volume.');
}
else {
  alert(incorrect + 'He does seem to be teaching himself English.');
}

var quizAnswer5 = prompt(yesOrNo + 'Puffy and Spencer are friends?').toUpperCase();
console.log(userAnswered + quizAnswer5);
if (quizAnswer5 === 'N' || quizAnswer5 === 'n' || quizAnswer5 === 'No' || quizAnswer5 === 'no' ) {
  alert(correct + 'You picked up on the subtle nuances of their relationship; they\'re best described as frenemies.');
}
else {
  alert('Not to split hairs, but they\'re really more frenemies than anything else. ' + incorrect);
}
