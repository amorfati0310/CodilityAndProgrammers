// 지금까지의 합 - 남은 원소 합의 절대값이 P 최소 일 떄 값을 구하는 함수 

// totalSum
// sumNow - (totalSum - sumNow)

//-1, 1   -2 -> 2



function solution(A) {
  let totalSum = A.reduce((ac,c)=>ac+c)
  let sumNow = 0;
  let tempMinGap = null;
  debugger;
  for(let i =0; i<A.length-1; i++){
    sumNow+=A[i]
    const gap = Math.abs(-totalSum+2*sumNow)
    if(tempMinGap===null) tempMinGap = gap;
    else tempMinGap = Math.min(gap, tempMinGap);
  }
  return tempMinGap;
  // write your code in JavaScript (Node.js 8.9.4)
}
console.log(solution([3,1,2,4,3]))
console.log(solution([-1,1,-1,1,-1,1,-1,1,-1,1]))