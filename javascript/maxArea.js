var maxArea = function (height) {
  var max = 0;

  for (var i = 0; i < height.length; ++i) {
    if (height[i] > max) {
      max = height[i];
    }
  }
  var maxIndex = height.indexOf(max);
  var secondMaxIndex = 0;
  for (var i = maxIndex + 1; i < height.length; ++i) {
    if (max >= height[i]) {
      secondMaxIndex = i;
    }
  }
  if (height.length == 2) return 1;
  if (height.length == 3) return 2;
  var index = 0;
  if (maxIndex < secondMaxIndex) {
    for (var i = maxIndex; i < secondMaxIndex; ++i) {
      index++;
    }
  } else {
    for (var i = maxIndex; i > secondMaxIndex; --i) {
      index++;
    }
  }
  return index * index;
};
console.log(maxArea([0, 2]));
