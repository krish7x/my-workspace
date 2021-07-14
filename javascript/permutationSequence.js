var getPermutation = function (n, k) {
  var arr = [];
  for (var i = 0; i < n; ++i) {
    arr.push(i + 1);
  }
  return iterativePermutation(arr, arr.length);
};

let iterativePermutation = (nums, n, k) => {
  var res = [[...nums]];
  var arr = new Array(n);
  for (var i = 0; i < n; i++) {
    arr[i] = 0;
  }
  print(nums);
  var i = 0;
  while (i < n) {
    if (arr[i] < i) {
      swap(nums, i % 2 == 0 ? 0 : arr[i], i);
      res.push(print(nums));
      arr[i]++;
      i = 0;
    } else {
      arr[i] = 0;
      i++;
    }
  }
  return res;
};

let swap = (nums, a, b) => {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};

let print = (nums) => {
  var arr = [];
  for (var i = 0; i < nums.length; ++i) {
    arr.push(nums[i]);
  }
  return arr;
};

console.log(getPermutation(3));
