const fibonacci = function(a) {
    let number = Number (a);
    if (number < 0) {
        return "OOPS";
    }
    if (number === 0) {
        return 0;
    }
    let sequence = [];
    let cache1 = 1;
    let cache2 = 1;
    let cache3 = 1;
    for (let i = 1; i <= number; i++) {
        if (i == 1 || i == 2) {
            sequence.push(1);
        }
        else {
            cache3 = cache1 + cache2;
            sequence.push(cache3);
            cache2 = cache1;
            cache1 = cache3;
            
        }
    }
    return sequence.at(number-1);
};

// Do not edit below this line
module.exports = fibonacci;
