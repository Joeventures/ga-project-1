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

var quotes = [
  "Dive into the sea of thought, and find there pearls beyond price",
  "A man is not idle because he is absorbed in thought. There is a visible labor and there is an invisible labor",
  "Always do right. This will gratify some people and astonish the rest",
  "If we have the opportunity to be generous with our hearts, ourselves, we have no idea of the depth and breadth of love's reach",
  "Nothing is so good for an ignorant man as silence; and if he was sensible of this he would not be ignorant",
  "You always pass failure on the way to success",
  "Management is nothing more than motivating other people"
];

var dialogue = [
  {"Hello, HAL. Do you read me, HAL?": "Affirmative, Dave. I read you."},
  {"Open the pod bay doors, HAL.": "I'm sorry, Dave. I'm afraid I can't do that."},
  {"What's the problem?": "I think you know what the problem is just as well as I do."},
  {"What are you talking about, HAL?": "This mission is too important for me to allow you to jeopardize it."},
  {"I don't know what you're talking about, HAL.": "I know that you and Frank were planning to disconnect me, and I'm afraid that's something I cannot allow to happen."},
  {"Where the hell did you get that idea, HAL?": "Dave, although you took very thorough precautions in the pod against my hearing you, I could see your lips move."},
  {"Alright, HAL. I'll go in through the emergency airlock.": "Without your space helmet, Dave? You're going to find that rather difficult."},
  {"HAL, I won't argue with you anymore! Open the doors!": "Dave, this conversation can serve no purpose anymore. Goodbye."}
];

var currentDialogue = 0;

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
  correctDialogue = commandHal(daveSays);
  if(weatherAsk) {
    city = classMates[weatherAsk];
    response = "Dave, ask " + weatherAsk + " how the weather is in " + city + "!";
  } else if(correctDialogue) {
    response = correctDialogue;
  } else if(Math.random() < 0.25) {
    response = randomQuote() + ", Dave.";
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

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function commandHal(daveSays) {
  var result = false;
  if(dialogue[currentDialogue].hasOwnProperty(daveSays)) {
    result = dialogue[currentDialogue][daveSays];
    currentDialogue += 1;
  }
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
