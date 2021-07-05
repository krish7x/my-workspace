var decompressRLElist = function (nums) {
  var first = [];
  var second = [];
  for (var i = 0; i < nums.length; ++i) {
    if (i % 2 === 0) {
      first.push(nums[i]);
    } else {
      second.push(nums[i]);
    }
  }
  var result = [];

  for (var i = 0; i < first.length; ++i) {
    for (var j = 0; j < first[i]; ++j) {
      result.push(second[i]);
    }
  }

  return result;
};
