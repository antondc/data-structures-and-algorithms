export const reverseIntegers = (x: number): number => {
  const INT_MAX = Math.pow(2, 31);

  let reversed = 0;
  let num = Math.abs(x);

  while (num !== 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);

    // We have to check that the value we will compute, `reversed * 10 + digit`, is within bounds, i.e.,
    // reversed * 10 + digit < INT_MAX.
    // Solving equality, is the same as `reversed < (INT_MAX - digit) / 10`.
    if (reversed > Math.floor(INT_MAX - digit) / 10) {
      return 0;
    }

    reversed = reversed * 10 + digit;
  }

  return x > 0 ? reversed : -reversed;
};
