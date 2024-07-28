// Finding substrings

var message = "We choose to go to the Moon!";

console.log(message.substr(3, 12));



/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */
var message = "We choose to go to the Moon!";

// 1) Use substr to log the specified parts of the message string to the console

// "Moon!"
console.log(message.substr(21, 5));

// "go to the"
console.log(message.substr(12, 9));

// "We choose"
console.log(message.substr(0, 9));

// 2) Investigate what happens if you omit the second argument when calling substr

// When the second argument is omitted, substr returns the rest of the string starting from the given index
console.log(message.substr(3)); // "choose to go to the Moon!"

// 3) Investigate what happens if you use negative numbers as arguments

// Using a negative start index counts from the end of the string
console.log(message.substr(-5, 5)); // "Moon!"

// If the length is negative or zero, an empty string is returned
console.log(message.substr(10, -2)); // ""

// If only the start index is negative, substr treats it as zero
console.log(message.substr(-10)); // "We choose to go to the Moon!"

// Using a negative second argument has no effect; it still specifies the length of the substring
console.log(message.substr(0, -3)); // ""
