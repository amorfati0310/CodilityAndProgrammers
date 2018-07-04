function mergeSort(arr){
  // arr 반으로 나누고 나누고 
  debugger
  if(arr.length<2) return arr
  const mid = Math.floor(arr.length/2)
  const first = arr.slice(0, mid)
  const second = arr.slice(mid)
  return merge(mergeSort(first), mergeSort(second))

  function merge(arr1, arr2){
    const mergeArr = []
    while(arr1.length&& arr2.length){
      if(arr1[0]<arr2[0]) mergeArr.push(arr1.shift())
      else mergeArr.push(arr2.shift())
    }
    if(arr1.length) return mergeArr.concat(arr1)
    else return mergeArr.concat(arr2)
  }
}

console.log(mergeSort([5,3,1,4,2,6,8,1,2]))


function mergeSort (arr) {    
  if (arr.length < 2) return arr;
  var middleIndex = Math.floor(arr.length / 2);
  var firstHalf = arr.slice(0, middleIndex);
  var secondHalf = arr.slice(middleIndex);
  
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge (array1, array2) { 
  var result = [];
  while (array1.length && array2.length) {
    var minElem;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }
  
  if (array1.length) result = result.concat(array1);
  else result =result.concat(array2);
  return result;
}

mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);