// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 
// F(n) = F(n-1) + F(n-2) 가 적용되는 점화식입니다. 2 이상의 n이 입력되었을 때, 
// fibonacci 함수를 제작하여
//  n번째 피보나치 수를 반환해 주세요. 예를 들어 n = 3이라면 2를 반환해주면 됩니다.


// recursion 재귀 
function fibonacci(num) {
    if(num<2) return num;
	return fibonacci(num-1)+fibonacci(num-2);
}

// not recursion 
function fibonacci(num) {
    if(num<2) return num;
    let x,y,z;        
    x=0;
    y=1;
    z=x+y;
    for(let i=2; i<num; i++){
        x=y
        y=z
        z=x+y;
    }
    return z    
}
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  // 0 1 1 2 3 5 8 13 21
  console.log(fibonacci(4))
  console.log(fibonacci(8))