// nextSqaure함수는 정수 n을 매개변수로 입력받습니다.
// n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 'no'을 리턴하는 함수를 완성하세요.
// 예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 'no'을 리턴하면 됩니다.

function nextSqaure(n){
    //함수를 완성하세요
    const sqrtN = Math.sqrt(n)
    const result = sqrtN === parseInt(sqrtN) ? (sqrtN+1)*(sqrtN+1) : 'no'
    return result
  }

//   const result = sqrtN === parseInt(sqrtN) ? 프로그래머스에서는 이부분이 오류(sqrtN+1)**2 : 'no'

  // 아래는 테스트로 출력해 보기 위한 코드입니다.

  //다른사람들의 풀이 
  console.log("결과 : " + nextSqaure(121));

// 1. while문으로 찾은 점 아마 내장 Method가 없으면 이런식으로 2번 곱해서 n이니를 찾아나서야 될 것이다 
// 2. Number.isInteger 이런 클래스 Method가 있구나  Math.pow 몇 승을 할 떄 하기 좋겠다 + 

//   function nextSqaure(n){
//     var result = 0;
//     var x = 0;
//     while (x*x < n){
//       x++;
//     }
//     if (x*x == n){
//       x++;
//       result = x*x; 
//     }else{
//       result = 'no';
//     }
  
//     return result;
//   }



//   function nextSqaure(n){
//     var result = 0;
//     var n = Math.sqrt(n);
//     result = Number.isInteger(n) ? Math.pow(n+1, 2) : 'no';
//     return result;
// }
