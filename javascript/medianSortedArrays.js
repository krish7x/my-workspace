var findMedianSortedArrays = function (nums1, nums2) {
  var result = [...nums1, ...nums2].sort(function (a, b) {
    return a - b;
  });
  var len = result.length;
  var evenIndex1 = 0;
  var evenIndex2 = 0;
  var oddIndex = 0;
  if (len % 2 === 0) {
    evenIndex1 = result[len / 2 - 1];
    evenIndex2 = result[len / 2];
    return (evenIndex1 + evenIndex2) / 2;
  } else {
    oddIndex = result[len / 2 + 0.5 - 1];
    return oddIndex;
  }
};

(arr1 = [3]), (arr2 = [-2, -1]);
console.log(findMedianSortedArrays(arr1, arr2));
