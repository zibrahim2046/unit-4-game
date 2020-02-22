// assign random number to target number

// assign a random value of each crystal 1-12

// use an onClick when user clicks each crystal

// add the value of each click to the total score

// if the totalScore equals randomNumber, user wins, and a win is recorded

// if totalScore is more than randomNumber, user loses, amd loss is recorded

// if win or loss, game resets and new numbers are assigned

$(document).ready(function() {
  // assign variables

  var targetNumber = targetNumber = Math.floor(Math.random() * 101 + 19);
  //console.log(targetNumber);
  var crystal1 = Math.floor(Math.random() * 11 + 1);
  //console.log(crystal1);
  var crystal2 = Math.floor(Math.random() * 11 + 1);
  //console.log(crystal2);
  var crystal3 = Math.floor(Math.random() * 11 + 1);
  //console.log(crystal3);
  var crystal4 = Math.floor(Math.random() * 11 + 1);
  //console.log(crystal4);
  var userTotal;
  var wins = 0;
  var losses = 0;

  // reset function
  function reset() {
    crystal1 = Math.floor(Math.random() * 11 + 1);
    crystal2 = Math.floor(Math.random() * 11 + 1);
    crystal3 = Math.floor(Math.random() * 11 + 1);
    crystal4 = Math.floor(Math.random() * 11 + 1);
    targetNumber = Math.floor(Math.random() * 101 + 19);
    
    userTotal = 0;
    $("#total-score").text(userTotal);
    $("#target-score").text(targetNumber);
  }
  // game start function
  function initialize() {
    crystal1 = Math.floor(Math.random() * 11 + 1);
    crystal2 = Math.floor(Math.random() * 11 + 1);
    crystal3 = Math.floor(Math.random() * 11 + 1);
    crystal4 = Math.floor(Math.random() * 11 + 1);
    targetNumber = Math.floor(Math.random() * 101 + 19);
    $("#target-score").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#total-score").text(userTotal);
  }
  // function if user wins or loses
  function winsLoss() {
    if (userTotal === targetNumber) {
      alert("You Win!");
      reset();
      wins++;
      $("#wins").text(wins);
    }
  }
});
