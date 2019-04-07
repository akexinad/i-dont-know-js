// P.30-31
// VALUES AND TYPES

// JS HAS TYPES VALUES, NOT TYPED VARIABLES

const x;
typeof x; // "undefined"

const x = "hello world";
typeof x; // "string"

const x = 42;
typeof x; // "number"

const x = true;
typeof x; // "boolean"

const x = null;
typeof x; // "object --weird, bug"

// typeof null is an interesting case because it errantly returns object when you would expect it to return null.

const x = undefined;
typeof x; // "undefined"




// P.36-38
// TRUTHY FALSY //////////////////////////////////////////////////////////////////

// FALSY
""
0, -0, NaN
null, undefined
false

// TRUTHY
"hello"
44
true
[], [1, 2, 3] // arrays
{}, {a: 44} // objects
function foo() {
  // funcions
}

==; // checks for value equality
===; // checks for value and type equality

// EX

const a = 42;
const b = "42";

a == b   true; // the variable b is being coered into a number value
a === b  false;

// WHEN TO USE == AND ===

// If either value (aka side) in a comparison could be true or false value, avoid == and use ===
// If either value in a comparison could be of these specific values (0, "", or []), avoid == and use ===
// In all other cases, you're safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that simplifies readability.
// What these rules boil down to is requiring you to think critically about your code and about what kinds of values can come through variables that get compared for equality.




// P.44
// SWITCH STATEMENTS

switch (3) {
  case 2:
    console.log('yes');
    break;
  case 3:
    console.log('no');
    break;
  case 7:
    console.log('maybe');
    break;
  default:
    console.log('something');
}
