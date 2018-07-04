function solution(n) {
  var answer = '';

  debugger;
  const checkLength = (n)=> {
    let length = 1
    let rest = n;
    let totalCipher = 3
    while(rest>0){
      rest-=totalCipher
      if(rest>0){
        length+=1
        totalCipher = totalCipher*3
      }
    }
    return {
      length,
      rest,
      totalCipher
    }
  }
  // 자릿수 구하기 
  let {length, rest, totalCipher} = checkLength(n);

  let oneTwoFourArr = new Array(length).fill(4)

  if(rest===0) return Number(oneTwoFourArr.join(''))

  rest += totalCipher
  totalCipher /= 3

  const setDigits = (rest, totalCipher, arr=[])=> {
    debugger;
    let cipher = 1;
    const type = {
      1: 1,
      2: 2,
      3: 4,
    }
    
    while(rest>0){
      rest -=totalCipher
      if(rest>0) cipher+=1
    }
    arr.push(type[cipher]) 
    if(rest===0) return arr;
    rest+=totalCipher
    totalCipher /= 3
    return setDigits(rest, totalCipher, arr)
  }

  const digits = setDigits(rest, totalCipher)
  while(digits.length !== length){
    digits.push(4)
  }
  // 1111로 된 배열을 자릿수 체크하며 수정하기 
  // 자릿수 숫자 구하기 
  return Number(digits.join(''))
}


console.log(solution(6))
console.log(solution(9))

function change124(n) {
  var src = [4,1,2];
  debugger;
  var result = '';
  while(n) {
    result = src[n%3] + result;
    n = Math.floor((n-1)/3);
  }
  return result;
}

console.log(change124(6))
console.log(change124(9))
console.log(change124(8))