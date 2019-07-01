/*

SEVEN BUILT-IN TYPES IN JAVASCRIPT

- null
- undefined
- boolean
- number
- string
- object
- symbol

All of these types excpect object are called primitives.


Functions and Arrays are subtypes to object.

VALUES HAVE TYPES, NOT VARIABLES.

Note: Many developers believe there should never be any variables in the global namespace, and that everything should be contained in modules and private/separate namespaces. This is great in theory but nearly impossible in practicality; still it's a good goal to strive toward! Fortunately, ES6 added first-class support for modules, which will eventually make that much more practical.

*/

// UNDECLARED AND UNDEFINED.

// Using the typeof function to check if global variale has been declared without running reference errors.

// oops, this would throw an error!
// if (DEBUG) {
// 	console.log( "Debugging is starting" );
// }

// this is a safe existence check
if (typeof DEBUG !== "undefined") {
	console.log( "Debugging is starting" );
}