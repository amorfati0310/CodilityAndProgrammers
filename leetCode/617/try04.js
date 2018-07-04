/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var mergeTrees = function(t1, t2) {
// mergePoint
  const mergeTree = new TreeNode()
  const merge = (t1,t2)=> {
      if(t1.val&&t2.val) mergeTree.val = t1.val+t2.val
      else {
        if(t1.val) mergeTree.val = t1.val
        if(t2.val) margeTree.val = t2.val
      } 
  }
  if(t1&&t2){
    merge(t1,t2)
  }
  else{
    if(t1) return t1
    if(t2) return t2
  }
}
const mergePoint = (t1,t2, mergeTree)=> {
if(t1&&t2){
 if(t1.val||t2.val){
   if(t1.val&&t2.val) mergeTree.val = t1.val+t2.val
   else {
     if(t1.val) mergeTree.val = t1.val
     if(t2.val) margeTree.val = t2.val
   }
 } 
 if(t1.left || t2.left){
   mergeTree.left = new TreeNode()
   if(t1.left && t2.left) mergePoint(t1.left, t2.left, mergeTree.left)
   else {
     if(t1.left) mergeTree.left = t1.left
     if(t2.left) mergeTree.left = t2.left
   }
 }
 if(t1.right || t2.right){
   mergeTree.right = new TreeNode()
   if(t1.right && t2.right) mergePoint(t1.right, t2.right, mergeTree.right)
   else {
     if(t1.right) mergeTree.right = t1.right
     if(t2.right) mergeTree.right.val = t2.right
   }
 }
}
else{
 if(t1) mergeTree = t1
 if(t2) mergeTree = t2
}
}
mergePoint(t1,t2, mergeTree);
return mergeTree
};



const t1 = new TreeNode(1);
const t2 = new TreeNode(2);
t1.left = new TreeNode(3);
t1.right = new TreeNode(2);
t1.left.left = new TreeNode(5);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);
t2.left.right = new TreeNode(4);
t2.right.right = new TreeNode(7);



console.log(mergeTrees(t1, t2));