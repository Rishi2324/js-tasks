// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);



/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */
var showSum;
var showProduct;
var showDifference;
var showQuotient;

showSum = function (number1, number2) {
    var total = number1 + number2;
    console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);

// Step 1: Use the showSum function to add 56 and 74
showSum(56, 74);

// Step 2: Create a showProduct function to multiply two numbers
showProduct = function (number1, number2) {
    var product = number1 * number2;
    console.log("The product is " + product);
};

// Step 3: Use the showProduct function to multiply three pairs of numbers
showProduct(4, 5);
showProduct(3.2, -2);
showProduct(0, 100);

// Step 4: Create showDifference and showQuotient functions for subtraction and division
showDifference = function (number1, number2) {
    var difference = number1 - number2;
    console.log("The difference is " + difference);
};

showQuotient = function (number1, number2) {
    var quotient = number1 / number2;
    console.log("The quotient is " + quotient);
};

// Test showDifference with three pairs of numbers
showDifference(10, 5);
showDifference(7.5, 2.5);
showDifference(0, 3);

// Test showQuotient with three pairs of numbers
showQuotient(10, 2);
showQuotient(7.5, 2.5);
showQuotient(9, 3);