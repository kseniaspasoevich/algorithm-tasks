/*--------------description-----------------*/
/*The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result
should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.*/

function count(string) {
    let countArr = {};
    string.split('').forEach(function(s){
        countArr[s] ? countArr[s]++ : countArr[s]=1;
    });

    return countArr;
}

//with reduce method
function count2 (string) {
    return string.split("").reduce(function(obj, elem) {
        if (elem in obj)
            obj[elem]++;
        else
            obj[elem] = 1;
        return obj;
    }, {});
}
console.log(count/*2*/('KKKSSSSSENNIA'));