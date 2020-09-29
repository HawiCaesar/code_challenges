function getNthFib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;

  let total = getNthFib(n - 1) + getNthFib(n - 2);

  return total;
}
