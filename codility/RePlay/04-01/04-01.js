    // A[0] = 4
    // A[1] = 1
    // A[2] = 3
    // A[3] = 2

// https://app.codility.com/demo/results/trainingXDFXAW-PWE/

function solution(A) {
  const setA = new Set(A)
  if(setA.size!==A.length) return 0
  for(let i =1; i<=A.length; i++){
    if(setA.has(i)===false) return 0
  }
  return 1;
  // write your code in JavaScript (Node.js 8.9.4)
}

// 팀 풀이 
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  return [...Array(A.length+1).keys()].concat(A).reduce((pre,cur)=>pre ^ cur) ? 0 : 1;
}
console.log(solution([4,1,3,2]))