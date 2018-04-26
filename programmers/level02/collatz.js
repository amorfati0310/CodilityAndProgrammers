// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 입력된 수가 짝수라면 2로 나누고,
// 홀수라면 3을 곱하고 1을 더한 다음, 결과로 나온 수에 같은 작업을 1이 될 때까지 반복할 경우 모든 수가 1이 된다는 추측입니다.
// 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. collatz 함수를 만들어 입력된 수가 몇 번 만에 1이 되는지 반환해 주세요. 
// 단, 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.


// const collatz = (count => (num) => {
//   if(num===1) return count;  
//   if(count>=500) return -1
//   count+=1
// 	return num%2===0 ? collatz(num/2) : collatz(num*3+1);
// })(0)

// ... 이거 이거 값 다 제대로 나오는데 거기 프로그래머스 사이트에서는 제대로 안 나온다 ! 'ㅁ';;; 뭐야 ~~ 

// 결론 재귀로 풀지 말아봅시다 
const collatz = (num) => {
  let count = 0;
  if(num===1) return count;  
  while(num!==1&&count<500){
    num = num%2===0 ? num/2 : num*3+1;
    count+=1
  }
  if(count>=500) return -1
  return count;  
}

// 다른 사람의 풀이 
// function collatz(num,count = 0) {
//   return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
// }

// return num == 1 ? answer : -1;


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( collatz(6) );