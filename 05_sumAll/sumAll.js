const sumAll = function(min,max) {
    let sum = 0;
    let temp = 0;
    if (min>max)
        {
            //reverse numbers.
            temp = max;
            max = min;
            min = temp;
        }
    if ((min<0) || (max<0))
        {
            return "ERROR";
        }
    if ( typeof min != "number" || typeof max != "number")
        {
            return "ERROR";
        }
    else 
        for (let i = min;i<=max;i++)
        {
            sum+=i;
        }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
