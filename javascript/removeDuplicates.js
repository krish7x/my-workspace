var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  var result = 0;
  for (var i = 1; i < nums.length; ++i) {
    if (nums[i] != nums[result]) {
      result++;
      nums[result] = nums[i];
    }
  }
  return result + 1;
};

var arr = [1, 1, 2];
removeDuplicates(arr);
