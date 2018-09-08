// 버스정류장 N개가 있습니다 , 각 정류장에는 1번부터 N번까지의 번호가 매겨져 있습니다.
// 2차원 배열로 주어진 정류장 표지판에는 A번 정류장에서 B번 정류장으로 가는 버스가
// 있다면 1 없다면 0으롶 표시 되어 있다.

// 010
// 001
// 100
// 1-> 2 2->3 3->1 이다

//

// 링크드 리스트로 연결
// 그냥 알고리즘 적으로만 수학적으로 풀 수 있지 않을까???
// 삼각형 3,3 ->2   6가지
// 사각형 4,3 ->2 6가지 이 선이 모두 방향이 있다. 고로 12
// 5 10 -> 20개

const examArray = [[0, 1, 0], [0, 0, 1], [1, 0, 0]];
// 2차원 배열을 받고
// 1이 나오면 체크한다. 2차원 배열의 갈 수 있는데를
// 1-> 2   2-> 3 3 -> 1
// 1-> 3  3-> 1  이렇게 같이 통하는 데를 찾기  1, 3 라인은 완전히 1이 됨
//

const getOneDirectionMap = oneDirMap => {
  const linkedMap = [];
  const checkLinked = (arr, i, j) => {
    if (arr[j][i] === 1) {
      linkedMap.push(i, j);
    }
  };

  for (let i = 0; i < oneDirMap.length; i++) {
    for (let j = 0; j < oneDirMap[i].length; j++) {
      if (oneDirMap[i][j] === 1) {
        checkLinked(oneDirMap, i, j);
      }
    }
  }
};

console.log(getOneDirectionMap(examArray));
