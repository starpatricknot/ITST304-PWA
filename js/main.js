var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 10;
var message = document.getElementById("message");

document.getElementById("guess-button").addEventListener("click", function() {
  var guess = document.getElementById("guess-input").value;

  if (guess == randomNumber) {
    message.innerHTML = "Congratulations! You guessed the number in " + (10 - attempts + 1) + " attempts";
    document.getElementById("guess-button").disabled = true;
  } else if (guess > randomNumber) {
    attempts--;
    message.innerHTML = "Too high! You have " + attempts + " attempts left";
  } else if (guess < randomNumber) {
    attempts--;
    message.innerHTML = "Too low! You have " + attempts + " attempts left";
  }

  if (attempts == 0) {
    message.innerHTML = "Sorry, you ran out of attempts. The number was " + randomNumber;
    document.getElementById("guess-button").disabled = true;
  }
});
