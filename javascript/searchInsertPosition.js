var searchInsert = function (nums, target) {
  var result;
  if (target < nums[0]) {
    result = 0;
  } else if (target > nums[nums.length - 1]) {
    result = nums.length;
  } else if (target < nums[nums.length - 1]) {
    if (target > nums[nums.length - 2]) {
      result = nums.length - 1;
    }
  } else {
    for (var i = 0; i < nums.length; ++i) {
      if (nums[i] == target) {
        result = i;
      } else if (nums[i] > target && i != nums.length - 1) {
        if (nums[i + 1] > target) {
          result = i - 1;
        }
      }
    }
  }

  return result;
};

console.log(searchInsert([1, 3], 2));
