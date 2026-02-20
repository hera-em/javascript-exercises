const palindromes = function (string) {
    let lowerCaseString = string.toLowerCase();
    const punctuation = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '-', '_', " "];
    let rawString = "";
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (!punctuation.includes(lowerCaseString[i])) {
            rawString += lowerCaseString[i];
        }
    }
    let middle = (Math.ceil(rawString.length / 2))
    let firstHalf = Array.from(rawString.substring(0, middle - 1));
    let secondHalf = Array.from(rawString.substring(middle));
    console.log(rawString);
    console.log (firstHalf);
    console.log (secondHalf);
    let secondHalfReverse = secondHalf.toReversed();

    if (firstHalf.toString() === secondHalfReverse.toString()) {
        return true;
    }
    else {
        return false;
    }
};
console.log(palindromes("a   boba!!"));


// Do not edit below this line
module.exports = palindromes;
