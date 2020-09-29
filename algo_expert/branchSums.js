// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSumHelper(node, runningSum, sums) {
  if (!node) return;

  let newSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newSum);
    return;
  }

  branchSumHelper(node.left, newSum, sums);
  branchSumHelper(node.right, newSum, sums);
}

function branchSums(root) {
  // Write your code here.
  const Fulltotal = [];
  branchSumHelper(root, 0, Fulltotal);
  return Fulltotal;
}
