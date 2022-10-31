/*--------------description-----------------*/
/*Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case).*/

function toCamelCase(str) {
    let arr = str.split(/([-._])/gi); // gets something like this [ 'a', '-', 'b', '-', 'c' ]
    let newArr = [];

    for (let i=0; i < arr.length; i++){
        if( arr[i] !== '-' && arr[i] !== '_'){
            newArr.push(arr[i]);
        }
    }

    for (let i=1; i < newArr.length; i++){
        newArr[i]=newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
    }

    return newArr.join('');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("i_am-from-serbia"));
console.log(toCamelCase("is-true"));
console.log(toCamelCase("Is-False"));