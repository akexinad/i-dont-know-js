// P.30-31
// VALUES AND TYPES

// JS HAS TYPES VALUES, NOT TYPED VARIABLES

/*

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

*/

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

/*

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

*/

// EX

const a = 42;
const b = "42";

/*

a == b   true; // the variable b is being coered into a number value
a === b  false;

*/

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




// IIFE's

// The outer ( .. ) that surrounds the (function IIFE(){ .. }) function expression is just a nuance of JS grammar needed to prevent it from being treated as a normal function declaration.

(function yo() {
  return console.log('hello');
})();




// CLOSURE

console.log("=======");
console.log("CLOSURE");
console.log("=======");


function makeAdder(x) {

  function add(y) {
    return x + y;
  }
  
  return add;
}

// The variable returns the add() function.
const plusOne = makeAdder(1);
console.log(plusOne);

// So to invoke the inner function, you can add parenthesis and pass whatever value you want y to be.
console.log(plusOne(3));




// MODULES

/*

The most common usage of closure in JavaScript is the module pattern. 
Modules let you define private implementation details (variables, functions) 
that are hidden from the outside world, as well as a public API that is 
accessible from the outside.

*/

function User() {

  function doLogin(user, pw) {
    username = user;
    password = pw;

    // do the rest of the login work.
    if (username == "FRED" && password === 1234) {
      return console.log('LOGGED IN MATE');
    }
    return console.error("THERE WAS ERROR!");
  }

  var publicAPI = {
    login: doLogin
  }

  return publicAPI;
}

const fred = User();

fred.login("FRED", 1234);

// console.log(fred.login)




// THIS IDENTIFIER

function foo() {
  console.log(this.bar);
}

var bar = 'global';

var obj1 = {
  bar: "obj1",
  foo: foo
}

var obj2 = {
  bar: "obj2"
}

foo();
obj1.foo();
foo.call(obj2);
foo.apply(obj1);
new foo();

function Banana(name, age, isLit) {
  return {
    name,
    age,
    isLit,
    hobby: function() {
      console.log("I like football");
    }
  }
}

const apple = new Banana("joe", 44, false);
console.log(apple.name);


console.clear();


// PROTOTYPES

var foo = {
  name: 'fellini',
  age: 44
}

var bar = Object.create( foo );

bar.b = "WUNDERBAR!!!";

console.log(bar);
console.log(bar.b);