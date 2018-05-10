function threeNum(array){
  //함수를 완성하세요
  const minusList = []
  const plusList = []
  const zeroList = []

  for(item of array){
    if(item>0) plusList.push(item)
    else if(item<0) minusList.push(item)
    else zeroList.push(item)
  }
  // 2개짜리 set를 어떻게 만들지?

  // 생각해보면 2개짜리는 딱히 ... for-for 두번 돌리면 됬는데 ...

  const minusSet = minusList.reduce((ac,c,ci)=> {
    return ac.concat(minusList.slice(ci+1).map(v=>[c,v]))
  },[])
  const plusSet = plusList.reduce((ac,c,ci)=> {
    return ac.concat(plusList.slice(ci+1).map(v=>[c,v]))
  },[])

  // set이랑 이제 합을 돌리면서  0이면 push 
  const mResult = minusSet.reduce((ac,c)=> {
    const sum = c.reduce((acc,cc)=>acc+cc)
    return ac.concat(plusList.filter(v=>sum+v===0).map(v=>c.concat(v)))
  },[])

  const pResult = plusSet.reduce((ac,c)=> {
    const sum = c.reduce((acc,cc)=>acc+cc)
    return ac.concat(minusList.filter(v=>sum+v===0).map(v=>c.concat(v)))
  },[])
  let symmetryResult = [];
  if(zeroList.length!==0){
    const result =plusList.reduce((ac,c)=> {
      return ac.concat(minusList.filter(v=>c+v===0).map(v=>[c].concat(v,0)))
    },[])
    symmetryResult = symmetryResult.concat(result)
  }
  console.log(symmetryResult)
  const resultList = symmetryResult.concat(pResult,mResult)
  return resultList;
}

console.log(threeNum([-3,1,2,4,-2,-2,0]))

// https://www.youtube.com/watch?v=Zdf_AuEAWpY


// 1,2 2,1 이렇게만 생각했는데 0,0,0은 제외했네 
//