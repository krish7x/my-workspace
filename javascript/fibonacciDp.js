var findFibonocci = (n) => {
  var memo = new Array(n + 2);
  memo[0] = 0;
  memo[1] = 1;
  for (var i = 2; i <= n; ++i) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

var n = 11;
console.log(findFibonocci(n));
