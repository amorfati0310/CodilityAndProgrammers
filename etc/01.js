// 3개의 점이 주어졌을 때 3개의 점이 같은 직선에 있는지 검사 하는 함수 
// 라인은 ax+b인데 
// 기울기를 구해서 같은 라인에 있는지 확인하기 
const isOneLine = (p1,p2,p3)=> {
  // 점 찍기
  debugger;
  const [x1,y1] = p1
  const [x2,y2] = p2
  const [x3,y3] = p3
  const slope = (y2-y1)/(x2-x1)
  const slope2 = (y3-y1)/(x3-x1)
  return slope===slope2 
}

console.log(isOneLine([1,2], [2,4],[8,16]))
console.log(isOneLine([1,3], [2,4],[8,16]))
console.log(isOneLine([1,5], [2,10],[8,40]))