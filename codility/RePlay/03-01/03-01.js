function solution(A) {
  debugger;
  const Aobj = A.reduce((ac,c)=>{
     ac[c]=c
     return ac;
  },{})

  for(let i =1, {length} = A; i<=length+1; i++){
    if(Aobj[i]===undefined) return i;
  }
}


function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  return [...new Array(A.length+2).keys()].concat(A).reduce((pre,cur)=>pre^cur);
}
console.log(solution([1,2]));