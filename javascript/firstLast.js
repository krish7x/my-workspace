var searchRange = function (nums, target) {
  var result = [];
  var occurences = 0;
  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] == target) {
      result.push(i);
      occurences++;
    }
  }

  console.log(nums.length);

  if (nums.length === 1 && target === nums[0]) {
    return [0, 0];
  }

  if (occurences > 1) {
    return result;
  } else {
    if (!result.length) {
      result.push(-1);
      result.push(-1);
    } else if (result.length == 1) {
      result.push(-1);
    } else {
      result.splice(1, result.length - 1);
    }
  }

  return result;
};

console.log(searchRange([1, 3], 1));
