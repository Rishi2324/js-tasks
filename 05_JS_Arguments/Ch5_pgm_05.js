// Using the square function

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);



/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */
var square;
var cube;
var squareRoot;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

// Step 1: Define a cube function that cubes any number passed in as an argument
cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};

// Step 2: Call the cube function four times with different arguments to test it
cube(2);
cube(-3);
cube(5);
cube(0.1);

// Step 3: Define and test a squareRoot function to find square roots and display them on the console
squareRoot = function (numberToSquareRoot) {
  var result;
  result = Math.sqrt(numberToSquareRoot);
  console.log("The square root of " + numberToSquareRoot + " is " + result);
};

// Test the squareRoot function
squareRoot(9);
squareRoot(16);
squareRoot(2);
squareRoot(0.25);