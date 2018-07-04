function mergeTrees(t1, t2){
  if(t1===null) return t2;
  if(t2===null) return t1;
  let newTree = new TreeNode(t1.val+t2.val);
  newTree.left = mergeTrees(t1.left, t2.left);
  newTree.right = mergeTrees(t1.right, t2.right);
  return newTree;
}