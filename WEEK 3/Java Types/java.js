// Console log

console.log(12);
console.log("Here is a number", 12);

// Number Type

12;
123.1;
-10;

// String Type
// different quotation marks/ back ticks do different things

("this is a string");
("this is a string");
`this is a string`;

console.log(typeof "this is a string");

// BooLean Type
// The foundations of decision making
// Can hold only two values
// NOT "true" that is a string

true;
false;

// Undefined Type
// Exists in places that don't have a value

undefined;

// Not-A-Number Type (maybe not primitive)

NaN;

typeof 15; // Prediction: number
typeof 5.5; // Prediction: number
typeof NaN; // Prediction: number or not a number or special number with special properties
typeof "hello"; // Prediction: string
typeof true; // Prediction: boolean
typeof (1 != 2); // Prediction: this is boolean because the ! nullifies any equals to not equals. Compares left operand to a right operand. A comparison expression.
"hamburger" + "s"; // Prediction: string+s = strings. Additon operator
"hamburgers" - "s"; // Prediction: NaN bc you can't - strings only numbers
"1" + "3"; // Prediction: string '13'
"1" - "3"; // Prediction: '1
"johnny" + 5; // Prediction: If you start with a string, eg the first operand is a string, the console will want to give you a string back
"johnny" - 5; // Prediction:
99 * "luftbaloons"; // Prediction: 'luftbaloons" 99 times generator

console.log(typeof ("1" - "3"));

// concatenate is when you + items toether
//  concatenation is the operation of joining character strings end-to-end
