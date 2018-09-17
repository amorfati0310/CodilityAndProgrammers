const calcMinindemnity = (N, worksArr) => {
  const calcIndemnity = arr => arr.reduce((ac, c) => (ac += c * c));
  worksArr.sort((a, b) => b - a);
  let rest = N;
  let lastMaxIdx = 0;
  if (rest > maxGap) {
    let maxGap = worksArr[0] - worksArr[1];
    rest -= maxGap;
    worksArr[0] = worksArr[0] - maxGap;
    lastMaxIdx = 1;
    maxGap = worksArr[lastMaxIdx] - worksArr[lastMaxIdx + 1];
  } else {
    worksArr[0] = worksArr[0] - N;
    return calcIndemnity(worksArr);
  }
};
