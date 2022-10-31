/*------------------Description-----------*/
/*The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal
representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be
rounded to the closest valid value.
he following are examples of expected output values:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3*/

function rgb(r, g, b){

    return (colorToHex(checkRange(r)) + colorToHex(checkRange(g)) + colorToHex(checkRange(b))).toUpperCase();
}

function colorToHex(color){
    let hexadecimal=color.toString(16).padStart(2, '0');
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
}

function checkRange(color){
    if(color > 255)
        return 255;
    else if (color < 0)
        return 0;

    return color;
}


console.log(rgb(111, 59, 298)); //converts with parameters 111, 59, 255
console.log(rgb(255, 59, 200)); //parameters in range 
