// 핵심은 자신보다 내려와 있으면  같은 친구가 나와도 합칠수가 없다?!

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)

  // stack 

  // 안되는 이유 기준값이 한 번 높은 값 나왔다가 중간값이 나온 후에 다시 올라갈 떄 중간값 이후 값들을 체크 못 해준다 !!!
  if(H.length<2) return H.length;
  debugger;
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
  console.log(count);
  return count;
}

solution([8,8,5,7,9,8,7,4,8])
solution([1,2,3,4,5,4,3,4,5,4,5,4])