/*---------------------Description-----------------------*/
/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other
 elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/


// option 1
function moveZeros(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[count++] = arr[i];
        }
    }

    while(count<arr.length){
        arr[count++] = 0;
    }
    return arr;
}
console.log(moveZeros([1, 2, 3, 4, 0, 0, 5, 0, 8, 9, 6, 0, 9]));

//option 2
function moveZeros2(arr) {
    let arrWithZeros=arr.filter(function(el){
        return el === 0;
    })
    let arrWithNoZeros=arr.filter(function(el2){
        return el2 !== 0;
    });

    return arrWithNoZeros.concat(arrWithZeros);
}
console.log(moveZeros2([1, 2, 3, 4, 0, 0, 5, 0, 8, 9, 6, 0, 9]));