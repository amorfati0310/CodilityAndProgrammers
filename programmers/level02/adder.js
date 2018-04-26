// adder함수는 정수 a, b를 매개변수로 입력받습니다.
// 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하세요.
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// 예를들어 a가 3, b가 5이면 12를 리턴하면 됩니다.

// a, b는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않습니다.

// n(n+1)/2을 이용하자 :D 
// Math.min(a,b) 비교해서 작은 값, 큰 값을 구별합니다.
//
// 작은값이 음수이면 -1까지 n(n+1)/2이 과정을 -1로 곱합니다.  
//  여기서 큰 값도 음수이면 마찬가지로 n(n+1)/2 *-1 해준 것을  작은 값 합에서 빼줍니다.
//  큰 값이 양수이면 n(n+1)/2을 더해줍니다 
// 작은값이 양수이면 큰수 n(n+1)/2- n(n+1)/2
//
function adder(a, b){
  var result = 0
  //함수를 완성하세요
  let min, max;
  if(a>=b){
    min = b;
    max = a;
  }
  else{
    max = b;
    min = a;
  }

  console.log(min,max);
  if(min<0){
   if(max>=0){
    let absMin = Math.abs(min)
     result = (-absMin*(absMin+1)+max*(max+1))/2
    }
   else{
    let absMAx = Math.abs(max)
    let absMin = Math.abs(min)
    result =  (-absMin*(absMin+1)+(absMAx-1)*(absMAx))/2
   }
  }
  else{
    result = ((max*(max+1))-(min-1)*(min))/2
  }
  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )
console.log( adder(-3, -5) )
console.log( adder(-5, 3) )



//다른사람 풀이
// return (a+b)*(Math.abs(b-a)+1)/2;

// function adder(a, b, s = 0){
//   for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
//   return s;
// }

// 간단히 정리할 수 있었을 텐데 !!! 아쉽 ;ㅁ;