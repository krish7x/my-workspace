var removeElement = function (nums, val) {
  var i = 0;
  for (var j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};

var arr = [0, 1, 2, 2, 3, 0, 4, 2];
var val = 2;

removeElement(arr, val);
