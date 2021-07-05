var sortColors = function (nums) {
  var zero = 0,
    one = 0,
    two = 0;
  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] == 0) {
      zero++;
    }
    if (nums[i] == 1) {
      one++;
    }
    if (nums[i] == 2) {
      two++;
    }
  }
  nums.length = 0;
  for (var i = 0; i < zero; ++i) {
    nums.unshift(0);
  }

  for (var i = 0; i < one; ++i) {
    nums.push(1);
  }

  for (var i = 0; i < two; ++i) {
    nums.push(2);
  }
};
