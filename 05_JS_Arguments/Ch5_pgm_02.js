// Breaking a function by changing a variable name

var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(message);
};

showMessage();



/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */
var msg;
var message;
var showMessage;
var showBothMessages;
var showJoinedMessage;

msg = "It's full of stars!";

// Step 1: Update the console.log so the program works
showMessage = function () {
    console.log(msg);
};

showMessage();

// Step 2: Declare another message variable and assign it a value
message = "Hello, world!";

// Step 3: Display the new message as well as the old one
showBothMessages = function () {
    console.log(msg);
    console.log(message);
};

showBothMessages();

// Step 4: Display a single message created by joining the two strings
showJoinedMessage = function () {
    var joinedMessage = msg + " " + message;
    console.log(joinedMessage);
};

showJoinedMessage();

/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */
