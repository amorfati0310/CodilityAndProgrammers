// 개구리가 처음엔 0이고 X+1에 가고 싶다. 
// 나뭇잎이 강으로 떨어지고 있다. 
// K시간에 떨어지는 잎에 포지션을 나타낸다. 


// (2, [2, 2, 2, 2, 2])

// 홀 72점 
// 초기값 설정 왜 이따구로 해놨냥 index기준인데 !!! 1을 놓다니 
// https://app.codility.com/demo/results/trainingDZHZZF-4Y8//

//+_+ 에러 검출을 안하다 아우 코딜리티 같은 사이트여서 그랬지 처음 설계 때 기본으로 해야 되는 걸 놓치고 그냥 돌리네 ;;;
//https://app.codility.com/demo/results/trainingYAMKQ4-3AF/
function solution(X, A) {
  const steps = {}
  for(let i =0; i<A.length; i++){
    if(steps[A[i]]===undefined) steps[A[i]]=i
  }
  let maxTime = 0;
  for(let i=1; i<=X; i++){
    // 위치 최초 값들이 나오는데 
    if(steps[i]===undefined) return -1
    maxTime = Math.max(steps[i], maxTime)
  }
  return maxTime
}
// 팀 풀이 
function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)    
  const marks = new Set();
  // 1. 값이 x보다 작으면 추가 
  // 2. size가 X랑 같아지면 return A.splice(1)
  // 배열이랑 A.splice(1) && i -> number(i)가 결과 값으로 나온다.
  // A.splice(1)-> 원 본 배열을 i 0만 남겨서 바로 return 시킬 수 있다. 
  return A.reduce((idx,v,i)=>{
     v <= X && marks.add(v);
     return marks.size === X ? A.splice(1) && i : idx;
  },-1);
}

console.log(solution(5,[1,3,1,4,2,3,5,4]))