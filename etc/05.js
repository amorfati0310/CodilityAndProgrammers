// 오름차순으로 정렬된 정수를 저장하는 array안에서 주어진 정수 n보다 작거나 같은 숫자중에서 가장 큰 수의 index를 구하는 함수를 구현하시오 

const findIdx = (s, n)=> {
  
   const findCloserN = (first=0, last=s.length-1, n)=>{
     let mid = Math.floor((first+last)/2)
     if(s[mid]>n){
      last = mid
      mid = Math.floor((first+last)/2)
      return findCloserN(first, last, n)   
     }
     else if(s[mid]<n){
      first = mid
      mid = Math.floor((first+last)/2)
      return findCloserN(first, last, n) 
     }
     else return mid 
   }
   let first = 0;
   let last = s.length-1
   return findCloserN(first, last, n)
}

// findIdx([1,3,5,7,9],5)
// findIdx([1,3,5,7,9],10)
// findIdx([1,3,5,7,9],2)
// findIdx([1,3,5,7,9],0)
