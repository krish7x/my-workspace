/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var result = new Array(nums.length);
  for (var i = 0; i < nums.length; ++i) {
    result[i] = calcProduct(nums, i);
  }
  return result;
};

var calcProduct = (arr, index) => {
  var dummy = [];
  var a = arr.filter((val, i) => {
    if (i != index) dummy.push(val);
  });
  var b = dummy.reduce((a, b) => a * b);
  return b;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
