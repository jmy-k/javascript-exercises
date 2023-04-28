const sumAll = function(num1,num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    else if (num1 < 0 || num2 <0){
        return "ERROR";
    }
    else{
        let newSum=0;
        if (num1<num2){
            for (i=num1;i<=num2;i++){
                newSum += i;
            }
        }
        else if (num2<num1){
            for (i=num2;i<=num1;i++){
                newSum += i;
            }
        }
        return newSum;
    }

};

// Do not edit below this line
module.exports = sumAll;
