// 입/출력 예시
// ⋇ 입출력 형식을 잘 지켜주세요.
// ␣ : 공백↵ : 줄바꿈
// 보기 입력 1
// 700 400 1600 1100 0 400 1100 900 900 0 1800 650
// 출력 1
// 305000

const getOnlyAreaOne = str =>{
  let onlySizeOne = 0;
  const Input= str.split(' ')
  // const areaPoint = {}
  // // 초기 설정 맞춰주기 
  // Input.reduce((ac,c,ci) => {
  //   const areaNumber = (ci%4)+1
  //   if(ac[areaNumber]===undefined){
  //     ac[areaNumber] = []
  //   } 
  //   return ac
  // }, areaPoint)

  const oneP1 = [Number(Input[0]), Number(Input[1])]
  const oneP2 = [Number(Input[2]), Number(Input[3])]
  const twoP1 = [Number(Input[4]), Number(Input[5])]
  const twoP2 = [Number(Input[6]), Number(Input[7])]
  const threeP1 = [Number(Input[8]), Number(Input[9])]
  const threeP2 = [Number(Input[10]), Number(Input[11])]
  console.log(oneP1, oneP2, twoP1, twoP2, threeP1, threeP2)
 
  const getFourPoint = (p1, p2)=> {
    const [x1,y1] = p1;
    const [x2,y2] = p2;
    // p1 왼아래 
    // p2 오위
    // p3 왼위
    // p4 오아래 
    const p3 = [x1,y2];   
    const p4 = [x2,y1];
    return [p1,p2,p3,p4]
  }
  const fourPointsOne = getFourPoint(oneP1,oneP2) 
  const fourPointsTwo = getFourPoint(twoP1,twoP2) 
  const fourPointsThree = getFourPoint(threeP1,threeP2) 
  
  const [p1,p2,p3,p4] = getFourPoint(oneP1,oneP2)
  
  const getSize = (c1,c2,c3,c4)=> {
    const [a1,b1] = c1
    const [a2,b2] = c2
    const [a3,b3] = c3
    const [a4,b4] = c4
    const maxX = Math.max(a1,a2,a3,a4)
    const minX = Math.min(a1,a2,a3,a4)
    const maxY = Math.max(b1,b2,b3,b4)
    const minY = Math.min(b1,b2,b3,b4)
    const size = (maxX-minX)*(maxY-minY)
    return size;
  }

  const getOverlapSize = (fourPoints1 , fourPoints2)=> {
    // p1 p2 를 기준으로 // 
    const [pa1,pa2,pa3,pa4] = fourPoints1;
    // const [pb1,pb2,pb3,pb4] = fourPoints2;
    const [x1,y1] = pa1;
    const [x2,y2] = pa2;
    const getOverLayPoint = {}
    fourPoints2.forEach((p,i)=> {
      if(x1<p[0]&& p[0]<x2 && (y1<p[1]&&p[1]<y2)){
          getOverLayPoint[i+1] = p;
      } 
    })
    let overLaySquare;
    console.log(getOverLayPoint);
    const pointCounts = Object.values(getOverLayPoint).length
    if(pointCounts===1){
      const key = Object.keys(getOverLayPoint)
      const point = getOverLayPoint[key]
      if(Number(key)===1) overLaySquare = getFourPoint(p2, point)
      if(Number(key)===2) overLaySquare = getFourPoint(p1, point)
      if(Number(key)===3) overLaySquare = getFourPoint(p4, point)
      if(Number(key)===4) overLaySquare = getFourPoint(p3, point)
      console.log(overLaySquare)
      const overlaySize = getSize(...overLaySquare)
      console.log(overlaySize);
    }
     
  }
  
  // if(pointCounts===1){
  //   const [key, point] = getOverLayPoint
  //   if(Number(key)===2){
  //     overLaySquare = getFourPoint(p1, point)
  //   }
  // }
  // console.log(overLaySquare);
  getOverlapSize(fourPointsOne, fourPointsTwo)
  getOverlapSize(fourPointsOne, fourPointsThree)
  return onlySizeOne
}

getOnlyAreaOne('700 400 1600 1100 0 400 1100 900 900 0 1800 650');
