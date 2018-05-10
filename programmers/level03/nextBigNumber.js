// 어떤 수 N(1≤N≤1,000,000) 이 주어졌을 때, N의 다음 큰 숫자는 다음과 같습니다.

// N의 다음 큰 숫자는 N을 2진수로 바꾸었을 때의 1의 개수와 같은 개수로 이루어진 수입니다.
// 1번째 조건을 만족하는 숫자들 중 N보다 큰 수 중에서 가장 작은 숫자를 찾아야 합니다.
// 예를 들어, 78을 2진수로 바꾸면 1001110 이며, 78의 다음 큰 숫자는 83으로 2진수는 1010011 입니다.
// N이 주어질 때, N의 다음 큰 숫자를 찾는 nextBigNumber 함수를 완성하세요.

// .. 1의 갯수만 같은 거구나 ....

// 우선 2진수로 바꿔야 한다. -> 

function nextBigNumber(n){
  const binaryNumbers = []
  let count = 0;
  while(n/2!==0){
    if(n%2===1) count+=1
    binaryNumbers.unshift(n%2);
    n=parseInt(n/2);
  }
  console.log('binary',binaryNumbers.join(""))
  const lastOneIdx = binaryNumbers.lastIndexOf(1)
    if(lastOneIdx===0){
      binaryNumbers.push(0)
      return parseInt(binaryNumbers.join(""),2)
    } 
    if(binaryNumbers[lastOneIdx-1]===0){
      binaryNumbers[lastOneIdx-1]=1
      binaryNumbers[lastOneIdx]=0;
      return parseInt(binaryNumbers.join(""),2)
    } 
    else {
      let i = lastOneIdx-1
      while(binaryNumbers[i]===1&&i!==0){
        i-=1
      }
      if(i===0&&binaryNumbers[i]===1) binaryNumbers.unshift(0)
        binaryNumbers[i]=1
        binaryNumbers[i+1]=0
        binaryNumbers.slice(i+1).sort((a,b)=>a-b)
        return parseInt(binaryNumbers.slice(0,i+1).concat(binaryNumbers.slice(i+1).sort((a,b)=>a-b)).join(""),2);
    }
  
  }
// let stringBinary = binaryNumbers.join("")

//아래 코드는 테스트를 위한 코드입니다.
console.log(nextBigNumber(8))
console.log(nextBigNumber(10));
console.log(nextBigNumber(12));
console.log(nextBigNumber(78));

// 다른 사람의 풀이 n을 증가시키면서 -> 1의 갯수가 기존이랑 같으면 출력 ... 아오 
// 그리고 toString 메소드도 잘 활용하였음 !!!

// 나는
// 진짜 무식하게 풀었다. 왜 그랬을까 ... n을 하나씩 증가시키면서 살펴본다고는 
// 생각을 못했네 1씩 증가 시키고 1의 갯수를 세고-> 
//  오히려 1의 갯수는 유지한 채로 모양으로 풀려고 하니까 상당히.. 조건 찾기도 쉽지가 않고 .. 어려웠다 
// 