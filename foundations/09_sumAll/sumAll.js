const sumAll = function(num1, num2) {
    let smallerNum = 0;
    let largerNum = 0;
    let sum = 0;

    const args = Array.from(arguments);

    for (let i = 0; i < args.length; i++) {
        if (args[i] < 0 || 
            args[i] % 1 != 0 || 
            Number.isNaN(args[i]) || 
            args[i] === args[i].toString()) {
            return "ERROR";
        }
        
    }

    if (num1 > num2) {
        largerNum = num1;
        smallerNum = num2;
    }
    else {
        largerNum = num2;
        smallerNum = num1;
    }

    for (let i = smallerNum; i <= largerNum; i++) {
        sum += i;
    }
    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
