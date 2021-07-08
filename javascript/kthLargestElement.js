var findKthLargest = function (nums, k) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  return nums[nums.length - k];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
