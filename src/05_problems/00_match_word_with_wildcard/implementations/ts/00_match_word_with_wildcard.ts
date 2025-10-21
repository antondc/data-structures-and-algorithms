export function matcher(pattern: string, data: string): boolean {
  let n = data.length;
  let usedWildcards = 0;
  let left = 0;

  for (let i = 0; i < n; i++) {
    const wildcard = parseInt(pattern[left]);
    const isNumber = typeof wildcard === 'number' && wildcard > 0;

    if (!isNumber && pattern[left] !== data[i]) {
      return false;
    }

    if (isNumber && usedWildcards === 0) {
      usedWildcards = wildcard;
    }

    if (isNumber && usedWildcards > 0) {
      usedWildcards--;

      if (usedWildcards === 0) left++;

      continue;
    }

    left++;
  }

  return true;
}
