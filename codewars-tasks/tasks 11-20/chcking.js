/*promise.then(function (){
    promise.then( function (){
        console.log('B');
    });
    console.log('A');
});
promise.then( function (){
    console.log('C');
});*/

/*(function(){
    const a = b = 3;

})();
console.log(typeof a !== 'undefined');
console.log(typeof b !== 'undefined');

console.log(typeof a);
console.log(typeof b);
console.log(typeof 'undefined');

console.log(undefined !== 'undefined');*/

/*function initArray(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(function(){
            return i;
        });
    }
    return arr;
}

var arr = initArray();
const [first, second, third] = arr;
console.log(first());
console.log(second());
console.log(third());



let y = 1;
let x = y = 2;
console.log(typeof x);
console.log(y);
console.log(typeof (+'Infinity'));*/


console.log(0 || "" || 2 || undefined || true || falsе );