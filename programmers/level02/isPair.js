// 디자인 
// 열리고 닫혀야 되는데 

// 차근 차근 설계를 합시다. 

// 일반 문자열 -> true
// () 특수한 (,) 중에서 열림이 나오면 순회하면서 닫힘 상태를 또 체크합니다. -> 끝까지 가서 return 
//  )닫혔는데 이게 먼저 나왔다 -> 바로 false를 return 
// (())

function is_pair(s){
  // 함수를 완성하세요

  let closeState = 0

  for(let char of s){
    if(char==='(') closeState +=1
    if(char===')') {
      if(closeState<=0) return false;
      closeState +=-1 
    }
  }
  return closeState===0;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( is_pair("(hello)()") )
console.log( is_pair(")(") )


// var result = s.match(/(\(|\))/g);
// return result[0] == '(' && result.length % 2 == 0 ? true : false
