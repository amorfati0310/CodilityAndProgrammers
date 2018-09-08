const countPalindrom = (n, m) => {
  let count = 0;
  const checkPalindrom = number => {
    const stringNumber = `${number}`;
    const length = stringNumber.length;
    const mid = parseInt(length / 2);
    for (let i = 0; i < mid; i++) {
      if (stringNumber[i] !== stringNumber[length - 1 - i]) return false;
    }
    return true;
  };
  for (let i = n; i <= m; i++) {
    if (checkPalindrom(i)) count++;
  }
  return count;
};
console.log(countPalindrom(1, 100));
console.log(countPalindrom(100, 300));
