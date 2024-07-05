const arr = [
  11, 1, 12, 2, 13, 3, 14, 4, 15, 5, 16, 6, 17, 7, 18, 8, 10, 9, 19, 20,
];
arr.sort(function (a, b) {
  return a - b;
});

console.log(arr);
