function solution(S) {

  // 처음 열린 친구가 닫힐 떄  ->나머지도 다 닫혀있어야 됨 ! 아니면 바로 return 0
  // 처음 열린 친구를 stack에 쌓는다.  
  const brackets = {
    "(":1,
    ")":1,
    "{":1,
    "}":1,
    "[":1,
    "]":1,
  }
  const openKey = ['(','{','[']
  const closeKey = ['(','{','[']


  if(S.length===0) return 1
  for(item of S){
    if(brackets[item]!==undefined){
      if(openKey.indexOf(item)!==-1){
        
      }
    }
  }

  // write your code in JavaScript (Node.js 8.9.4)
}
console.log(solution(["(","a",")","{", "[", "]", "}"]))
console.log(solution('([)()]'))