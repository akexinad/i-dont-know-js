



// CHAPTER 3: NATIVES

// Below is a list of the most commomly used natives.

String()
Number()
Boolean()
Array()
Object()
Function()
RegExp()
Date()
Error()
Symbol() // -- added in ES6!


// NOTE: THEY ARE ALL OBJECT TYPES.

/*

In general, there's basically no reason to use the object form directly. It's better to just let the boxing happen implicitly where necessary. In other words, never do things like new String("abc"), new Number(42), etc -- always prefer using the literal primitive values "abc" and 42.

*/

// If you want to know the primitive value of an object wrapper:

var a = new String( "abc" );
var b = new Number( 42 );
var c = new Boolean( true );

a.valueOf(); // "abc"
b.valueOf(); // 42
c.valueOf(); // true




// THE Array(..) OBJECT WRAPPER

// Be careful when using this object wrapper, it can get very confusing because its methods to not as you would expect them to work.




// Date(..) and Error(..)

// These are the real useful object wrappers.

// Tip: Technically, in addition to the general Error(..) native, there are several other specific-error-type natives: EvalError(..), RangeError(..), ReferenceError(..), SyntaxError(..), TypeError(..), and URIError(..). But it's very rare to manually use these specific error natives. They are automatically used if your program actually suffers from a real exception (such as referencing an undeclared variable and getting a ReferenceError error).




// SYMBOL

// Symbols are special "unique" (not strictly guaranteed!) values that can be used as properties on objects with little fear of any collision. They're primarily designed for special built-in behaviors of ES6 constructs, but you can also define your own symbols.

// Note: Symbols are not objects, they are simple scalar primitives.