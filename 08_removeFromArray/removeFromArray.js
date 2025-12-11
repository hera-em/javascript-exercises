const removeFromArray = function(arr, ...nums) {

    return arr.filter((element) => !nums.includes(element));

};


// Do not edit below this line
module.exports = removeFromArray;
