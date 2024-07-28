// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);



/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */
var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

var showLarger = function (num1, num2) {
    var larger = Math.max(num1, num2);
    var smaller = Math.min(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);

    console.log(smallest + " is the smallest among " + num1 + ", " + num2 + ", and " + num3);
};

// Test different arguments for showSmaller
showSmaller(12, 3);
showSmaller(-10, 3);
showSmaller(5, 5);
showSmaller(100, 50);

// Test the showLarger function
showLarger(12, 3);
showLarger(-10, 3);
showLarger(5, 5);
showLarger(100, 50);

// Test the showSmallest function
showSmallest(12, 3, 7);
showSmallest(-10, 3, -20);
showSmallest(5, 5, 5);
showSmallest(100, 50, 75);
