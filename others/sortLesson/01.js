//
// 1) 숫자 5개 정렬
// 2) 단어 5개 정렬
// 3) People{ name, money} 를 5개 만들어서 이름과 재산순으로 각각 정렬하기

const numberSort = list => list.sort((a, b) => a - b);

console.log(numberSort([1, 22, 13, 10, 5, 4]));

const wordSort = list => list.sort();

console.log(wordSort(["bc", "bcabcabc", "aeswe", "falk"]));
var stringArray = ["Blue", "Humpback", "Beluga"];
console.log(wordSort(stringArray));

const keySort = (list, key) =>
  list.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    else {
      if (a[key] === b[key]) return 0;
      else return 1;
    }
  });

const peoples = [
  {
    name: "dali",
    money: 1,
  },

  {
    name: "mando",
    money: 22,
  },

  {
    name: "lumi",
    money: 13,
  },

  {
    name: "woogie",
    money: 10,
  },

  {
    name: "crong",
    money: 5,
  },
];

console.log(keySort(peoples, "name"));
console.log(keySort(peoples, "money"));

const shuffle = list => list;

//// randomize

// [0,1,2,3,4,5,6,7,8,9]

// ㅇㅅㅇ

// 크눅스 셔플?

const mergeSort = list => {
  // 1,2,3,5 //3,1,2,4
  const mid = parseInt(list.length / 2);
  const first = list.slice(0, mid);
  const second = list.slice(mid);
  debugger;
  const merge = (arr1, arr2) => {
    const merged = [];
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) merged.push(arr1.shift());
      else merged.push(arr2.shift());
    }
    if (arr1.length !== 0) return merged.concat(arr1);
    else return merged.concat(arr2);
  };

  if (list.length < 2) return list;
  else return merge(mergeSort(first), mergeSort(second));
};

console.log(mergeSort([1, 2, 3, 5, 3, 4, 2, 1]));

// 생각 자첼가

// 쪼갠다
// 합친다 이루틴이 반복되도록

// 쪼개고 쪼개고 쪼개고

// const quickSort = list => {};

// 한글특징 및 설명 =>

// http://alwayswillbehappy.blogspot.com/2015/08/sort-algorithm.html
