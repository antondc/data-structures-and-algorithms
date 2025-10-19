import { cartesianProduct } from './02_cartesian_product';


describe('maxSumDistinctSubArrays', () => {
  test('Returns correct result', () => {
    const dataA = ['a', 'b'];
    const dataB = ['c', 'd', 'e'];
    const operation = (a: string, b: string): string => (!!a ? a + b : b);
    const result = cartesianProduct(operation, dataA, dataB);
    const expected = ['ac', 'ad', 'ae', 'bc', 'bd', 'be'];

    expect(result).toEqual(expected);
  });
});
