function solution(A, B) {
  let Awins = 0;
  const cardsPoint = {
    'A': 14,
    'K': 13,
    'Q': 12,
    'J': 11,
    'T': 10,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  }
  for(let i =0, {length}=A; i<length; i++){
    if(cardsPoint[A[i]] > cardsPoint[B[i]]) Awins+=1
  }
  return Awins;
}

console.log(solution("A586QK", "JJ653K"));
// 4
console.log(solution("23A84Q", "K2Q25J"));
// 4

// 둘다 영어인지 
// 둘다 숫자인지 
// 영어 / 숫자인지 
// 숫자 영어인지 
// 같은지 