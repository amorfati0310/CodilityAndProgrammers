// 1. 알고리즘
//  downFishes들을 저장하고 현재 downFish를 기록해가면서 eat를 기록해나간다.
//  처음에 downFish를 기록한다.
//  B[i]  0 up 1 down

function solution(A, B) {
  const fishes = A.length;
  const downFishes = [];
  let totalEat = 0;

  function checkEat(A, B, downFishes) {
    let currentDownFish;
    let eat = 0;
    for (var i = 0; i < A.length; i++) {
      if (downFishes.length === 0) return { i, eat };
      if (B[i] === 1) downFishes.push(A[i]);
      else {
        currentDownFish = downFishes[downFishes.length - 1];

        if (currentDownFish > A[i]) {
          //먹는 경우
          eat += 1;
          continue;
        } else {
          //먹히는 경우
          // [1,2] 3 반복해야 되는데
          //
          while (currentDownFish < A[i] && downFishes.length) {
            eat += 1;
            downFishes.pop();
            currentDownFish = downFishes[downFishes.length - 1];
          }
        }
      }
    }
    return { i, eat };
  }

  for (let i = 0; i < fishes; i++) {
    if (B[i] === 0) continue;
    // downFish 나옴
    else {
      debugger;
      downFishes.push(A[i]);
      const result = checkEat(A.slice(i + 1), B.slice(i + 1), downFishes);
      i += result.i;
      totalEat += result.eat;
    }
  }
  return fishes - totalEat;
}

// console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
// console.log(solution([5, 3, 6, 1, 4], [1, 1, 0, 1, 0]));
// console.log(solution([1, 3, 2, 6, 5], [0, 1, 0, 1, 1]));
console.log(solution([5, 3, 6, 1, 10], [1, 1, 1, 1, 0]));
