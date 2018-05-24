// 두 점 사이의 최대거리를 구하기 
// 최대값- 최소값 ^2한 것이 제일 크기 때문에 이를 두점으로 하고 나머지로
function solution(A, B, C, D) {
  const sorted = [A,B,C,D].sort((a,b)=>b-a)
  const firstGap = sorted[0]-sorted[3]
  const secondGap = sorted[1]-sorted[2]
  return firstGap**2+secondGap**2
  // write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution(4,2,1,3));