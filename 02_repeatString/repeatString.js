const repeatString = function(string,num) {
    let newWord = "";
    if (num<0){
        return "ERROR"
    }
    else {
        for (i=0;i<num;i++){
            newWord+=string;
        }
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
