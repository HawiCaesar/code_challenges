function twoNumberSum(array, targetSum) {
  // Write your code here.

  if (!array.length) return [];

  let finalArray = {};

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        // preventing a single integer adding it to itself
        let loopSum = array[i] + array[j];

        if (loopSum == targetSum) {
          finalArray[array[i]] = array[i];
          finalArray[array[j]] = array[j];
        }
      }
    }
  }

  return Object.values(finalArray); // return only the values
}
