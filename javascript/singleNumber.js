/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
    if(nums.length === 1) return nums[0]
        
    var filteredArray = nums.filter(onlyUnique);
    
      for (var i = 0; i < filteredArray.length; ++i) {
        for (var j = 0; j < nums.length; ++j) {
          if (filteredArray[i] === nums[j]) {
            return nums.slice(j ,1)
          }
        }
      }
    };
    
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

console.log(singleNumber([2, 2, 1]));
