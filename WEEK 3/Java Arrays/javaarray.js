// DRY
// Don't Repeat Yourself

// let pet = "Oat";
// let otherPet = "Fitzy";

// function feedMyPet(petName) {
//   console.log(petName + " gets fed");
// }

// feedMyPet(pet);

console.log("it is connected");

// Create an array with 3 of your hobbies

const hobbies = ["eat", "sleep", "rave"];

// Print in the console the first hobby in the array

console.log(hobbies[0]);

// Remove that first hobby from the array and store that hobby in a variable

// if (hobbies.length > 2) {
//   let (hobbies[0]) = hobby;
// hobbies.shift();
//   console.log(hobbies);
//   console.log(hobby);
//   else {
//     console.log("There are two or less items in the array");
//   }
// }

hobbies.shift();

console.log(hobbies);

const hobby = "eat";

console.log(hobby);

// Store the length of the array in a variable

let length = hobbies.length;

console.log(length);

// Add another hobby at the end of the array

hobbies.push("repeat");

// Print that last hobby in the console

console.log(hobbies[2]);

// Bonus:
// Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")

console.log(`My hobbies are ${hobby}, ${hobby[0]}, ${hobby[1]}, ${hobby[2]}.`);

console.log(
  `My hobbies are ${hobby}, ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}.`
);
