// NUMBERS

// When comparing probelmatic fractions, use Number.EPSILON.

function numbersCoseEnoughToEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;

const x = numbersCoseEnoughToEqual(a, b);
console.log(x);


// TESTING FOR INTEGERS

Number.isInteger();
Number.isSafeInteger();




// SPECIAL VALUES

/*

- For undefined and and null, they are both type and its value.
- The difference between null and undefined:
	NULL is an empty value.
	UNDEFINED is a missing value.
	
	OR 
	
	UNDEFINED hasn't had a value yet.
	NULL had a value and doesn't anymore.

- NEVER DECLARE A VARIABLE AS UNDEFINED!

*/

// If you need to ensure that the expression has no value, use the void operator.

function doSomething() {
	// note: `APP.ready` is provided by our application.
	if (!APP.ready)  {
		// try again later
		return void setTimeout( doSomething, 100 );
	}

	var result;

	// do some other stuff.
	return result;
}

// were we able to do it right away?
if (doSomething()) {
	// handle next tasks right away.
}

/* 

In general, if there's ever a place where a value exists (from some expression) and you'd find it useful for the value to be undefined instead, use the void operator. That probably won't be terribly common in your programs, but in the rare cases you do need it, it can be quite helpful.




SPECIAL NUMBERS


NaN

- NaN is actually a number value.
- You have to think of NaN as meaning 'Invalid' 'Failed' or 'Bad' number.

*/

// NOTE: To distinguish between a real NaN and something that is actually not a number type to begin with you need to use:

Number.isNaN();
// instead of just:
isNaN();




// ZEROS

// There is a difference between 0 and -0.
// This is important because when dealing with physics based software the - symbol informs you of the initial vector direction.
// To identify a negative zero, use this function:

function isNegZero(num) {
	num = Number( num );
	return (n === 0) && (1 / n === -Infinity);
}




// SPECIAL EQUALITY

// To test for absolute equality, we use:

Object.is();




// VALUE VS. REFERENCE.

/*

Simple values (aka scalar primitives) are always assigned/passed by value-copy: null, undefined, string, number, boolean, and ES6's symbol.

Compound values -- objects (including arrays, and all boxed object wrappers -- see Chapter 3) and functions -- always create a copy of the reference on assignment or passing.

*/

function foo(x) {
	x.push( 4 );
	x; // [1,2,3,4]

    // later
    // NOTE: Here you are just creating a new variable and calling it x, which has nothing to do with the x that you have declared as a variable.
	x = [4,5,6];
	x.push( 7 );
	x; // [4,5,6,7]
};

var a = [1,2,3];

foo( a );

a; // [1,2,3,4]  not  [4,5,6,7]