export const stringToInteger = (s: string): number => {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  const trimmedS = s.trim();
  const hasNegativeSign = trimmedS[0] === '-';
  const hasPositiveSign = trimmedS[0] === '+';
  const isPositive = hasPositiveSign || !hasNegativeSign;
  const unsignedString = hasPositiveSign || hasNegativeSign ? trimmedS.substring(1) : trimmedS;
  const unsignedStringArray = unsignedString.split('');
  let result = 0;

  for (let i = 0; i < unsignedStringArray.length; i++) {
    const numberOrNan = parseInt(unsignedStringArray[i], 10);

    if (!Number.isInteger(numberOrNan)) {
      break;
    }

    if (result > Math.floor((INT_MAX - numberOrNan) / 10)) {
      return isPositive ? INT_MAX : INT_MIN;
    }

    result = result * 10 + numberOrNan;
  }

  return isPositive ? result : -result;
};
