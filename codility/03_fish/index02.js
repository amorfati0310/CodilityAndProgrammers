function solution(A, B) {
  const fishes = A.length;
  const downFishes = [];
  let totalEat = 0;
  let currentDown;

  for (let i = 0; i < fishes; i++) {
    if (B[i] === 0) {
      if (downFishes.length === 0) continue;
      else {
        currentDown = downFishes[downFishes.length - 1];
        if (A[i] > currentDown) {
          while (downFishes.length && currentDown < A[i]) {
            totalEat += 1;
            downFishes.pop();
            currentDown = downFishes[downFishes.length - 1];
          }
        } else {
          totalEat += 1;
        }
      }
    } else downFishes.push(A[i]);
  }
  return fishes - totalEat;
}

// console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
// console.log(solution([5, 3, 6, 1, 4], [1, 1, 0, 1, 0]));
// console.log(solution([1, 3, 2, 6, 5], [0, 1, 0, 1, 1]));
// console.log(solution([5, 3, 6, 1, 10], [1, 1, 1, 1, 0]));
console.log(solution([5, 3, 6, 1, 10, 11, 12], [1, 1, 0, 1, 1, 0, 0]));

// console.log(solution([5, 3, 6, 1, 10], [1, 1, 0, 1, 0]));
