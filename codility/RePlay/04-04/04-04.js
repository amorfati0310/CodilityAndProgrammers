//https://app.codility.com/demo/results/trainingCMJ4EW-G79/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const setA = new Set(A)
  debugger;
  for(let i =1; i<=A.length+1; i++){
    if(setA.has(i)===false) return i;
  }
}
console.log(solution([1,2,3]))

