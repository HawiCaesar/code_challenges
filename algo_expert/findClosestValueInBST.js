function findClosestValueInBst(tree, target) {
  // Write your code here.
  return treeHelper(tree, target, tree.value);
}

function treeHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return treeHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return treeHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
