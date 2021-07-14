/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length == 1) return nums[0];
  var sorted = nums.sort((a, b) => a - b);
  console.log(sorted);
  var cur = 0;
  var count = 0;
  for (var i = 0; i < sorted.length; ++i) {
    if (i % 2 == 0) {
      cur = sorted[i];
      count = 0;
      console.log(i);
    } else {
      console.log(i);
      if (sorted[i] === cur) {
        count++;
      }
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2, 5]));
