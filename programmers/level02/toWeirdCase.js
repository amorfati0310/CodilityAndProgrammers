// toWeirdCase함수는 문자열 s를 매개변수로 입력받습니다.
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로,
//  홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하세요.
// 예를 들어 s가 try hello world라면 첫 번째 단어는 TrY, 
// 두 번째 단어는 HeLlO, 세 번째 단어는 WoRlD로 바꿔 TrY HeLlO WoRlD를 리턴하면 됩니다.

// 주의 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단합니다.

function toWeirdCase(s){
  const words = s.split(' ')
  let result = ""
  words.reduce((ac,c)=>{
    for(let i=0, {length}=c; i<length; i++){
      if(i%2===0) result+=c[i].toUpperCase()
      else result+=c[i].toLowerCase()
    }
    return result+=' ';
  },result)
  
  //함수를 완성해주세요

  return result.slice(0,result.length-1);
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + toWeirdCase("try hello world"));

// 다른 사람의 풀이 


// 정규표현식 -> 문자열 조작/ 검색 조건에 맞게 변경하는 것에는 최적화 
// 다만 직관적이지 않다.. 너무 간결화 되어 있어서 조금씩 학습하자
// s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
// 3항 연산자들을 활용해서 코드량 깔끔히 
// for of
//result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
// result.slice(0, -1) 맨 끝에를 빼는 거면 이렇게 :D

// 메소드 체이닝을 적절히 활용 
// 사소한 거지만 j가 원하지 않는 소문자로만 입력된다는 조건은 없으므로 저기도 lowerCase를 해주어야 된다
//return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')