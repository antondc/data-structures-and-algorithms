//  O(n log n * k)
export function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return '';

  strs.sort(); // Keep lexicographic order
  let prefix = '';
  let first = strs[0];
  let last = strs[strs.length - 1];

  for (let i = 0; i < last.length; i++) {
    if (first[i] === last[i]) {
      prefix += first[i];
    } else {
      break;
    }
  }

  return prefix;
}
