export const binarySearch = (
  items: Array<number>,
  target: number,
  onStep?: (element) => void
): number => {
  let leftIndex = 0;
  let rightIndex = items.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    onStep(items[middleIndex]);

    if (items[middleIndex] === target) return target;
    if (items[middleIndex] < target) leftIndex = middleIndex + 1;
    if (items[middleIndex] > target) rightIndex = middleIndex - 1;
  }

  return null;
};
