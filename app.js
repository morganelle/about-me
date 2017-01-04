'use strict';

// ask user if they are ready to take the quiz
var answer1 = confirm('Are you ready to take a quiz about Puffy and Spencer, two super cool cats?');

if (answer1) {
  console.log('Woooooooooooo, user is ready to take a quiz about cats');
  alert('Great, get ready to answer five random questions. Please answer Y for Yes or N for No.');
}
else {
  console.log('Sorry, user is not ready for a quiz on cats.');
}

// repeated language used in questions, stored as variables
var yesOrNo = 'Y or N: ';
var userAnswered = 'User answered ';
var incorrect = 'Incorrect. ';
var correct = 'Correct! ';

// Quiz questions
var quizQuestion1 = 'Are Puffy and Spencer are from Spokane?';
var quizQuestion2 = 'Does Spencer prefer kibble?';
var quizQuestion3 = 'Puffy is a Norwegian Forest cat?';
var quizQuestion4 = 'Spencer is teaching himself English?';
var quizQuestion5 = 'Puffy and Spencer are friends?';

// Quiz answers
var quizAnswer1 = 'They were rescued from a benevolent hoarding situation in Spokane and brought to a shelter in Seattle, when I adopted them.';
var quizAnswer2 = 'Spencer strongly prefers canned food.';
var quizAnswer3 = 'Puffy is a Maine Coon cat.';
var quizAnswer4 = 'Spencer seems to be learning English. He yells \"HELLO!\" with alarming frequency and volume.';
var quizAnswer5 = 'They\'re best described as frenemies.';

// Quiz prompts, console log of user answers,and assigment of quiz input variables
var quizInput1 = prompt(yesOrNo + quizQuestion1).toUpperCase();
console.log(userAnswered + quizInput1);
if (quizInput1 === 'Y' || quizInput1 === 'y' || quizInput1 === 'Yes' || quizInput1 === 'yes' ) {
  alert(correct);
  quizInput1 = 'correct';
}
else {
  alert(incorrect);
  quizInput1 = 'incorrect';
}

var quizInput2 = prompt(yesOrNo + quizQuestion2).toUpperCase();
console.log(userAnswered + quizInput2);
if (quizInput2 === 'N' || quizInput2 === 'n' || quizInput2 === 'No' || quizInput2 === 'no' ) {
  alert(correct);
  quizInput2 = 'correct';
}
else {
  alert(incorrect);
  quizInput2 = 'incorrect';
}

var quizInput3 = prompt(yesOrNo + quizQuestion3).toUpperCase();
console.log(userAnswered + quizInput3);
if (quizInput3 === 'N' || quizInput3 === 'n' || quizInput3 === 'No' || quizInput3 === 'no' ) {
  alert(correct);
  quizInput3 = 'correct';
}
else {
  alert(incorrect);
  quizInput3 = 'incorrect';
}

var quizInput4 = prompt(yesOrNo + quizQuestion4).toUpperCase();
console.log(userAnswered + quizInput4);
if (quizInput4 === 'Y' || quizInput4 === 'y' || quizInput4 === 'Yes' || quizInput4 === 'yes' ) {
  alert(correct);
  quizInput4 = 'correct';
}
else {
  alert(incorrect);
  quizInput4 = 'incorrect';
}

var quizInput5 = prompt(yesOrNo + quizQuestion5).toUpperCase();
console.log(userAnswered + quizInput5);
if (quizInput5 === 'N' || quizInput5 === 'n' || quizInput5 === 'No' || quizInput5 === 'no' ) {
  alert(correct);
  quizInput5 = 'correct';
}
else {
  alert(incorrect);
  quizInput5 = 'incorrect';
}

// Show results to user in HTML
document.write('<img src="images/cats5.png" /><p class="intro">Now that you\'ve taken the quiz, here\'s some more information about these two wonderful cats.</p><hr />');
document.write('<p>Question 1: ' + quizAnswer1 + '<br />(Your answer: ' + quizInput1 + ')</p>');
document.write('<p>Question 2: ' + quizAnswer2 + '<br />(Your answer: ' + quizInput2 + ')</p>');
document.write('<p>Question 3: ' + quizAnswer3 + '<br />(Your answer: ' + quizInput3 + ')</p>');
document.write('<p>Question 4: ' + quizAnswer4 + '<br />(Your answer: ' + quizInput4 + ')</p>');
document.write('<p>Question 5: ' + quizAnswer5 + '<br />(Your answer: ' + quizInput5 + ')</p>');
