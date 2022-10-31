/**
 * @param {number[]} nums
 * @return {this}
 */
/**/
/*without sorting, but using hash map
* time complexity: o(N)*/
var containsDuplicate = function(nums) {

    let hashMap = {};
    for (let i = 0; i < nums.length; i++){
        if(hashMap[nums[i]]){
            hashMap[nums[i]]+= 1;
            return true;
        }
        else{
            hashMap[nums[i]] = 1;
        }

    }
    return false;

};

/*with sorting*
time complexity:
sorting: o(N * logN)
scanning the array: o(N)
*/
var containsDuplicateSorted = function(nums) {
    let sortedArray = nums.sort();
    let i = 0;

    for (i = 0; i < sortedArray.length; i++){
        if (sortedArray[i] === sortedArray[i + 1]){
            return true;
        }
    }
    return false;
};

/*console.log(containsDuplicate([1, 4, 5, 3, 2, 9, 6])); //false
console.log(containsDuplicate([1, 4, 4, 3, 2, 9, 6])); //true
console.log(containsDuplicate([1, 4, 4, 3, 2, 9, 1])); //true*/

/*console.log(containsDuplicate([6, 4, 4, 3]));
console.log(containsDuplicate([6, 4, 5, 3]));
console.log(containsDuplicate([10, 10, 10, 10]));
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));*/

console.log(containsDuplicateSorted([6, 4, 5, 3]));
console.log(containsDuplicateSorted([1, 4, 5, 3, 2, 9, 6]));
console.log(containsDuplicateSorted([6, 4, 4, 3]));