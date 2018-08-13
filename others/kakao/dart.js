const dartCount = list => {
  // let acc = 0, currentPoint;
  const normalCase = {
    S: n => n,
    D: n => n * n,
    T: n => n * n * n,
  };

  let acc = 0;
  const pointList = [];

  const splited = list.match(/\d+[^(0-9)]{1,2}/g);
  for (point of splited) {
    const currentNumber = point.match(/\d+/gi);
    const caculatesChar = point.match(/\D/gi);

    caculatesChar.forEach(v => {
      if (normalCase[v] !== undefined) {
        pointList.push(normalCase[v](+currentNumber));
      } else {
        if (v === "#") pointList[pointList.length - 1] *= -1;
        if (v === "*") {
          pointList[pointList.length - 1] *= 2;
          if (pointList.length >= 1) pointList[pointList.length - 2] *= 2;
        }
      }
    });
  }
  return pointList.reduce((ac, c) => ac + c);
};

console.log(dartCount("1D2S#10S"));
console.log(dartCount("1S2D*3T"));
console.log(dartCount("1D2S0T"));
console.log(dartCount("1S*2T*3S"));
