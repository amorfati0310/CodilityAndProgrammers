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

const t1 = new TreeNode(1)
const t2 = new TreeNode(2)
t1.left = new TreeNode(3)
t1.right = new TreeNode(2)
t1.left.left = new TreeNode(5)
t2.left = new TreeNode(1)
t2.right = new TreeNode(3)
t2.left.right = new TreeNode(4)
t2.right.right = new TreeNode(7)


var mergeTrees = function(t1, t2) {
    // const mergeTree = new TreeNode(t1.val+t2.val)
    const merge = (t1, t2)=>{
      const mergeTree = new TreeNode(t1.val+t2.val)
      mergePoint(t1, t2, mergeTree, 'left')
      mergePoint(t1, t2, mergeTree, 'right') 
      // merge(t1, t2, mergeTree.left)
      // merge(t1, t2, mergeTree.right)
      return mergeTree
    }
    const mergePoint = (p1, p2, root, d)=> {
      if(p1[d]!==null && p2[d]===null) mergeTree[d] = p1[d]
      if(p1[d]===null && p2[d]!==null) mergeTree[d] = p2[d]
      if(p1[d]!==null && p2[d]!==null) mergeTree[d] = new TreeNode(p1[d].val+p2[d].val)   
    }
    merge(t1, t2)
};


mergeTrees(t1,t2)