// Set up some pointers
var chatForm = document.getElementById('chatForm');
var chatBot = document.getElementById('chatbot');
var chatInput = document.getElementById('chatInput');
var dave = document.getElementById('dave');
var hal = document.getElementById('hal');

// add an event listener to the form to submit Dave's message
chatForm.addEventListener("submit", function(e) {
  e.preventDefault();
  daveSays = chatInput.value;
  chatInput.value = "";
});

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message
