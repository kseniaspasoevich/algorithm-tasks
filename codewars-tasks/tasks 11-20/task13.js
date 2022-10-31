/*---------description-------------------------*/
/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation
marks untouched.*/

function pigIt(str){
    return str.split(" ").map(el=> /[a-zA-Z]+/.test(el) ? (el.slice(1) + el[0] + 'ay'): el).join(' '); }

console.log(pigIt('O tempora o mores !'));