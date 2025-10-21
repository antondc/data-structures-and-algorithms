import { transpose } from './01_transpose';


describe('maxSumDistinctSubArrays', () => {
  test('Returns correct result', () => {
    // From:
    // [
    //     [0, 1, 2 ],
    //     [3, 4, 5, 6],
    //     [7, 8, 9 ],
    // ]
    //
    // to:
    // [
    //      [ 0, 3, 7 ],
    //      [ 1, 4, 8 ],
    //      [ 2, 5, 9 ],
    //      [  , 6,  ]
    // ]
    const data = [
      [0, 1, 2],
      [3, 4, 5, 6],
      [7, 8, 9],
    ];
    const result = transpose(data);
    const expected = [
      [0, 3, 7],
      [1, 4, 8],
      [2, 5, 9],
      [null, 6, null],
    ];
    expect(result).toEqual(expected);
  });
});
