const palindromes = function (inputString) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const regularString = inputString.toLowerCase()
    .split('')
    .filter((character)=>alphanumerical.includes(character))
    .join('');

    const reversedString = regularString.split('')
    .reverse()
    .join('');

    return regularString===reversedString;

};

// Do not edit below this line
module.exports = palindromes;
