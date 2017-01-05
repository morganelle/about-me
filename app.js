'use strict';

var userName = prompt('What is your name?');

// ask user if they are ready to take the quiz
var answer1 = confirm(userName + ', are you ready to take a quiz about the developer\'s cats, Puffy and Spencer, two super cool cats?');

if (answer1) {
  console.log(userName + ' is ready to take a quiz about cats!');
  alert('Great, get ready to answer seven quick questions.');
}
else {
  console.log('Sadly,' + userName + ' is not ready for a quiz on cats.');
  alert('That\'s too bad!');
}

// repeated language used in questions, stored as variables
var yesOrNo = 'Y or N: ';
var userAnswered = userName + ' answered ';
var incorrect = 'Incorrect. ';
var correct = 'Correct! ';
var tooMany = 'That\'s too many! ';
var tooFew = 'That\'s too few! ';

// Quiz questions
var quizQuestion1 = 'Are Puffy and Spencer are from Yakima?';
var quizQuestion2 = 'Does Spencer prefer kibble?';
var quizQuestion3 = 'Puffy is a Norwegian Forest cat?';
var quizQuestion4 = 'Spencer is teaching himself English?';
var quizQuestion5 = 'Puffy and Spencer are friends?';
var quizQuestion6 = 'How many cats were living in the house with Puffy and Spencer in Yakima?';
var quizQuestion7 = 'What colors are Puffy and Spencer?';

// Quiz answers to be displayed later
var quizAnswer1 = 'They were rescued from a benevolent hoarding situation in Yakima and brought to a shelter in Seattle, when I adopted them.';
var quizAnswer2 = 'Spencer strongly prefers canned food.';
var quizAnswer3 = 'Puffy is a Maine Coon cat.';
var quizAnswer4 = 'Spencer seems to be learning English. He yells \"HELLO!\" with alarming frequency and volume.';
var quizAnswer5 = 'They\'re best described as frenemies.';
var quizAnswer6 = 'They were rescued from a house with 26 cats.';
var quizAnswer7 = ['black','grey','brown'];

// Count correct answers
var countCorrect = 0;

// Quiz prompts, console log of user answers,and assigment of quiz input variables
var quizInput1 = prompt(yesOrNo + quizQuestion1).toUpperCase();
console.log(userAnswered + quizInput1);
if (quizInput1 === 'Y' || quizInput1 === 'YES') {
  alert(correct);
  countCorrect++;
}
else {
  alert(incorrect);
}

var quizInput2 = prompt(yesOrNo + quizQuestion2).toUpperCase();
console.log(userAnswered + quizInput2);
if (quizInput2 === 'N' || quizInput2 === 'NO') {
  alert(correct);
  countCorrect++;
}
else {
  alert(incorrect);
}

var quizInput3 = prompt(yesOrNo + quizQuestion3).toUpperCase();
console.log(userAnswered + quizInput3);
if (quizInput3 === 'N' || quizInput3 === 'NO') {
  alert(correct);
  countCorrect++;
}
else {
  alert(incorrect);
}

var quizInput4 = prompt(yesOrNo + quizQuestion4).toUpperCase();
console.log(userAnswered + quizInput4);
if (quizInput4 === 'Y' || quizInput4 === 'YES') {
  alert(correct);
  countCorrect++;
}
else {
  alert(incorrect);
}

var quizInput5 = prompt(yesOrNo + quizQuestion5).toUpperCase();
console.log(userAnswered + quizInput5);
if (quizInput5 === 'N' || quizInput5 === 'NO') {
  alert(correct);
  countCorrect++;
}
else {
  alert(incorrect);
}

// Quiz question 6
var index6;
for (index6 = 0; index6 < 4; index6++) {
  var quizInput6 = parseInt(prompt(quizQuestion6));
  console.log(userAnswered + quizInput6);
  if (quizInput6 === 26) {
    alert(correct);
    console.log(userAnswered + quizInput6);
    countCorrect++;
    break;
  }
  else {
    if (quizInput6 < 26) {
      alert(tooFew + 'Attempts remaining: ' + (3 - index6));
    }
    else {
      alert(tooMany + 'Attempts remaining: ' + (3 - index6));
    }
  }
};

//Quiz question 7
var index7;
for (index7 = 0; index7 < 3; index7++) {
  var quizInput7 = prompt(quizQuestion7).toLowerCase();
  console.log(userAnswered + quizInput7);
  var subIndex7;
  var isCorrect = false;
  for (subIndex7 = 0; subIndex7 < 3; subIndex7++) {
    console.log('inner for loop ' + quizAnswer7[subIndex7]);
    if (quizInput7 === quizAnswer7[subIndex7]) {
      console.log(correct);
      isCorrect = true;
    }
  }
  if (isCorrect === true) {
    countCorrect++;
    break;
  }
}

// Show results to user in HTML
document.write('<img src="images/cats5.png" /><p class="intro">Now that you\'ve taken the quiz, here\'s some more information about these two wonderful cats.</p><hr />');
document.write('<p>Question 1: ' + quizAnswer1 + '<br />(Your answer: ' + quizInput1 + ')</p>');
document.write('<p>Question 2: ' + quizAnswer2 + '<br />(Your answer: ' + quizInput2 + ')</p>');
document.write('<p>Question 3: ' + quizAnswer3 + '<br />(Your answer: ' + quizInput3 + ')</p>');
document.write('<p>Question 4: ' + quizAnswer4 + '<br />(Your answer: ' + quizInput4 + ')</p>');
document.write('<p>Question 5: ' + quizAnswer5 + '<br />(Your answer: ' + quizInput5 + ')</p>');
document.write('<p>Question 6: ' + quizAnswer6 + '<br />(Your answer: ' + quizInput6 + ')</p>');
document.write('<p>Question 7: ' + quizAnswer7 + '<br />(Your answer: ' + quizInput7 + ')</p>');
document.write('<p>Your score: ' + countCorrect);
