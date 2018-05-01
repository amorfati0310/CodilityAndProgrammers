// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
//  예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.

// Harshad함수는 양의 정수 n을 매개변수로 입력받습니다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하세요.
// 예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴하면 됩니다.

function Harshad(n){
  var result ;
  //함수를 완성하세요
  // 1.자리수의 합을 구한다.
  // 제일 큰 자리수를 어떻게 체크?
  // 1. toString -> 길이 좀 야메 같음 ->split ->각각의 합 n 으로 나눠지는지 
 const TEN = 10;
 let digits = 0;
  while(n>=TEN**digits){
    digits+=1
  }
  // digits는 자릿수를 나타냄 
  // 123 digits = 3 23 i 2 3   1
  let copyN = n;
  let sumDigits = 0;
  for(let i =digits; i>0; i--){
    debugger;
    sumDigits += parseInt(copyN/(TEN**(i-1)))
    copyN=copyN%(TEN**(i-1))
  }

  
  return n%sumDigits===0;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(Harshad(18))
console.log(Harshad(127))

// 다른 사람 풀이
// 자리수를 구하고... 각각의 자릿수 합을 구하는 과정을 한 꺼번에 처리할 수 있었는데 ;;; 
// while(n){
//   sum += n%10;
//   n /= 10;
//   n = Math.floor(n);
// }
//
// function Harshad(n){
//   return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
// }