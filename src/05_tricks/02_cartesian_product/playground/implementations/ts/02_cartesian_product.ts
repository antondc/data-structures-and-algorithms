const cartesianProduct2byN = <T>(left: T[], right: T[], product: (a: T, b: T) => T): T[] => {
  const cartesianProduct: T[] = [];

  for (let i = 0; i < left.length; i++) {
    for (let j = 0; j < right.length; j++) {
      const result = product(left[i], right[j]);
      cartesianProduct.push(result);
    }
  }
  return cartesianProduct;
};

export const cartesianProductNbyN = <T>(product: (a: T, b: T) => T, ...matrices: T[][]): T[] => {
  let accumulator: T[] = [null];

  for (let i = 0; i < matrices.length; i++) {
    accumulator = cartesianProduct2byN(accumulator, matrices[i], product);
  }

  return accumulator;
};
