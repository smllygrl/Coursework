// Scopes in JS

// IF block scopes

// if (true) {
//   let myThing = "This is my thing";
// }

// console.log(myThing);

// The above does NOT work bc myThing is not defined globally, only locally

// if (true) {
//   let myThing = "This is my thing";
//   console.log("Inside my IF block", myThing);
// }

// The above does work bc it is defined locally and called locally

// Function Scopes

// function circleArea(radius) {
//   const area = Math.PI * radius ** 2;
//   return area;
// }

const circleAreaArrowFunction = (radius) => {
  const area = Math.PI * radius ** 2;
  return area;
};

// circleAreaArrowFunction(10);
// console.log(area);

console.log(circleAreaArrowFunction(10));

//  Nested Scopes
//  Calling functions inside functions

//  Parameters vs Global Scope Variables

const firstName = "Remi";
const lastName = "Hoeppe";

const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
console / log(fullName());

// The above does not work because the parametes of the function are not define, only global varoables are defined

console.log(fullName(firstName, lastName));

// The above does work because you're calling predefined variables
