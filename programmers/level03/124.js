// 124 나라가 있습니다. 
// 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
// 예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

// 10진법	124 나라	10진법	124 나라
// 1	1	6	14
// 2	2	7	21
// 3	4	8	22
// 4	11	9	24
// 5	12	10	41
// 자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// n은 500,000,000이하의 자연수 입니다.

// 1,2,4 

// 1*3

// 11 12 14
// 21 22 24 
// 41 42 44

// 3*3 

// 111 112 114 
// 121 122 124
// 141 142 144 
// 211 212 214 
// 221 222 224
// 241 242 244

// 9*3

// 1111 1112 1114
// 1121 1122 1124
// 1141 1142 1144 
// 12-> 9
// 14 -> 9

// 27 *3

// 3 9 27 81 자리수는 

const change124 = n => {
  let copyN = n;
  let digits = 1;
  while(n>0){
    n-=3**digits
    if(n>0) digits+=1
  }
  let list124 = new Array(digits)
  for(let i =1; i<digits; i++){
    copyN-=3**i
  }
  let lastDigits = digits-1
  const numbers = [1,2,4]
  for(let i =0; i<list124.length; i++){
    let portion = copyN /(3**lastDigits)
    let rest = copyN %(3**lastDigits)
    if(rest!==0){
      list124[i] = numbers[portion]
    }
    else list124numbers[portion-1]
  }
  
  console.log(digits);
}

console.log(change124(32))

