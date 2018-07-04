// 617. Merge Two Binary Trees

// 문제 이해 겹치면 합쳐짐 


function TreeNode(val) {
       this.val = val;
       this.left = this.right = null;
}

var mergeTrees = function(t1, t2) {
    // 둘 중 하나도 값이 없는 경우 
    const mergePoint = (t1, t2)=> {
      if(t1.val===undefined && t2.val===undefined) return new TreeNode();
      // 둘 중 하나만 값이 있는 경우
      if(t1.val===undefined || t2.val===undefined){
        if(t1.val===undefined) return new TreeNode(t2.val);
        else return new TreeNode(t1.val);
      }
      return new TreeNode(t1.val+t2.val)
    }
    // 둘다 시작 값이 있는 경우 
    const currentPoint = mergePoint(t1,t2)
 
    currentPoint.left = mergeTrees(t1.left, t2.left)
    currentPoint.right = mergeTrees(t1.right, t2.right)
    return currentPoint;
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



mergeTrees(t1, t2)
 // 추가적으로 해보고 싶은 사항 트리노드 클래스 구현해보기 