var removeDuplicates = function (nums) {
  var current = 0;
  var count = 0;
  var duplicates = [];
  for (var i = 0; i < nums.length; ++i) {
    if (i == 0) {
      current = nums[i];
    } else {
      if (nums[i] == current) {
        console.log(i);
        count++;
        if (count > 1) {
          nums.push(nums.splice(nums.indexOf(nums[i]), 1)[0]);
          duplicates.push(i);
        }
      } else {
        current = nums[i];
        count = 0;
      }
    }
  }

  console.log(duplicates);

  console.log(count);
  console.log(nums);
};

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4]);
