/*
Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of a^b
Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7=4782969
You may assume that the input will always be valid.
*/

var lastDigit = function(str1, str2){
    if (str2 == 0){return 1;}

    let lastDigitBase = str1.slice(-1);
    let lastDigitPower = str2.slice(-2);
    let power = +lastDigitPower % 4 || 4;
    return (+lastDigitBase) ** power % 10;
}


console.log(lastDigit("1","0"));
console.log(lastDigit("4", "0"));
console.log(lastDigit("3553299965", "33"));
