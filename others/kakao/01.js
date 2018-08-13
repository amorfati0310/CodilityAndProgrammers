const decode = (n, arr1, arr2)=> {
  const result = []
  for(let i =0; i<n; i++){
    /(\w+)\s(\w+)/
    let wall =  arr1[i] | arr2[i]
    wall = wall.toString(2).replace((/0|1/gi), (match)=> match==='1' ? '#' : ' ')
    result.push(wall)
  }
  return result;
}

console.log(decode(5, [9,20,28,18,11], [30, 1, 21, 17, 28]));