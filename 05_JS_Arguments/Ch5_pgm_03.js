// Passing information to a function

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message);
};

showMessage("It's full of stars!");



/* Further Adventures
 *
 * 1) Change the message in the parentheses
 *    when showMessage is called on line 9.
 *
 * The value in the parentheses when showMessage is called
 * is an argument. "It's full of stars!" was the
 * original argument on line 9.
 *
 * 2) Add two more calls to the showMessage function
 *    with different arguments each time.
 *
 * 3) Change the showMessage function itself.
 *    Make it add some extra text after the
 *    message passed in.
 *
 */
var showMessage;

showMessage = function (message) {
    // Step 3: Add some extra text after the message passed in
    console.log("The message is: " + message + " Have a nice day!");
};

// Step 1: Change the message in the parentheses when showMessage is called
showMessage("Hello, world!");

// Step 2: Add two more calls to the showMessage function with different arguments each time
showMessage("Learning JavaScript is fun!");
showMessage("Let's code something amazing!");