export const sumArrayItems = (array: Array<number>): number => {
  if (array.length === 1) {
    return array[0];
  }

  const [head, ...tail] = array;

  return head + sumArrayItems(tail);
};