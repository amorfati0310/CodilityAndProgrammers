function numberOfPrime(n) {
	var result = 0;
	// 함수를 완성하세요.
	debugger;
  for(let i =2;i<n; i++){
		let count = 0;
		for(let j=1;j<=i; j++){
			if(count>2) break;
			if(i%j===0) count+=1
		}
		if(count===2) result+=1
	}
	return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numberOfPrime(10) )
console.log( numberOfPrime(5) )