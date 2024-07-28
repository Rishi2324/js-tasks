// Displaying a menu

var displayMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};

displayMenu();



/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */
var displayMenu;

displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(3) Download file");  // New option
    console.log("(4) Delete file");    // New option
    console.log("(9) Quit");
};

displayMenu();

var displayMyMenu;

displayMyMenu = function () {
    console.log("My Custom Menu:");
    console.log("(1) View settings");
    console.log("(2) Change settings");
    console.log("(3) Reset settings");
    console.log("(4) Save settings");
    console.log("(9) Exit");
};

displayMyMenu();
	