//예를 들어 8이면 8C0 7C1 6C2 5C3 4C4

function Combination(n,k){
  if(k===0||k===n) return 1;
  return Combination(n-1, k-1)+Combination(n-1,k)
}

function jumpCase(num) {
  let k=sum=0;
  let numCopy = num;
  debugger;
  while(numCopy>=0){
    sum+=Combination(num,k)
    num-=1;
    k+=1;
    numCopy-=2;
  }
	return sum;
}

//아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(jumpCase(3));
console.log(jumpCase(4));
console.log(jumpCase(5));
console.log(jumpCase(6));
console.log(jumpCase(7));
console.log(jumpCase(8));

// 이거 자체가 피보나치 수였다니...

// 다른 사람 풀이 

// function jumpCase(num) {
//   if (num === 1) return 1
// if (num === 2) return 2
// return jumpCase(num-1) + jumpCase(num-2)
// }