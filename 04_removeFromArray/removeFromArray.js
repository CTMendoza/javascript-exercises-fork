const removeFromArray = function(array, ...moreArgs) {
    const newArray = []
    array.forEach((item) => {
        if(!moreArgs.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
