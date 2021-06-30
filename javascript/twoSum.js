var twoSum = function (nums, target) {
  var output = [];
  for (var i = 0; i < nums.length; ++i) {
    for (var j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        output.push(i, j);
      }
    }
  }
  return output;
};

var nums = [0, 4, 3, 0];
target = 0;

twoSum(nums, target);
