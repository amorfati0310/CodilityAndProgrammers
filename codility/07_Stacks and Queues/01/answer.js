function solution(H) {
  // write your code in JavaScript (Node.js 4.0.0)
  
  var counter = 0;
  var height = 0;
  var blocks = [];
  var i=0;
  while(i<H.length) {
      if(H[i] > height) {
          var newBlock = H[i] - height;
          blocks.push(newBlock);
          height += newBlock;
          counter++;
          i++;
      } else if(H[i] < height) {
          var lastBlock = blocks.pop();
          height -= lastBlock;
      } else {
          i++;
      }
  }
  
  return counter;
}
solution([1,3,4,2,1]);
solution([8,8,5,7,6,9,8,7,4,8])
solution([1,2,3,4,5,4,3,4,5,4,5,4])