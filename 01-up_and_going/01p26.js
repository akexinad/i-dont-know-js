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
