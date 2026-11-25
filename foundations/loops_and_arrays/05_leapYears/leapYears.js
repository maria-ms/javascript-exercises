const leapYears = function(year) {

  const isYearDivisiblebyFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisiblebyFourHundred = year % 400 === 0; 

  if (
    isYearDivisiblebyFour && (!isCentury || isYearDivisiblebyFourHundred)
  ) {
    return true;
  } else {
    return false;
  }
  
};

// Do not edit below this line
module.exports = leapYears;
