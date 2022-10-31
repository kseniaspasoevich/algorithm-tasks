/**
 * @param {number} n - a positive integer
 * @return {number}
 */

/*
n = 00000000000000000000000000001011
n = 00000000000000000000000010000000
n = 11111111111111111111111111111101
*/

var hammingWeight = function(n) {

    return n.toString(2).split("0").join("").length;

};

 //console.log(hammingWeight(00000000000000000000000010000101));
 /*console.log(hammingWeight(00000000000000000000000000001011));*/
//console.log(hammingWeight(01000000100000000010000000001011));
//console.log("new expression:  " + hammingWeight(11111111111111111111111111111101));

/*brute force solution that doesn't return always the correct solution
/better not to use it*/
var hammingWeight2 = function(n) {
    n=n.toString(2).padStart(32,"0");
    let count =0;
    for (var i = 0 ; i< n.length ; i++) {
        if(n[i] === '1') {
            count++;
        }
    }
    return count;
};

console.log(hammingWeight(15));