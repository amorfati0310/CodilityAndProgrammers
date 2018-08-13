function solution(n) {
  const mid = Math.floor(n/2)
  let count = 1;
  for(let i =1; i<=mid; i++){
      if(isContinuous(i,n)) count+=1
  }
  function isContinuous(start, n){
      for(let i =start; n>0; i++){
          n-=i;
      }
      return n===0;
  }
  return count;
}

// 다른 사람의 풀이 
function expressions(num) {
  var answer = 0;

for(var i=1; i<=num; i++) {
  if (num%i == 0 && i%2 == 1)
    answer++
}
  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(expressions(15));
// i로 나눠지고 나머지가 1이면 증가시켜라 ??? -> 15 / 4,5,6  
// 이게 어떻게 되는거지???