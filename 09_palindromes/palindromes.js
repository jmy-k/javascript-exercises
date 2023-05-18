const palindromes = function (string) {
    const checkedString = string.toLowerCase().replace(/^[a-z]/g,"");
    return checkedString.split("").reverse().join("") === checkedString;
};

// Do not edit below this line
module.exports = palindromes;
