const leapYears = function(year) {

    if (year%100 == 0)
    {
        return hundredLeapYear(year);
    }
    else{
        return regularLeapYear(year);
    }
};

function hundredLeapYear(year)
{
    if (year%400 == 0)
    {
        return true;
    }
    else {
        return false;
    }
}

function regularLeapYear(year)
{
    if (year%4 == 0)
    {
        return true;
    }
    else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
