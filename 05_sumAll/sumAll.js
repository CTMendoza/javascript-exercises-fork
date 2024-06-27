const sumAll = function(num1, num2) {
    let finalSum = 0;
    
    if(( typeof num1 !== "number" ||  typeof num2 !== "number" ) ||(num1 < 0 || num2 < 0)) {
        return 'ERROR';
     }
    else if( num1 < num2){
        for(i = num1; i <= num2; i++) {
            finalSum += i;
        }
        return finalSum;
    }
    else {
        for(i = num1; i >= num2; i--) {
            finalSum += i;
        }
        return finalSum;
    }
    
};

// Do not edit below this line

module.exports = sumAll;
