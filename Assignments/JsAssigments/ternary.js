let number = [5, -2, 0, 8, -7];
number.map((n) => {
  console.log(
    n == 0
      ? "zero and even"
      : n > 0 && n % 2 == 0
      ? "positive and even"
      : n > 0
      ? "positive and odd"
      : n < 0 && n % 2 == 0
      ? "negative and even"
      : "negative and odd"
  );
});
