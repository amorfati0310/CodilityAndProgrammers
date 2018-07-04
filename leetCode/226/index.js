/**
 * Definition for a binary tree node.
 
 
 
 
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// invertTree가 left랑 right를 바꾼다 


var invertTree = function(root) {
    if(root===null) return null;
    let {left, right} = root
    let temp = left
    left = right 
    right = temp; 
    root.left = left
    root.right = right
    invertTree(root.left)
    invertTree(root.right)
    return root;
};


// 다른사람의 풀이 

// public TreeNode invertTree(TreeNode root) {
//   if (root == null) {
//       return null;
//   }
//   TreeNode right = invertTree(root.right);
//   TreeNode left = invertTree(root.left);
//   root.left = right;
//   root.right = left;
//   return root;
// }

// var invertTree = function(root) {
//   function do_invert(root) {
//       if (!root) { return null; }
//       let lr = do_invert(root.left);
//       let rr = do_invert(root.right);
      
//       root.left = rr;
//       root.right = lr;
      
//       return root;
//   }
//   return do_invert(root);
// };
