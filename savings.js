let earnings = [900, 2700, 3400];

function savings(arr, n) {
  if (typeof arr != typeof [] || typeof n != typeof 10) {
    console.log("invalid");
    return;
  }
  let total_tex = 0;
  let total_erning = 0;
  for (i = 0; i < arr.length; i++) {
    total_erning += arr[i];

    if (arr[i] >= 3000) total_tex += arr[i] * parseFloat(20 / 100);
  }
  let savings = total_erning - (n + total_tex);

  if (savings < 0) return "earn more";
  else return savings;
}

let x = savings(earnings, 10000);
console.log(x);
