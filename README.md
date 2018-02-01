# Chatbot!

Welcome to HAL9000, the evil AI. Hal responds to you in one of three ways:

1. If you mention a classmate in your chat, Hal will ask the classmate how the weather is over where the classmate is (maybe) located.
2. If you start using the lines from the [classic scene between Dave and Hal](http://www.imdb.com/title/tt0062622/quotes), Hal will continue the scene with you. The lines must be used in order.
3. Otherwise, Hal will either tell you he doesn't understand, or throw a random famous quote at you.

### My Approach

I kept the basic data and variables needed for the chatbot separate from the code and set as global variables. The function `halRespond()` sits at the heart of the program. The default response "I'm sorry, Dave. I didn't understand that." is set at the top to ensure that Hal will always have some kind of response, but that response can be overridden by the function, which can be built out for greater intelligence over time.

The `halSpeaks()` function is used as the DRY mechanism for Hal to output his dialogue to the chatbot.

### Unresolved

The chatbot could always be more intelligent. As more types of possible responses are built, I would think it wise to build a separate function that separately evaluates the type of response that would be appropriate for Hal. The purpose of this evaluator would be to make Hal's response engine more scalable, performant, and intelligent as more types of responses are developed.

### Etc.

* [Publicly Accessible CodePen](https://codepen.io/Joeventures/pen/xYwQZQ)
* Git repository (you're looking at it)

The General Assembly challenge is preserved, below:

## Our favorite AI nemesis, HAL9000 vs. Dave Bowman

* Construct a chatbot that responds to various inputs from Dave
* Feel free to use the HTML and CSS scaffolds or construct your own
* Be creative with your logic and responses!
* Feel free to also change the characters and anything in the starter code—be creative!

## Grading Rubric (Pass/Partial/Fail)

### Required

* Have the AI respond to user input
* Do at least 3 different things
* One of the commands must utilize the list of people in the class to send a reply
* Use at least 1 conditional to change the response
* Leverage a for loop to iterate over a collection
* Use a random component
* Go above and beyond simple `if/else` statements

### Stretch Goals

* Have 2 or more AIs responding based upon user input
* Use a regular expression to parse and manipulate the response
* Have a conversation between two AIs (without creating an infinite loop!)

## Deliverables

* A working chatbot hosted somewhere publicly accessible (CodePen, Github Pages, etc.)
* A new git respository containing your code
* A `README.md` file with explanations of what your bot does, what commands it responds to, the approach taken, unsolved problems, etc.
