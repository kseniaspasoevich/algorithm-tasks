/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    //use 2 pointers;
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    let profit = 0;

   while(right < prices.length){

       if(prices[left] < prices[right]){ //this is profitable case
           profit = prices[right] - prices[left];
           maxProfit = Math.max(maxProfit, profit);
       }
       else{
           left = right;
       }
       right += 1;
   }
    return maxProfit;
};

/*console.log(maxProfit([7,9,5,4,3,7]));
console.log(maxProfit([7,6,1,4,3]));*/
console.log(maxProfit([7,9,5,4,3,7]));
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));