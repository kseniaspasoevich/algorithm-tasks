/*Create a RomanNumerals class that can convert a roman numeral to and from an integer value.
It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for
each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit
and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC;
resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol
in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").*/

class RomanNumerals{

    static toRoman(intNumber){
        let  romanValues = {
                M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1
            }
        let i = 0;
        let roman = '';
        if (intNumber <=0 || intNumber > 4000) {
            return 'Invalid input';
        }

          for (i in romanValues) {
              while (intNumber >= romanValues[i]){
                  roman += i;
                  intNumber -= romanValues[i];
              }
            }
        return roman;
    }

    static fromRoman(romanNumber){

        romanNumber = romanNumber.toUpperCase();
        const romanRegEx = new RegExp(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);
        const regExResult = romanRegEx.test(romanNumber);

        if(!regExResult){
            return "Invalid input";
        }

        let arr = ["I", "V", "X", "L", "C", "D", "M"];
        let values = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        }

        let sum = 0;
        let previousIndex = 0;

        for (let i = romanNumber.length - 1; i >= 0; i--) {
            if (arr.indexOf(romanNumber[i]) >= previousIndex) {
                sum = sum + values[romanNumber[i]];
            } else {
                sum = sum - values[romanNumber[i]];
            }
            previousIndex = arr.indexOf(romanNumber[i]);
        }

        return sum;
    }

}

/*console.log(RomanNumerals.toRoman(6));
console.log(RomanNumerals.toRoman(50));
console.log(RomanNumerals.toRoman(4007)); /*Invalid input*/

/*console.log(RomanNumerals.toRoman(2578));
console.log(RomanNumerals.toRoman(2789));*/

console.log(RomanNumerals.fromRoman('VI')); //6
console.log(RomanNumerals.fromRoman('MMVIII'));//2008
console.log(RomanNumerals.fromRoman('XXI')); //21
console.log(RomanNumerals.fromRoman('MDCLXVI')); //1666