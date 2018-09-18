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
console.log(solution([1,2]));