// Relying on a variable outside of the function

var message;
var showMessage;

message = "It's full of stars!";

showMessage = function () {
	console.log(message);
};

showMessage();



/* Further Adventures
 *
 * 1) Change the message and run the program.
 *
 * 2) Change the variable name in the
 *    parentheses for console.log.
 *    e.g. console.log(msg);
 *
 * 3) Run the program
 *
 * The showMessage function relies on
 * the variable name it uses with
 * console.log matching one that exists
 * outside of the function body.
 *
 */
var message;
var showMessage;

// Step 1: Change the message
message = "Hello, world!";

showMessage = function () {
    // Step 2: Change the variable name in the parentheses for console.log
    console.log(msg);
};

// Step 3: Run the program
showMessage();

/* Further Adventures
 *
 * 1) Change the message and run the program.
 *
 * 2) Change the variable name in the
 *    parentheses for console.log.
 *    e.g. console.log(msg);
 *
 * 3) Run the program
 *
 * The showMessage function relies on
 * the variable name it uses with
 * console.log matching one that exists
 * outside of the function body.
 *
 */
