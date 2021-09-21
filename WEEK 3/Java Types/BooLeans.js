// BooLeans

// true; 1 and above is a truthy value, string with any value is true. negated 0 is true eg !0
// false; 0 is a falsey value, undefined ( a varaible with no value) is also falsey. so is NaN, so is null, so are empty strings ' '
// If you put an ! infront of a value it negates type, and then !! gives Boolean value
// Boolean (value) translates value into boolean value

// BooLean Expressions

// Starting with non-booLeans, outputting a booLean.

// Greater than (>)

// Less than (<)

// Greater than or equal to
// 5 >= 5

// Less than or equal to
// 4 <= 4

// Equals (==, ===)
// Single equal = is used for assigning value

// === is a strict equals, the type matters.
// case sensitive

// == doesn't care about type
// == is a little silly and can make big bugs so always try to use triple equals

// Not equals (!=, !==)
// The above follows the same as equals

// 1 byte = 00000000 (8 bits)

// AND &&
// checking if all expressions are true
// 5 > 4 && 2 === 2 is TRUE
// 5 > 4 && 2 === '2' is FALSE

// OR (syntax: ||) (and/or)
// checks if a single thing in an exprsssion IS TRUE
// see's the first thing that is correct and decides the whole expression is TRUE

// 2 == '2'; true
// 2 === 2; true
// 2 === '2'; false
// '2' + 3 == 23; false ( actually true, tries to stringify everything "23")
// '2' + 3 === 5; false
// 10 % 3; 1 truthy
// 10 % 3 === 1; truth
// (100 % 7) % 5; false
// (100 % 7) % 5 !== 0; true
// (100 % 7) % 9 == 2; true (if it gets rounded up?)
// !(10 % 2); false (equals !0) (actually true)
// !!!!((10 % 7) % 3); false
// 10 % 3 === -1 % 2; false
// (892783 != '89278' + 3) == 0; false (actually true)
// true && false; false
// false || true; true
// true || false; true
// true || false; true
// true || false + true; true
// true * false && false + true; true
// 10 && 123 && -1 && 3; true (equals 3 = last positive value)
// 10 && 123 && 0 && 3; false (equals 0 = value which fucked up algorithim)
// (10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1; (actually 0)
// 3 && 'Calum' && ('' || 26); 26 (THE LAST POSITIVE VALUE)
// 3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog')); CatDog bc it's the last positive value

// truthy falsy checks
// expressions
// equations
