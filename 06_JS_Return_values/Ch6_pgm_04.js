// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var sum = add(50, 23);

console.log(sum);



/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */
var add;

add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

// Find and display the sum of a different pair of numbers
var sum1 = add(15, 30);
console.log(sum1); // 45

// Change the call to console.log to display 'The sum of 50 and 23 is 73'
var sum2 = add(50, 23);
console.log("The sum of 50 and 23 is " + sum2); // The sum of 50 and 23 is 73

// Use the add function to add more than two numbers by nesting calls
var sum3 = add(add(10, 20), 30);
console.log("The sum of 10, 20, and 30 is " + sum3); // The sum of 10, 20, and 30 is 60

// Create a function to return the sum of three numbers
var addThreeNumbers = function (number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
};

var sum4 = addThreeNumbers(5, 10, 15);
console.log("The sum of 5, 10, and 15 is " + sum4);