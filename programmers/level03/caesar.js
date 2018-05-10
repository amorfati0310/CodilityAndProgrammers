function caesar(s, n) {
	var result = "";
	// 함수를 완성하세요.
	for(let char of s){
		if(char===" ") result+=char
		else {
			let codeNumber = char.charCodeAt()+n%26
			if(char.charCodeAt()<=90){
				if(codeNumber>90) codeNumber-=26
				
			}
			else {
				if(codeNumber>122) codeNumber-=26
			}
			result+=String.fromCharCode(codeNumber);
	 	}
	}

	// a 97 z 122
	// A 65 Z 90
	return result;
}
// 실행을 위한 테스트코드입니다.
console.log('s는 "a B z", n은 4인 경우: ' + caesar("a B z", 4));