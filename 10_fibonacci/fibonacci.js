const fibonacci = function(fibArg) {

    let counter;
    if (typeof fibArg != 'number')
    {
        counter = parseInt(fibArg);
    }
    else 
    {
        counter = fibArg;
    }

    if (counter<0)
    {
        return "OOPS";
    }
    else if (counter==0)
    {
        return 0;
    }
    else{
        let firstNum = 1;
        let secNum = 0;
        let current;
        for (let i = 2;i<=counter;i++)
        {
            current = firstNum + secNum;
            secNum = firstNum;
            firstNum = current;
        }
        return firstNum;
    }



};

// Do not edit below this line
module.exports = fibonacci;
