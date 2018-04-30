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
function longest_palindrom(s){
  // 함수를 완성하세요
  // i, j -> 0,0
  let set = [];
  let startIdx;
  let maxLength=1;
  for(let i =0, {length}=s; i<length/2; i++){
    for(let j=0; j<length; j++){
      if(length-j-i<maxLength) return maxLength;
      //가르키는 위치가 서로 같을 떄 ! palindrom완성 !
      if(i>length-(j+1)){
        if(set.length){
          maxLength = maxLength===1 ? set.length : Math.max(set.length, maxLength)
          set = [];
          i=startIdx
          startIdx=undefined
        }
        break;
      }
      if(i===length-(j+1)){
        set.push(i)
        maxLength = maxLength===1 ? set.length : Math.max(set.length, maxLength)
        set = [];
        i=startIdx
        startIdx=undefined
        break;
      }
      else{
        if(s[i]===s[length-(j+1)]){
          startIdx = startIdx===undefined ? i : Math.min(startIdx, i)
          set.push(i,length-(j+1))
          i+=1;
        } 
      }
    }
  }
  console.log('set',set,'setList', setList)
  return maxLength;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log( longest_palindrom("토마토맛토마토") )
// console.log( longest_palindrom("토마토맛있어") )
// console.log( longest_palindrom("123454321789") )
console.log( longest_palindrom("zzbaabcd") )
console.log( longest_palindrom("저기저사람여보게저기저게보여") )
