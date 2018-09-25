// For example, given integer N = 5 and array A such that:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:

//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)

function solution(N, A) {
  // make Counter 
  const counter = new Array(N).fill(0)
  const maxCounter = N+1;
  let maxNumber = 0;
  let minNumber = 0;
  // 문제 계속 필  
  //ex) 6,6,6,6,6,6,6,3,4,6,6,6,6, 쓸데 없는 fill을 할 수 있다 !
  for(let counterNumber of A){
    if(counterNumber===maxCounter){
      minNumber = maxNumber;
    }
    else{
      if(counter[counterNumber-1]<minNumber) counter[counterNumber-1]=minNumber
      counter[counterNumber-1]+=1
      maxNumber = Math.max(maxNumber, counter[counterNumber-1])
    } 
  }
  counter.map(v=> v<minNumber? minNumber : v)
  return counter.map(v=> v<minNumber? minNumber : v)
  // write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution(5, [3,4,4,6,1,4,4]))