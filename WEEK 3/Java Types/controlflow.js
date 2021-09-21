// // Control Flow
// // Allowing us to define parameters of which a certain code will be executed

// // Methods
// // if >
// // if else >
// // switch >

// // IF statements

// const priceOfCheese = 10;
// const maxPrice = 15;

// if (priceOfCheese) > 10 {
//   console.log("This is good cheese");
// }
// // The above statment is FALSE bc cheese price is greater than 10, bc price of cheese is only 10

// const x = "X";

// if (x) {
//   console.log("x is truthy");
// }

// // The above statement is TRUE because ... x is truthy

// // if (expression) {
// // This is what is going to happen if expression is true
// // }

// if (priceOfCheese) > 10) {
//     console.log("This is good cheese");
//   } else {"This is bad cheese"}

// // else is used if the expression is false

// const n = 7;

// if (n % 2 === 0) {
//   console.log("This is an even number");
// } else {
//   console.log("This is an odd number");
// }

// let catFood = 1;

// catFood = 435334;

// if (catFood < 1) {
//   console.log("You need to buy more Cat Food");
// } else {
//   console.log("You have enough Cat Food");
// }

// let weather = 1;

// weather = 10;

// if (weather >= 18) {
//   console.log("Don't bring a jumper");
// } else {
//   console.log("Bring a jumper");
// }

// // ELSE IF statements

// let temp = 23

// if (temp <= 0) {
//     console.log ("Stay at home");
// } else if (temp <= 10) {
//     console.log("Wear a big coat");
//   }  else if (temp <= 20) {
//         console.log("Wear a jumper");
//         else if (temp <= 30) {
//             console.log("Wear light clothes");
//             else if (temp <= 40) {
//                 console.log("Go to the beach only");
//                 else {
//                     console.log("Die");
//                 }
//             }
//         }
//     }
// }
// }

let x = 98347;
let y = 93487;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
} else if (x < y) {
  console.log(`${x} is smaller than ${y}`);
} else {
  console.log(`${x} is equal to${y}`);
}
