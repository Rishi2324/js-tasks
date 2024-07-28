// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);



/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */
var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

// Create the getBig function
var getBig = function (str) {
    return str.toUpperCase();
};

// Create the getSmall function
var getSmall = function (str) {
    return str.toLowerCase();
};

// Test the getBig function
console.log("Mars becomes " + getBig("Mars"));
console.log("Earth becomes " + getBig("Earth"));

// Test the getSmall function
console.log("VENUS becomes " + getSmall("VENUS"));
console.log("PLUTO becomes " + getSmall("PLUTO"));
