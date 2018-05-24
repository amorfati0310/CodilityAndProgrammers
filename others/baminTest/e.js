// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K, L) {
  if(A.length<K+L) return -1
  let sumApples = 0;

  // Set를 찾으면서 
  const getSumMaxL = (left, right, L)=> {
    let sumL = 0;
    for(let i =0; i<left.length-L+1; i++){
        const leftSum = left.slice(i,i+L).reduce((a,b)=>a+b)
        if(sumL<leftSum) sumL = leftSum
    }
    for(let i =0; i<right.length-L+1; i++){
      const rightSum = right.slice(i,i+L).reduce((a,b)=>a+b)
      if(sumL<rightSum) sumL = rightSum
    }
    return sumL;
  }

  let sumKL = 0;
  for(let i =0; i<A.length-K+1; i++){
    const sumK = A.slice(i,i+K).reduce((a,b)=>a+b)
    const left = A.slice(0,i);
    const right = A.slice(i+K);
    const maxL = getSumMaxL(left, right, L)
    if(sumKL<sumK+maxL) sumKL = sumK+maxL;
  }
  return sumKL
  // write your code in JavaScript (Node.js 8.9.4)
}
console.log(solution([6,1,4,6,3,2,7,4],3,2));
console.log(solution([10,19,15],2,2));
console.log(solution([5,6,7,8,1,2,2,],3,2));
// 연속적 3의 최대값은 6,7,8이지만 2개를 못 채우므로 패스 
// 그렇다면 가장 큰 최대값들을 구하는데 적어도 K만큼은 차이나게 해서 구해야 
// 연속적인 합 어떻게 구하는 걸까? 

