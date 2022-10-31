/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function(n) {
     let arr = [];
     arr[0] = 0;

    for (let i = 1; i <= n; i++){
            arr[i] = arr[i >> 1] + (i & 1);
    }
    return arr;

}

/*The easiest way to solve, with the time complexity 0(NlogN),
but it gets only 5% on Leetcode
* We can also use function hammingWeight from task 191*/
/*var countBits2 = function(n) {
    let arr = [];
    for (let i = 0; i < n + 1; i++){
        arr.push(i.toString(2).split("0").join("").length);
    }
     return arr;
};*/

console.log(countBits(2));
console.log(countBits(5));