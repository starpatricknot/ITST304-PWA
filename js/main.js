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

var cacheName = 'itst-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

