import { cartesianProduct } from './02_cartesian_product';

describe('maxSumDistinctSubArrays', () => {
  test('Returns correct result', () => {
    const dataA = ['a', 'b'];
    const dataB = ['c', 'd', 'e'];
    const product = (a: string, b: string) => a + b;
    const result = cartesianProduct(product, dataA, dataB);
    const expected = ['ac', 'ad', 'ae', 'bc', 'bd', 'be'];

    expect(result).toEqual(expected);
  });
});
