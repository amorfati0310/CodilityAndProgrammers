function bubbleSort(arr){
  for(let i =arr.length-1; i>0; i--){
    for(let j=0; j<=i; j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5,3,2,4,1]))


//
function bubbleSort(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  
  return array;
}

bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]);