import { insertion_sort } from "../../../03_insertion_sort/implementations/ts/insertion_sort";

// Expects non-negative finite numbers and k>=1 buckets.
export const bucketSort = (items: Array<number>, k: number): Array<number> => {
  const buckets: Array<Array<any>> = Array.from({ length: k }, () => []);
  const M = Math.max(...items) + 1;

  for (const item of items) {
    const index = Math.floor(k * item / M);
    buckets[index].push(item);
  }

  for (let i = 0; i < k; i++) {
    insertion_sort(buckets[i])
  }

  return buckets.reduce((acc, curr) => ((acc = [...acc, ...curr]), acc), []);
};
