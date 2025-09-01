export const linearSearch = <T>(
  items: Array<T>,
  target: T,
  onStep?: (element) => void
): T | null => {
  for (let i = 0; i < items.length; i++) {
    onStep(items[i]);

    if (items[i] === target) return items[i];
  }

  return null;
};
