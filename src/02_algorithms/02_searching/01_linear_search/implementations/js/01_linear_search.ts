export const linearSearch = <T>(
  items: Array<T>,
  compare: (element: T) => boolean
): T | null => {
  for (let i = 0; i < items.length; i++) {
    if (compare(items[i])) return items[i];
  }

  return null;
};
