// MVP
// Create a variable that contains your age

let age = 27;

// Add 10 to your age variable and log the output to the console

// age += 10;
// console.log(age);
console.log((age += 10));

// Subtract 7 from your age variable and log the output to the console

age = age - 7;
console.log(age);

// Multiple your age variable by 11 and log the output to the console

age = age * 11;
console.log(age);

// Challenge: Calculating Moon Rotations
// MVP
// Create two variables
// The first for the number of earth days. (You can choose any number of days)

let earthDay = 365;

// One to hold the number of earth days it takes for the moon to rotate.

let moonDay = 27.3;

// Log the number of rotations of the moon given the number of earth days you specified

let moonRotat = earthDay / moonDay;
console.log(moonRotat);

// Challenge: Calculating Moon Orbits
// MVP
// Create another variable to store the number of earth days it takes for the moon to orbit the earth

let moonOrbit = 27;
// Log the number of orbits the moon can do, given the number of earth days
let orbitNumber = earthDay / moonOrbit;
console.log(orbitNumber);
