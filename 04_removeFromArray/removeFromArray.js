const removeFromArray = function(arr, ...oddItem) {

    const returnArray = [];
    for(let i =0; i< arr.length;i++)
        {
            if (!oddItem.includes(arr.at(i)))
                {
                    returnArray.push(arr.at(i));
                }
        }
        return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
