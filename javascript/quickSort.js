var quickSort = (arr, left, right) => {
  if (left >= right) return;
  var pivot = arr[Math.floor((left + right) / 2)];
  var index = partition(arr, left, right, pivot);
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);
  return arr;
};

var partition = (arr, left, right, pivot) => {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      var temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return left;
};

//driver code
var arr = [3, 8, 5, 10, 2, 6, 2, 10, 5, 7, 20];
var left = 0;
var right = arr.length - 1;
console.log(quickSort(arr, left, right));
