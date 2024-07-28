// Displaying information from similar objects

var movie1;
var movie2;
var movie3;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */
var movie1, movie2, movie3, movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Docter, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J. Abrams"
};

// Step 1: Add a fourth movie and display its info
movie4 = {
  title: "Inception",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
  directors: "Christopher Nolan"
};

function displayMovieInfo(movie) {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
  console.log("\n"); // Adding space between different movies
}

displayMovieInfo(movie1);
displayMovieInfo(movie2);
displayMovieInfo(movie3);
displayMovieInfo(movie4);

// Step 3: Create objects to represent three calendar events
var event1, event2, event3;

event1 = {
  title: "JavaScript Conference",
  date: "2024-09-12",
  time: "10:00 AM",
  location: "San Francisco, CA"
};

event2 = {
  title: "React Workshop",
  date: "2024-09-15",
  time: "2:00 PM",
  location: "New York, NY"
};

event3 = {
  title: "Node.js Meetup",
  date: "2024-09-18",
  time: "6:00 PM",
  location: "Chicago, IL"
};

function displayEventInfo(event) {
  console.log("Event: " + event.title);
  console.log("Date: " + event.date);
  console.log("Time: " + event.time);
  console.log("Location: " + event.location);
  console.log("------------------------------");
  console.log("\n"); // Adding space between different events
}

displayEventInfo(event1);
displayEventInfo(event2);
displayEventInfo(event3);
