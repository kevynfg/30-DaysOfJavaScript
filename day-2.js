// Complete the solve function below.
function main() {
  solve(meal_cost, tip_percent, tax_percent);
}

function solve(meal_cost, tip_percent, tax_percent) {
  const meal_cost = parseFloat(readLine());

  const tip_percent = parseInt(readLine(), 10);

  const tax_percent = parseInt(readLine(), 10);

  mealCost = Math.round(
    mealCost + (mealCost * tipPercent) / 100 + (mealCost * taxPercent) / 100
  );
  console.log('The total meal cost is ' + mealCost);
}
