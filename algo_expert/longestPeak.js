function longestPeak() {
  let longestPeakLength = 0;

  if (!array.length) return 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] < array[i] && array[i + 1] < array[i]) {
      // get all peaks

      let leftIdx = i - 2;
      while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
        leftIdx--;
      }

      let rightIdx = i + 2;
      while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
        rightIdx++;
      }

      const currentPeakLength = rightIdx - leftIdx - 1;
      longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    }
  }

  return longestPeakLength;
}
