// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */
var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Docter, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

// Step 1: Add a second movie and display the same info for it
var movie2 = {
  title: "The Matrix",
  actors: "Keanu Reeves, Laurence Fishburne",
  directors: "The Wachowskis"
};

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

// Step 2: Create an object to represent a blog post
var blogPost = {
  title: "The Journey to JavaScript Mastery",
  author: "John Doe",
  created: "2024-07-28",
  content: "In this blog post, we'll explore the key concepts and techniques for becoming a JavaScript master..."
};

// Step 3: Write code to display info about the blog post
console.log("Blog Post Information");
console.log("------------------------------");
console.log("Title: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Created: " + blogPost.created);
console.log("Content: " + blogPost.content);
console.log("------------------------------");
