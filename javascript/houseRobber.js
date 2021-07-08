var rob = function (nums) {
  var even = 0;
  var odd = 0;
  for (var i = 0; i < nums.length; ++i) {
    if (i % 2 == 0) {
      even += nums[i];
    } else {
      odd += nums[i];
    }
  }
  return even > odd ? even : odd;
};

console.log(rob([2, 7, 9, 3, 1]));
