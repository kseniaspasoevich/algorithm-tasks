/**
 * @param {number[]} nums
 * @return {number}
 */

/*Time complexity: O(N)
* Space complexity: 0(1)
* This solution got 95,78% on Leetcode*/
var missingNumber = function(nums) {

    let actualSum  = nums.length * (nums.length + 1)/2;
    let sum = 0, includesZero = nums.includes(0);
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
     if(actualSum !== sum){
         return (actualSum - sum);
     }

     if(includesZero == false){
         return 0;
     }
}

/*Time complexity: O(N)
* Space complexity: 0(N)
* This solution got around 20-25% on Leetcode*/
var missingNumber2 = function(nums) {

    let sortedArray = nums.sort(function (a, b){ return a - b});
    for(let i = 0; i <= sortedArray.length; i++){
          if(sortedArray[i + 1] - sortedArray[i] !== 1){
              if((sortedArray.length === 1 && sortedArray[0] !== 0) || (sortedArray[0] !== 0)){
                  return 0;
              }
              return (sortedArray[i] + 1);
          }
    }
};

/*console.log(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,
    17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]));
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 8, 9, 10]));*/
//console.log(missingNumber([0, 1, 2, 3, 5]));
console.log(missingNumber([0, 2]));