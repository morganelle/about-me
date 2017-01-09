'use strict';

var questions = ['Are Puffy and Spencer are from Yakima?', 'Does Spencer prefer kibble?', 'Is Puffy is a Norwegian Forest cat?','Is Spencer is teaching himself English?','Are Puffy and Spencer are friends?','What colors are Puffy and Spencer? Name one.','How many cats were living in the house Puffy and Spencer were rescued from?'];
var answers = ['yes','no','no','yes','no',['brown', 'gray', 'grey', 'black'],'26'];
var moreInfo = ['They were rescued from a benevolent hoarding situation in Yakima and brought to a shelter in Seattle, when we adopted them.','Spencer strongly prefers canned food.','Puffy is a Maine Coon cat.','Spencer seems to be learning English. He yells \"HELLO!\" with alarming frequency and volume.','They\'re best described as frenemies.','They\'re both black, brown, and grey or gray.','They were rescued from a house with 26 cats.'];
var userName;
var userAnswer;
var correct;
var points = 0;

// Asks user name and if they'd like to take a quiz
function takeQuiz() {
  userName = prompt('What is your name?');
  var confirmation = confirm(userName + ', are you ready to take a quiz about the developer\'s cats, Puffy and Spencer?');
  if (confirmation === true) {
    document.write('<p class="intro">Now that you\'ve taken the quiz, here\'s some more information about these two wonderful cats.</p>');
    runQuestions();
    document.write('<p id="score">Your score: ' + points + ' out of ' + questions.length + ' possible</p>');
  }
  else {
    alert('Ok, no problem.');
    // Show sorry message to user in HTML
    document.write('<p class="intro">Sorry you didn\'t feel prepared to take the quiz. Refresh the page if you change your mind.');
  }
}

// Steps through questions
function runQuestions() {
  for (var count = 0; count < questions.length; count++) {
    askUser(count);
    evalAnswer(count);
    increment();
    write(count);
  }
}

// Prompts users with questions and saves input
function askUser(aCount) {
  userAnswer = prompt(questions[aCount]).toLowerCase();
}

// Looks for correct answers in answer array, including nested arrays
function evalAnswer(eCount) {
  if (userAnswer === answers[eCount] || answers[eCount].includes(userAnswer) === true) {
    correct = true;
  }
  else if (userAnswer === 'y' && answers[eCount] === 'yes' || userAnswer === 'n' && answers[eCount] === 'no') {
    correct = true;
  }
  else {
    correct = false;
  }
}

// Increments points for correct answers
function increment() {
  if (correct === true) {
    points++;
    console.log(points);
  }
}

// Writes questions and answers to document
function write(wCount) {
  if (correct === true) {
    document.write('<p class="question">' + (wCount + 1) + '. ',questions[wCount],'<br /> Answer: ', moreInfo[wCount] + ' <span class="correct">&#10004;</span></p>');
  }
  else {
    document.write('<p class="question">' + (wCount + 1) + '. ',questions[wCount],'<br /> Answer: ', moreInfo[wCount] + ' <span class="incorrect">&#10008;</span></p>');
  }
}

takeQuiz();
