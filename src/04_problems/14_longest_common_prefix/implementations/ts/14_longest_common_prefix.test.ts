import { letterCombinations } from './14_longest_common_prefix';


describe('letterCombinations', () => {
  test('Returns the correct result', () => {
    const result = letterCombinations('23');
    console.log(JSON.stringify(result, null, 4));
    const expectedResult = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

    expect(result).toEqual(expectedResult);
  });
});
