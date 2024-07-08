const repeatString = function(string, num ) {

    let endString="";
    if (parseInt(num)<0)
        {
            return "ERROR";
        }
    for (let i = 0;i< parseInt(num);i++)
        {
            endString = endString+string;
        }
    return endString;
};

// Do not edit below this line
module.exports = repeatString;
