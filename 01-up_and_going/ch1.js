// P.4
// EXECUTING A PROGRAM //////////////////////////////////////////////////////

// There is a difference between INTERPRETING CODE and COMPILING CODE
  // JS code is INTERPRETED




// P.11-12
// CONVERTING BETWEEN TYPES //////////////////////////////////////////////////

// IMPLICIT coercion vs EXPLICIT coercion
// Ex.

"99.99" == 99.99 // In this instance, JS will IMPLICITLY convert the left-side to a Number

// Implicit coercion is a mechanism that CAN BE LEARNED, and moreover SHOULD BE LEARNT by anyone wishing to take JS programming seriously.




// P.11-12
// COMMENTING CODE /////////////////////////////////////////////////////////////

// Code without comments is suboptimal
// Too many comments is probably a sign of poorly written code.
// Comments should explain WHY, not WHAT. They can optionally explain HOW us what's written is particularly confusing.




// P.15
// VARIABLES //////////////////////////////////////////////////////////////////

// JS uses DYNAMIC TYPING, meaning variables can hold values of any type without any type enforcement.
// The primary purpose of variables is to MANAGE PROGRAM STATE.
// STATE is tracking the changes to values as your program runs.




// P.22
// LOOPS //////////////////////////////////////////////////////////////////////

for (let i = 0; i < array.length; i++) {
  array[i]
}

let i = 0; // Initialization clause
i < array.length: // conditional test clause
i++ // update clause




// P.24
// SCOPE //////////////////////////////////////////////////////////////////////

// If one scope is nested inside another, code inside the innermost scope can access variables from either scope.
// Lexcial scope rules sary that code in one scope can access variables of either that scope or any scope outside of it.




// P.26
// EXERCISES ////////////////////////////////////////////////////////////////

const PHONE_PRICE = 87.45;
const ACCESSORY_BUDGET = 500;
const ACCESSORY_PRICE = 26.50;
const VAT = 0.15;

let current_balance = 1359;
let amount = 0;

console.log(amount.toFixed(2));

while (amount < current_balance) {

  amount = amount + PHONE_PRICE;

  if (amount < ACCESSORY_BUDGET) {
    amount = amount + ACCESSORY_PRICE;
  }

}

console.log(amount.toFixed(2));

function calculateVAT(amount) {
  return amount.toFixed(2) * VAT;
}

const totalAmountOwed = amount + calculateVAT(amount);

console.log(totalAmountOwed.toFixed(2));

if (totalAmountOwed > current_balance) {
  console.log("You cannot afford this purchase.");
} else {
  console.log("You can afford this purchase.");
}
