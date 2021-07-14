/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  var result = [...nums];
  result = result.filter((val, i) => {
    if (val[i] + 1 != val[i + 1]) {
      console.log(i);
    }
  });

  console.log(
    result.every((num, i) => i === result.length - 1 || num < result[i + 1])
  );
};
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
