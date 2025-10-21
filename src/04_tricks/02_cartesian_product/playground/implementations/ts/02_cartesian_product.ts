export const cartesianProduct = <T>(product: (a: T, b: T) => T, ...matrices: T[][]): T[] => {
  let accumulator: T[] = [null];

  for (let i = 0; i < matrices.length; i++) {
    const row: T[] = [];
    for (let j = 0; j < accumulator.length; j++) {
      for (let k = 0; k < matrices[i].length; k++) {
        const result = accumulator[j] ? product(accumulator[j], matrices[i][k]) : matrices[i][k];
        row.push(result);
      }
    }

    accumulator = row;
  }

  return accumulator;
};
