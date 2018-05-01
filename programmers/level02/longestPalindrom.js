// 앞뒤를 뒤집어도 똑같은 문자열을 palindrome이라고 합니다.
// longest_palindrom함수는 문자열 s를 매개변수로 입력받습니다.
// s의 부분문자열중 가장 긴 palindrom의 길이를 리턴하는 함수를 완성하세요.
// 예를들어 s가 토마토맛토마토이면 7을 리턴하고 토마토맛있어이면 3을 리턴합니다.

//  토-어 토-있 토-마 토-토 (O)-> 토마토 ->
//  에토마토씨비 에-비 에-씨- 에-토 에-마 -> 토 -비 토 -씨 - 토 토 (ㅇ)
//  에씨비에씨비토마토
//

// 1. paindrom조건 앞 뒤과 같은 글자 
// 우선  paindrom조건에 맞는 앞 뒤 글자를 찾는다. 
// 첫글자 뒤에 글자
// 팰린드롬이 중간부터도 시작할 수 있고 그러면 엄청 복잡할 것 같은데 ...
// 앞뒤과 같은 글자이면 palindrom조건 만족 -> 다음글자 진행 !
// 다른 경우 
// 첫 글자랑 마지막 글자랑 같으면 

// function longest_palindrom(s){
//   // 함수를 완성하세요
//   // i, j -> 0,0
//   let set = [];
//   let startIdx;
//   let maxLength=1;
//   for(let i =0, {length}=s; i<length/2; i++){
//     for(let j=0; j<length; j++){
//       if(length-j-i<maxLength) return maxLength;
//       //가르키는 위치가 서로 같을 떄 ! palindrom완성 !
//       if(i>length-(j+1)){
//         if(set.length){
//           maxLength = maxLength===1 ? set.length : Math.max(set.length, maxLength)
//           set = [];
//           i=startIdx
//           startIdx=undefined
//         }
//         break;
//       }
//       if(i===length-(j+1)){
//         set.push(i)
//         maxLength = maxLength===1 ? set.length : Math.max(set.length, maxLength)
//         set = [];
//         i=startIdx
//         startIdx=undefined
//         break;
//       }
//       else{
//         if(s[i]===s[length-(j+1)]){
//           startIdx = startIdx===undefined ? i : Math.min(startIdx, i)
//           set.push(i,length-(j+1))
//           i+=1;
//         } 
//       }
//     }
//   }
//   console.log('set',set,'setList', setList)
//   return maxLength;
// }

// 디자인
// 길이가 1짜리는 길이가 1 있으면 있고 
// 길이 2짜리를 찾는다 
// 길이가 3짜리를 찾는다 1.3 같으면 
// 길이가 4짜리를 찾는다  1.4. 2.3 
// 길이가 5짜리를 찾는다 1.5 2.4 같으면 같다
// 길이가 6짜리를 찾는다 1.6 2.5 .3.4 같으면 같다
// 길이가 7짜리를 찾는다 1.7. 2.6. 3.5 같으면 같다

// 0,1 1,2 2,3 3,4 4,5
function longest_palindrom(s){

  let inputStringLength = s.length;
  let maxLength = 1;
  const lengthCheckMethods = {
    0: (length)=> length===0,
    1: (length)=> length>=1
  }
  debugger;
  for(let i =0; i<=inputStringLength; i++){
    if(i<2){
      if(lengthCheckMethods[i](inputStringLength)) maxLength===i
    }
    else{
          for(let j=0; j<=inputStringLength-i; j++){
            for(let k=0; k<i/2; k++){
              if(s[j+k]!==s[j+i-k-1])break;
              if((i-2*k-1)<=2){
                maxLength=i
                j=inputStringLength-i+1
              }
            }
          }
        }
  }
  return maxLength;
}
  





// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( longest_palindrom("토마토맛토마토") )
console.log( longest_palindrom("토마토맛있어") )
console.log( longest_palindrom("123454321789") )
console.log( longest_palindrom("zzbaabcd") )
console.log( longest_palindrom("저기저사람여보게저기저게보여") )


// 다른 사람의 풀이 


// 다른 사람의 풀이 재귀로 
// 1. reverse한 거랑 같으면 바로 리턴 
// 2. 아닌 경우 
// 0-s.length, 1-s.length 하나씩 빼준 것만 해도 재귀니까 계속 순차적으로 돌아가는 구나 :D 와 !! 감탄

// 다른 분들이 대체로 풀이가 나보다 간단한 이유 palindrom자체를 `s.split("").reverse().join("")` 바로 요렇게 처리해서 비교 나는 for문을 돌아서 끝값씩 순차적으로 비교하면서 오는 방식인 반면 
// 내장 메소드를 활용하면 훨씬 직관적 + 한번에 처리할 수 있는 방법 없나 고민을 

// // js
// function longest_palindrom(s){
//   // 함수를 완성하세요
//   if (s === s.split("").reverse().join("")) {
//     return s.length;
//   } else {
//     var A = longest_palindrom(s.substring(0, s.length-1));
//     var B = longest_palindrom(s.substring(1, s.length));
//     return Math.max(A, B);
//   }
// }

// 요렇게 푸신 분도 
// 위에 풀이 처럼 maxLength를 구하는 부분이니까 뒤에서 부터 구하는 것이 나을지도 :D 

// function longest_palindrom(s){
//   var result = 0;
//   var sumtext = '';
//   var reverstext = '';
//   // 함수를 완성하세요

//   for (var i = 0; i < s.length; i++) {
//     sumtext ='';
//     for (var j = i; j < s.length; j++) {
//       sumtext += s[j]
//       reverstext = sumtext.split('').reverse().join('');
//       if (sumtext === reverstext && sumtext.length > result) { 
//         result = sumtext.length;
//       }
//     }
//   }
//   return result;
// }


