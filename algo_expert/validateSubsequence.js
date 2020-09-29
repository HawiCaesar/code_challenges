function isValidSubsequence(array, sequence) {
  // Write your code here.
  if (array.length == 1 || array.join() === sequence.join()) {
    return true;
  }

  let similiarities = array.filter((x) => sequence.includes(x));

  if (similiarities.length > sequence.length) {
    return true;
  }

  return similiarities.join() === sequence.join();
}
