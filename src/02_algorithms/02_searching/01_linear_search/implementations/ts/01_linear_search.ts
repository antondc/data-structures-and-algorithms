export const linearSearch = <T>(
  items: Array<T>,
  target: T,
): T | null => {
  for (const item of items) {
    if (item === target) return item
  }

  return null;
};
