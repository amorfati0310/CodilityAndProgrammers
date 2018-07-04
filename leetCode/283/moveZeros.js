// var moveZeroes = function(nums) {
//   for(let i =0; i<nums.length; i++){
//     if(nums[i]===0){
//       let temp,k = i+1;
//       while(nums[k]===0&&k<nums.length){
//         k+=1;
//       }
//       temp = nums[i]
//       nums[i] = nums[k]
//       nums[k] = temp;
//     }
//   }
//   return nums;
// };

// console.log(moveZeroes([0,1,0,3,12]))


var moveZeroes = function(nums) {
     var count = 0;
     for(var i = 0; i < nums.length; i++){
         if(nums[i] !== 0){
            nums[count] = nums[i];
              count++;
          }
      }
      for(let i =count; count< nums.length ; count++){
          nums[count] = 0;
      } 
      return nums; 
  };

console.log(moveZeroes([0,1,0,3,12]))