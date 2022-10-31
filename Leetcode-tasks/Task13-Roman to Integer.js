var romanToInt = function(s) {

    let romanNumber = s.toUpperCase();

    /*Регулярное выражение, необходимо для проверки:
        *строка начинается от нуля до 3-х знаков М: ^M{0,3}
        *после которых следует CM или CD или D после которого следует от нуля до трех знаков C: (CM|CD|D?C{0,3})
        * после которых следует XC или XL или L после которого следует от нуля до трех знаков X: (CM|CD|D?C{0,3})
        * после которых следует IX или IV или V после которого следует от нуля до трех знаков I чем и строка
        * заканчивается: (IX|IV|V?I{0,3})$ */

    let romanNumberRegEx = new RegExp(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);
    let romanNumberResult = romanNumberRegEx.test(romanNumber);

    if(!romanNumberResult){
        console.log("Invalid roman input");
    }
    let constants = ["I", "V", "X", "L", "C", "D", "M"]
    let charToInt = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    let sum = 0;
    let previousIndex = 0;

    for (var i = romanNumber.length - 1; i >= 0; i--){
        if (constants.indexOf(romanNumber[i]) >= previousIndex) {
            sum = sum + charToInt[romanNumber[i]];
        } else {
            sum = sum - charToInt[romanNumber[i]];
        }
        previousIndex = constants.indexOf(romanNumber[i]);
    }
    return sum;
};

console.log(romanToInt("X"));
console.log(romanToInt("XII"));
console.log(romanToInt("CD"));