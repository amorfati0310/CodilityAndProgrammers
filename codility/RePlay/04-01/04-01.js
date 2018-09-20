    // A[0] = 4
    // A[1] = 1
    // A[2] = 3
    // A[3] = 2



function solution(A) {
  const setA = new Set([...A])
  if(setA.size!==A.length) return 0
  for(let i =1; i<=A.length; i++){
    if(setA.has(i)===false) return 0
  }
  return 1;
  // write your code in JavaScript (Node.js 8.9.4)
}
console.log(solution([4,1,3,2]))