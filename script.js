function persistence(num) {
  // If the number is less than 10, return 0
  let persistence = 0;

  // While num is greater than 1, split into array, reduce to multiply, and increment persistence
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b);
    persistence++;
  }

  return persistence;
}

// console.log(persistence(39)); // 3
// console.log(persistence(4)); // 0
// console.log(persistence(25)); // 2
// console.log(persistence(999)); // 4
