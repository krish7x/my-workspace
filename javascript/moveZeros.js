/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var lastZero = 0;
  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] != 0) {
      nums[lastZero++] = nums[i];
    }
  }

  for (var i = lastZero; i < nums.length; ++i) {
    nums[i] = 0;
  }
};

moveZeroes([0, 0, 1]);
