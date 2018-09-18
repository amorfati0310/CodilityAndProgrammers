// 유일한 값 찾기 
function solution(A) {
  
  let resultIdx = 0;
  debugger;
  // 2바퀴 안 돌고 풀기 !!!
  //0~6 21 0,1,2,3,4,6 
  // const result =A.reduce((ac,c,ci)=>{
  //   if(ac[c]===undefined){
  //     ac[c]=1
  //   }
  //   else {
  //     delete ac[c]
  //   } 
  //   return ac;
  // },{})
  // return Object.keys(result)[0]
  

  //예전에 푼 ^이게 짱인듯! 
  return A.reduce((ac,c)=>ac^c)
  // write your code in JavaScript (Node.js 8.9.4)
}
console.log(solution([9,3,9,3,9,7,9]))
