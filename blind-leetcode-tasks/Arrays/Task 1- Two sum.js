/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* time complexity o(n^2)
* no need to initialize additional array, can be returned only with brackets []
* which makes executing faster, but it is still 0(n^2) time complexity
* space complexity in this case is o(1) or constant, because we do not initialize any additional array */
var twoSum = function(nums, target) {
    let i = 0, j = 0;
         for (i = 0; i < nums.length; i++){
             for (j = i + 1; j < nums.length; j++){
                 if((nums[i] + nums[j]) === target){
                     return[i, j];
                 }
        }
   }
};

/*time complexity o(n), space complexity also
* since we are using the HASH MAP (or a simple javascript object)*/
var twoSum2 = function(nums, target) {
    let hashMap = {}; //simple javascript object
    for (let i = 0; i < nums.length; i++){
          if((target - nums[i]) in hashMap){
              return [hashMap[target - nums[i]], i];
          }
          else{
              hashMap[nums[i]] = i;
          }
        }
};



/*console.log(twoSum2([2, 1, 0, 8, 4, 6], 6));
console.log(twoSum2([5, 3, 4, 1], 7));*/
//console.log(twoSum([1, 5, 9], 10));
console.log(twoSum2([3, 2, 4], 6));