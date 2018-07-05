// List에 대해서 아래와 같이 head tail concat함수가 주어졌을 떄 list의 element를 거꾸로 저장하는 reverse함수를 구현하시오 
// for, while, do while repeat, ..반복문을 사용하지 않고 구현하시오 

// 이 list가 그냥 배열인지? 
// linkedList인지?

// 그냥 배열인가?

// tail tail tail 이 앞으로 가도록 
// 반복이 없다면 재귀를 써야 될 듯 
// 이거는 좀 물어보면서 해야 겠다. => 1번 tail이냐 head함수가 그냥 indexing만을 가르키는지 pop이나 shift기능을 하는지 
const reverse = (list)=> {
  //list isEmpty => check 하기 
  
  const reverseList = []
  const addReverse = (tail, index=0, reverseList)=> {
    if(list.length===reverseList.length) return reverseList;
    reverseList.concat(list.tail+index)
    index += -1
    addReverse(tail, index, reverseList)
  }
  return addReverse(list.tail, index, reverseList)
}