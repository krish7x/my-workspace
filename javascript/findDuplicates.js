var containsDuplicate = function (nums) {
  nums = nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length - 1; ++i) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 3, 4, 3, 2, 4, 2]));
