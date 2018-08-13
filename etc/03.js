// interger Array S가 주어졌을 때 3개의 합이 0이 되는 쌍을 구하시오 

// 경우의 수 
// 음수 양수 0 
// 음수 양수 양수 
// 음수 음수 양수 
// 1번 0이 있으면 
const findSetZero = (s)=> {
  const zeroList = s.fiter(v=>v===0)
  const noneZeroList = s.fiter(v=>v!==0)
  
  const findSet  = []
  if(zeroList.length!==0){
    for(let i =0; i<noneZeroList.length-1; i++){
      for(let j=i+1; j<noneZeroList.length; j++){
        if(noneZeroList[i]+noneZeroList[j]===0){
          findSet.push(noneZeroList[i], noneZeroList[j], 0)
        }
      }
    }
  }
  
}
findSetZero([-1,0,1,2,-1,4])