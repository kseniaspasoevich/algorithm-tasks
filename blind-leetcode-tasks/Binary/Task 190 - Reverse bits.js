/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
      let arrayOfBinaryNumbers = n.toString(2).padStart(32, "0");
      let newArray = [];
      for (let i = arrayOfBinaryNumbers.length - 1; i >= 0; i-- ){
          newArray.push(arrayOfBinaryNumbers[i]);
      }

      return parseInt(newArray.join(""), 2);
};

console.log(reverseBits(43261596));