const reverseString = function(string) {
    let sLen=string.length;
    let newWord="";
    for (i=sLen-1;i>=0;i--){
        newWord+=string[i];
    }
    return newWord;

};

// Do not edit below this line
module.exports = reverseString;
