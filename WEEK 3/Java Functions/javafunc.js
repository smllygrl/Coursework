// Functions
// Allow us to define a set of code lines/ block of code, and use it as much as we want wherever we want
// Re-usable, executable
// function declaration, function call

// Syntax

// function functionName (keyarguments) {
// function body, this is executed when the function is called;
// return [variable to return];
// }

// (What your function returns is called an output, and all functions return outputs)

function noArgs() {
  return "Hello";
}

const output = noArgs();
console.log(output);
// the above delivers "Hello" to the console

function rectangleArea(width, length) {
  return width * length;
}

console.log(rectangleArea(100, 200));

function printMe(arg1, arg2) {
  return arg1 + arg2;
}

console.log(printMe("hello", "goodbye"));

// Challenges

// ## Challenge: Calculating Moon Orbits
// ### MVP
// 1. Write a function that takes in a number of earth days, and returns the
//    number of orbits the moon can perform given days.

function moonOrbits(earthDays) {
  return earthDays / 27;
}

console.log(moonOrbits(54));

// js
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359
//
// ## Challenge: Working with Circles
// ### MVP
// 1. Write a function that takes the radius of a circle and return its area.

function circleArea(circleRadius) {
  return Math.PI * circleRadius ** 2;
}

console.log(circleArea(10));

// 2. Write a function that takes the radius of a circle and return its perimeter

function circlePerimeter(circleRadius) {
  return 2 * Math.PI * circleRadius;
}

console.log(circlePerimeter(10));

// js
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83
//

var days =
  (new Date(2021, 09, 22) - new Date(1994, 04, 24)) / (1000 * 60 * 60 * 24);
// ## Challenge: Years to Days & Seconds
// ### MVP
// 1. Create a function that takes your age in years and returns your age in days.

console.log(days);

function ageInDays(ageInYears) {
  return ageInYears * 365;
}

console.log(ageInDays(27));

// 1. Create a function that takes your age in years and returns your age in seconds.

function ageInSeconds(ageInYears) {
  return ageInYears * 31536000;
}

console.log(ageInSeconds(27));

// js
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000
//
