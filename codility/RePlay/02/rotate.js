function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if(K===0) return A;
  else {
    const firstIdx = (A.length-1-((K-1)%A.length))
    return A.slice(firstIdx).concat(A.slice(0,firstIdx))
  }
}
A1 = [0, 0, 0]
K1 = 1

A2 = [1, 2, 3,4]
K2 = 4

A3 = [3, 8, 9, 7, 6]
K3 = 3
console.log(solution(A1,K1));
console.log(solution(A2,K2));
console.log(solution(A3,K3));

// 팀 풀이 
function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  while(A.length && K--){
      A.unshift(A.pop());
  }
  return A;
}