/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
  if ((n === 0) | (n === 1)) {
    return 0;
  }

  return primeNum(n).length;
};

var primeNum = function (max) {
  var store = [],
    i,
    j,
    primes = [];
  for (i = 2; i < max; ++i) {
    if (!store[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        store[j] = true;
      }
    }
  }
  return primes;
};

console.log(countPrimes());
