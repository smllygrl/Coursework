// Variables

// How can we create variables?
//  = means assignment
// this whole line underneath is a variable declaration

// const firstName = "Natalie";
// const lastName = "Lovibond Hodgson";
// console.log("Fullname", firstName + " " + lastName);

// console.log(typeof firstName) = string

// How can we change variables?

// What is the difference between const and let?
// const stands for constant
// let allows us to change the value over time or reassign the value over time
// consider const immutable / not reassignable
// let is mutable and reassignable
// age below is an identifier

// let age = 27;

// Why we don't use var...

// var can make buggy code because it doesn't care about scope. it always tries to declare itself as the top scope.
// replace var with let or const when you see it

// MVP:
// Create three variables to store your first name, last name and age.
// Assign values to these variables.
// Print a string containing all three variables in the console (should look like "Hi, my name is XXX XXX and I am XX years old)

const firstName = "Natalie";
const lastName = "Lovibond Hodgson";
const age = "27";

console.log(
  "Hi my name is" +
    "..." +
    "what?" +
    " " +
    "My name is" +
    "...who?" +
    " " +
    "My name is" +
    " " +
    "ch-ka ch-ka" +
    " " +
    firstName +
    " " +
    lastName +
    " " +
    "and I am" +
    " " +
    age +
    "."
);

// console.log( (Hi my name is) "firstName" "lastName" and I am "age".);
console.log(
  `Hi, my name is ${firstName} ${lastName} and I am ${age} years old`
);
