/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {

    while (b !== 0){ //until we don't have carry anymore (we have it only when both a and b ar 1)
        let carry = a & b; //bitwise and
        a = a ^ b; //bitwise xor
        b = carry << 1;
    }
    return a;
};

/*Recursion version*/
var getSum2 = function(a, b) {

    if(b === 0){
        return a;
    }
    else{
        return getSum2(a ^ b, (a & b) << 1);
    }
};

console.log(getSum2(1, 2));