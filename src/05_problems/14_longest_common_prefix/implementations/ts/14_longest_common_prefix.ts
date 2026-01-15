export function longestCommonPrefix(strs: string[]): string {
  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];
  let prefix = [];

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      prefix.push(first[i]);
    } else {
      break;
    }
  }

  return prefix.join('');
}
