/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
      this.val = val;
     this.left = this.right = null;
}

var maxDepth = function(root) {
    let maxDepth = 0;
    if(root === null) return 0;
    if(!root.left&&!root.right) return 1;

    const checkDepth = (point, story=1)=>{
      story+=1
      if(point.left) checkDepth(point.left, story)
      if(point.right) checkDepth(point.right, story)
      if(!point.left && !point.right) maxDepth = Math.max(maxDepth, story)
    }   

    if(root.left) checkDepth(root.left)
    if(root.right) checkDepth(root.right)
    
    return maxDepth 
};


const test = new TreeNode(3)
test.left = new TreeNode(9)
test.right = new TreeNode(20)
test.right.left = new TreeNode(15)
test.right.right = new TreeNode(7)
test.right.right.right = new TreeNode(3)
console.dir(test);
console.log(maxDepth(test));


