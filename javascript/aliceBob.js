/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  var bob,
    alice = 0;
  var first = 0,
    last = stones.length - 1;
  for (var i = 0; i < stones.length; ++i) {
    if (i % 2 == 0) {
      if (stones[first] < stones[last]) {
        stones.splice(first, 1);
        console.log(stones);
        first++;
      } else if (stones[last] < stones[first]) {
        stones.splice(last, 1);
        console.log(stones);
        last--;
      } else if (i == stones.length - 1) {
        stones.splice(i, 1);
        console.log(stones);
      }
    } else {
      if (stones[first] > stones[last]) {
        console.log(stones);
        stones.splice(first, 1);
        console.log(stones);
        first++;
      } else if (stones[last] > stones[first]) {
        stones.splice(last, 1);
        console.log(stones);
        last--;
      } else if (i == stones.length - 1) {
        stones.splice(i, 1);
        console.log(stones);
      }
    }
  }
  console.log(stones);
  console.log(first);
};

var addArr = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

console.log(stoneGameVII([5, 3, 1, 4, 2]));
