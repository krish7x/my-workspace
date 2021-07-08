/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums);
  if (nums.length === 1) {
    if (nums[0] <= 0) return 1;
    if (nums[0] === 1) return 2;
    if (nums[0] > 1) return 1;
  }
  nums = nums.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });
  var count = 0;
  var first = 0;
  var data = 0;

  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] > 0) {
      if (count === 0) {
        if (nums[i] !== 1) return 1;
        first = nums[i];
        firstIndex = i;
        count++;
      } else if (data + 1 !== nums[i]) {
        count++;
        return data + 1;
      }
      if (i === nums.length - 1) {
        count++;
        return data + 2;
      }
      data = nums[i];
    }
  }

  if (!count) {
    return 1;
  }
  if (count == 1) {
    return first + 1;
  }
};
console.log(firstMissingPositive(arr));
