// 행렬의 곱셈은, 곱하려는 두 행렬의 어떤 행과 열을 기준으로, 
// 좌측의 행렬은 해당되는 행, 우측의 행렬은 해당되는 열을 순서대로 곱한 값을 더한 값이 들어갑니다.
// 행렬을 곱하기 위해선 좌측 행렬의 열의 개수와 우측 행렬의 행의 개수가 같아야 합니다. 
// 곱할 수 있는 두 행렬 A,B가 주어질 때, 행렬을 곱한 값을 출력하는 productMatrix 함수를 완성해 보세요.
// 1,2  1,2  
// 4,5  4,5 
// a11*b11+a12*b21+a11*b*12+a22*b22
// a21*b11+a22*b21+a11*b*12+a22*b22
function productMatrix(A, B) { 
	const productMatirx = [...new Array(A.length)].map(v=>[...new Array(B[0].length)]);
	const product = productMatirx.map((rv,ri)=>rv.map((cv,cvi)=>{
		return A[ri].reduce((ac,c,ci)=>{
			return ac+=c*B[ci][cvi]
		},0)
	}))
	return product;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
var a = [ [1,2],[4,5] ];
var b = [ [1,2],[4,5] ];
console.log("결과 : " + productMatrix(a, b));

var a = [ [1,2],[4,5,6] ];
var b = [ [1,2],[1,2],[1,2]];
console.log("결과 : " + productMatrix(a, b));

var a = [ [1,2,3,4,5],[4,5,6,7,8] ];
var b = [ [1,2],[4,5],[1,2],[3,4],[1,2]];
console.log("결과 : " + productMatrix(a, b));

// [[120,98,144,94,151],[153,133,178,122,186],[155,137,131,130,193],[175,161,156,146,210],[96,91,154,112,150]]





// 다른 사람 풀이 

// 오류 추가 하는 것은 나도 넣어줄것 
// 배열 2차 차수만 맞춰주면 const 가 아닌이상 다 index로 접근해서 값을 넣어줄 수 있구나 


// function productMatrix(A, B) {
// 	var answer = [[0]];
// if (A[0].length !== B.length) {
// 	console.log('좌측 행렬의 열의 개수와 우측 행렬의 행의 개수가 같아야 합니다!');
// 	return 0;
// }
// for (var i = 0; i < A.length; i++) {
// 	answer[i] = [];
// 	for (var j = 0; j < B[0].length; j++) {
// 		answer[i][j] = 0;
// 		for (var k = 0; k < A[0].length; k++) {
// 			answer[i][j] += A[i][k] * B[k][j];
// 		}
// 	}
// }

// 	return answer;
// }

// var result = []
// for(var i=0; i<A.length; i++){
// 	var arr = []; 중간에 push할 배열을 차수마다 만들어 준 경우도 있었다.

// 차원 하나 늘어났을 뿐인데 생각하기 엄청 힘들다...
// 내 스타일은 종이에 팬으로 써보면서 하는 것이 제일 빠른 것 같다. index의 중점을 둬서 row, column 과 같은 부분을
//




