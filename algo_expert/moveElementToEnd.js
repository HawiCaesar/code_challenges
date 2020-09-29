function moveElementToEnd(array, toMove) {
  // Write your code here.
  let lengthOfArray = array.length;

  for (let i = 0; i < lengthOfArray; i++) {
    if (array[i] === toMove) {
      array.push(array.splice(i, 1)[0]);
      i--;
      lengthOfArray--;
    }
  }
  return array;
}
