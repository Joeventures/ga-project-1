// Set up some pointers
var chatForm = document.getElementById('chatForm');
var chatBot = document.getElementById('chatbot');
var chatInput = document.getElementById('chatInput');
var dave = document.getElementById('dave');
var hal = document.getElementById('hal');

var classMates = {
  "Joe": "Atlanta",
  "Zach": "Stamford",
  "David": "D.C.",
  "Derek": "Boston",
  "Christie": "D.C",
  "Liana": "Baltimore",
  "Mark": "D.C.",
  "Carolyn": "Bay Area",
  "Rebecca": "New York City",
  "Bryan": "Los Angeles",
  "Morris": "Los Angeles",
  "Bailey": "New York City",
  "Elaine": "D.C.",
  "Kenneth": "D.C.",
  "Courtney": "Oz",
  "Andreina": "Siam",
  "Ellen": "the Sleep-Tite Pajama Factory",
  "Emily": "Mudfog",
  "Whitney": "the Opera Populaire",
  "Richard": "Paris",
  "Sonyl": "New York City"
};

// add an event listener to the form to submit Dave's message
chatForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var daveSays = chatInput.value;
  chatInput.value = "";
  daveSpeak(daveSays);
});

function daveSpeak(daveSays) {
  dave.innerHTML = '<div class="chat-line">' + daveSays + '</div>' + dave.innerHTML;
  halRespond(daveSays);
}

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs
function halRespond(daveSays) {
  response = "I'm sorry, Dave. I didn't understand that.";
  weatherAsk = includesClassmate(daveSays);
  if(weatherAsk) {
    city = classMates[weatherAsk];
    response = "Ask " + weatherAsk + " how the weather is in " + city + "!";
  }
  halSpeak(response);
}

function includesClassmate(daveSays) {
  var result = false;
  Object.keys(classMates).forEach(function(classMate) {
    if(daveSays.includes(classMate)) {
      result = classMate;
    }
  });
  return result;
}

function halSpeak(halSays) {
  hal.innerHTML = '<div class="chat-line">' + halSays + '</div>' + hal.innerHTML;
}
// create a function for HAL to open the chat with "Good morning, Dave"
function goodMorning() {
  halSpeak("Good morning, Dave");
}

// invoke the opening message
window.onload = function() {
  goodMorning();
};
