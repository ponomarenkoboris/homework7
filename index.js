function sum(a, b) {
  return a + b;
}


function reverse(string){
    let reverseStr = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseStr += string[i];
    }
    return reverseStr;
}


function evenNumber(number) {
    if (number % 2 === 0 && typeof number === 'number') {
        return number + ' - чётное число';
    } else if (number % 2 != 0 && typeof number === 'number') {
        return number + ' - нечётное число';
    } else {
        return number + ' - не является числом';
    }
}
console.log(evenNumber('ghui'));
module.exports = {sum, reverse, evenNumber};