var merge = function (nums1, m, nums2, n) {
  /*   nums1.filter((val, index) => index > n ? val : val);
  [...nums1, ...nums2].sort((a, b) => a - b); */

  var nums2Index = 0;
  for (var i = m + n - 1; i >= n - 1; --i) {
    if (nums2[nums2Index] !== undefined) {
      console.log(i);
      nums1[i] = nums2[nums2Index];
      console.log(nums1);
    }
    nums2Index++;
  }
  nums1.sort((a, b) => a - b);
  console.log(nums1);
};

(nums1 = [0, 0, 0, 0, 0, 0]), (m = 0), (nums2 = [1, 2, 3, 4, 5]), (n = 5);
merge(nums1, m, nums2, n);
