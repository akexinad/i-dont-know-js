/*

WHAT IS SCOPE

STATE:
    - Program state is the ability to store values and pull value out of variables.

1. Engine: responsible for start-to-finish compilation and execution of our JavaScript program.

2. Compiler: one of Engine's friends; handles all the dirty work of parsing and code-generation (see previous section).

3. Scope: another friend of Engine; collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code.

WHEN ASSIGNING VARIABLES

First, Compiler declares a variable (if not previously declared in the current scope), and second, when executing, Engine looks up the variable in Scope and assigns to it, if found.

ReferenceError is Scope resolution-failure related.
TypeError implies that Scope resolution was successful, but that there was an illegal/impossible action attempted against the result.

*/

function foo(a) {
    var b = a;
    return a + b;   
}

var c = foo(2);

// LHS => `foo` of `a`, `b` of `a`, the implict `a = 2`
// RHS => `foo(2...`, `= a`, `a + ...` and `... + b`

'use-strict';

