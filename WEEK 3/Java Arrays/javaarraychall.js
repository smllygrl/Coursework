// Create a loop where all the numbers add up to n

// You should create a variable to set the upper limit of your loop

// Your loop should increment by 1 on each iteration

// let n = 10;

// function sum(num) {
//   let total = 0;

//   for (let i = 0; i <= num; i++) {
//     total += i;
//   }

//   return total;
// }

// console.log(sum(n));

// Your loop should print the final result

// sum(10) => 55

// Bonus:

// Try writing the function again with the same inputs and outputs Without using a loop. (You may need to google some formulas!)

// Create a shopping list in the form of an array, with a bunch of items you buy regularly.

shoppingList = [
  "wet food",
  "dry food",
  "human food",
  "cat litter",
  "toilet paper",
];

function shoppingListString(array) {
  let myString = "";
  let space = " ";

  for (let i = 0; i <= array.length - 1; i++) {
    myString += i + 1 + space + array[i] + "\n";
  }

  return myString;
}

console.log(shoppingListString(shoppingList));

// Don't use the array.join method!
// Store the following array in a variable
// Your loop should iterate through every value in the array
// Your loop should print a shopping list with the number and the name of the item
// ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];

// (shoppingList === > 0);
//     console.log(shoppingList[]);
