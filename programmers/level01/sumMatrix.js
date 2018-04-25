// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 
// 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬을 
// 입력받는 sumMatrix 함수를 완성하여 행렬 덧셈의 결과를 반환해 주세요.

// 예를 들어 2x2 행렬인 A = ((1, 2), (2, 3)), B = ((3, 4), (5, 6)) 가 주어지면, 
// 같은 2x2 행렬인 ((4, 6), (7, 9))를 반환하면 됩니다.(어떠한 행렬에도 대응하는 함수를 완성해주세요.)

// 차원을 낮춰서 생각하고 싶다. 
// 
// 3*3*3 이런것도 되게 해야 되는 것 아닌가? :D ;;;;;


// 우선 간단한 1*1 [3] [5]를 생각해보자 
// 원소를 가지고 온다 [3]+[5]는 안되니까 A.forEach((v,i)=> v+B[i])
// [1,2]+[3,4] 1*2의 경우에는 -> A.forEach((v,i)=> v+B[i]) 마찬가지 

// 차원이 높아지니까 바로 생각하기 어려워지는 것 보소 !
// 2*1의 경우 [[1],[2]] [[3],[4]]의 경우에는  

// gg

function sumMatrix(A,B){
    const result = new Array(...A);

    const firstLength = A.length;
    const secondLength = A[0].length
    for(let i =0; i<firstLength;i++){
        for(let j=0; j<secondLength;j++){
            result[i][j]+=B[i][j]
        }
    }
    //
	return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]])) 

// 다른 사람의 풀이 

// 배열을 return 하고 새로운 배열을 만들어야 하니까 map이 정말 적절한 method 였다.
// value가 배열이면 -> 한 번 더 들어가고 -> 아니면 바로 값을 하는 로직을 추가했으면 됬을 듯 하다 
// 다시 try해보기 고로네 .... ㅜㅜ 으 아쉽다 

// return A.map((a,i) => a.map((b, j) => b + B[i][j]));

function sumMatrix(A,B){
    return A.map((v,i) => {
        return Array.isArray(v) ? sumMatrix(v,B[i]) : v+B[i]
    })
    //
}

console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]])) 