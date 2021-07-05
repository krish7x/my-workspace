var searchInsert = function (nums, target) {
  var result = 0;
  if (target < nums[0] || target == nums[0]) {
    result = 0;
  }

  if (target == nums[nums.length - 1]) {
    return nums.length - 1;
  }

  if (target > nums[nums.length - 1]) {
    result = nums.length;
  }

  if (nums.length == 2) {
    if (nums[0] > target && nums[1] < target) {
      result = 1;
    }
  } else {
    for (var i = 0; i < nums.length - 1; ++i) {
      if (nums[i] == target) {
        result = i;
      } else if (target > nums[i] && target < nums[i + 1]) {
        result = i + 1;
      }
    }
  }
  return result;
};

console.log(searchInsert([1, 3, 5], 5));
