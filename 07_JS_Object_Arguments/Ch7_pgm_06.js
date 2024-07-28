// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };
  
  console.log(line(30));
  console.log(line(40));
  console.log(line(50));
  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */
  var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
};

// Test line lengths from -20 to 60 in steps of 10
for (var i = -20; i <= 60; i += 10) {
    console.log("Line length " + i + ": " + line(i));
}

// Define the spaces function
var spaces = function (numSpaces) {
    var spaceLine = "                                        ";
    numSpaces = Math.max(0, numSpaces);
    numSpaces = Math.min(40, numSpaces);
    return spaceLine.substr(0, numSpaces);
};

console.log("Spaces(10): '" + spaces(10) + "'");
console.log("Spaces(20): '" + spaces(20) + "'");
console.log("Spaces(30): '" + spaces(30) + "'");
console.log("Spaces(40): '" + spaces(40) + "'");
console.log("Spaces(50): '" + spaces(50) + "'");

// Define the emptyBox function
var emptyBox = function (width) {
    var topBottom = line(width);
    var middle = "=" + spaces(width - 2) + "=";

    console.log(topBottom);
    for (var i = 0; i < 3; i++) {
        console.log(middle);
    }
    console.log(topBottom);
};

emptyBox(12);
emptyBox(5);
emptyBox(40);
emptyBox(50);
