function solution(s, n) {
  if(n>=1 && n<=25){
    const cspw = [];
    const lowerInitPoint = 97
    const lowerlastPoint = 122
    const upperInitPoint = 65
    const upperlastPoint = 90
    for(let char of s){
      if(char!==' '){
        let charcode = char.charCodeAt()
        let nextCode = char.charCodeAt()+n
        if(charcode<=122&&charcode>=97){
          if(nextCode>lowerlastPoint) nextCode = lowerInitPoint+nextCode-lowerlastPoint-1
        }
        else {
          if(nextCode>upperlastPoint)nextCode = upperInitPoint+nextCode-upperlastPoint-1
        }
        cspw.push(String.fromCharCode((nextCode)))
      }
      else cspw.push(char)
    }
    return cspw.join('');
  }
  else throw new Error('이동은 1~25사이 숫자입니다.')
}
console.log(solution('a B z', 4))
