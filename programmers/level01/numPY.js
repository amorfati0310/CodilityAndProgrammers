function numPY(s){
  let countP = countY=0;
  for(char of s){
    debugger;
    if(char==='p'||char==='P') countP+=1
    if(char==='y'||char==='Y') countY+=1
 
  //함수를 완성하세요
  }
  return countP===countY;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )

// Programmers에서는 보다 엄격 모드인지 
let countP = countY=0; // 이런 선언이 되지 않음 
for(let char of s){}  // char도 undefined뜸 !!

// 정규표현식을 쓰면 확실히 코드량이 줄긴 하겠다... 근데 여전히 아직 정이 안 감 :D 좀 더 직관적인 문법이면 좋을 텐데 

//return s.match(/p/ig).length == s.match(/y/ig).length;