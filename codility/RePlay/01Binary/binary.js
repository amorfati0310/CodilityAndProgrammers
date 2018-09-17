function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  // 1. N to binary ->
  // 2. check 1 -> isOpen
  // 3. check 0 and isOpen -> count 
  // 4. isOpen -> and 1 -> update tempMaxZero
  // 5. replay 
  // 6. 10000 -> thisOne can't update so 
  let count = 0;
  let isOpen = false;
  let tempMaxZero = 0;
  while(N!==0){
    const rest = N%2;
    N = Math.floor(N/2);
    if(rest===1){
      isOpen = true;
      if(count!==0){
        tempMaxZero = Math.max(tempMaxZero, count)
        count = 0;
      }
    }
    else {
      if(isOpen){
        count+=1;
      }
    }
  }
  return tempMaxZero;
}
console.log(solution(9))
console.log(solution(529))


function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  return N.toString(2).split('1').slice(1,-1).reduce((max,v)=>Math.max(max,v.length),0);
}

// 팀 풀이 

// 2진수로 바꾸고 1을 기준으로 분리 시킨다. 