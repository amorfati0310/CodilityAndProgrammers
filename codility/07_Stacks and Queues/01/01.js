// 핵심은 자신보다 내려와 있으면  같은 친구가 나와도 합칠수가 없다?!

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)

  // stack 
  if(H.length<2) return H.length;
  let heightStack = [];
  let compareValue = H[0];
  heightStack.push(compareValue);
  let count = 0;
  for(let i =1; i<H.length; i++){
      if(compareValue > H[i]){
        count+=new Set(heightStack).size
        heightStack = []
        compareValue=H[i]
        heightStack.push(compareValue);
      }
      else{
        heightStack.push(H[i])
      }
  }
  count+=new Set(heightStack).size
  return count;
}

solution([8,8,5,7,9,8,7,4,8])
solution([1,0,2,1,2,3,0,1,2,3,2])