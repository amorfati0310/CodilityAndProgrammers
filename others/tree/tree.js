class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(5);
root.left = new Node(3);
root.left.right = new Node(4);
root.right = new Node(7);
root.right.right = new Node(9);
console.dir(root);

const printTree = tree => {
  if(tree===null) return ;
  console.log(tree.val)
  printTree(tree.left)
  printTree(tree.right)
}
printTree(root);


// 중위순회 -> BST에서 정렬
const printTreeO = tree => {
  if(tree===null) return ;
  printTree(tree.left)
  console.log(tree.val)
  printTree(tree.right)
}
printTreeO(root);
//  insert !!!
// crud 

const printTreeB = tree => {
  if(tree===null) return ;
  printTree(tree.left)
  printTree(tree.right)
  console.log(tree.val)
}
console.log('b');
printTreeB(root);

// 배열 구현이 쉽다. 비어있는 노드 있는 경우 공간 낭비 생긴다
const tree = [5,3,7, null, 4, null, 9];

// 2n+1. 2n+2
// 한 칸 비우고 2n , 2n
// parent Math.floor(n-1/2) 계산 하는 것이 훨씬 빠름  참조 참조 찾아가는 것 보다 

