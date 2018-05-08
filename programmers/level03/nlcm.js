function nlcm(numList) {
  let nlcm = 1;
  let i =2;
  while(numList.length!==0){
    debugger;
    if(numList.some(v=>v%i===0)){
      nlcm*=i;
      numList = numList.map(v=> v%i===0 ? v/i : v).filter(v=>v!==1)
     
    }else{
      i++;
    }
  }
    return nlcm;
	}
	
console.log(nlcm([2,4,6,8,10]));


// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(nlcm([50,28,37,26,52,21,45,38,7,47]));
// console.log(50*28*37*26*52*21*45*38*7*47);