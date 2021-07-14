let recursivePermutation = (str, n) => {
  if (n == 1) {
    str = print(str);
    console.log(str);
  } else {
    for (let i = 1; i < n - 1; i++) {
      //forward
      recursivePermutation(str, n - 1);
      if (n % 2 == 0) {
        swap(str, i, n - 1);
      } else {
        swap(str, 0, n - 1);
      }
    }
    //backtrack
    recursivePermutation(str, n - 1);
  }
};

let iterativePermutation = (str, n) => {
  var res = [[...str]];
  var arr = new Array(n);
  for (var i = 0; i < n; i++) {
    arr[i] = 0;
  }
  print(str);
  var i = 0;
  while (i < n) {
    if (arr[i] < i) {
      swap(str, i % 2 == 0 ? 0 : arr[i], i);
      res.push(print(str));
      arr[i]++;
      i = 0;
    } else {
      arr[i] = 0;
      i++;
    }
  }
  const setArray = new Set(res.map((x) => JSON.stringify(x)));
  const uniqArray = [...setArray].map((x) => JSON.parse(x));
  return uniqArray;
};

let swap = (str, a, b) => {
  let temp = str[a];
  str[a] = str[b];
  str[b] = temp;
};

let print = (str) => {
  var arr = [];
  for (var i = 0; i < str.length; ++i) {
    arr.push(str[i]);
  }
  return arr;
};

let str = [1, 2, 3];
let len = str.length;
console.log(recursivePermutation(str, len));
//console.log(iterativePermutation(str, len));
