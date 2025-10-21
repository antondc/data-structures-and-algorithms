// d3dog datadog
export function matcher(pattern: string, data: string): boolean {
  let n = data.length;
  let usedWildcards = 0;
  let patternLength = 0;

  let i = 0;
  let j = 0;

  while (i < pattern.length || j < data.length) {
    if (i < pattern.length) patternLength++; // Accumulate iterations over pattern.

    const wildcard = parseInt(pattern[i]);
    const isNumber = typeof wildcard === 'number' && wildcard > 0;

    // Is a letter, and it does not match, not a word match.
    if (!isNumber && pattern[i] !== data[j]) {
      return false;
    }

    // Is a letter, advance pattern pointer.
    if (!isNumber) {
      i++;
    }

    // Is a number, and we do not have wildcards: is a new number, set wildcards
    if (isNumber && usedWildcards === 0) {
      usedWildcards = wildcard;
    }

    // Is a number, and we do have wildcards: consume them and advance if finished.
    if (isNumber && usedWildcards > 0) {
      usedWildcards--;

      // Finished with wildcards, advance pattern pointer.
      if (usedWildcards === 0) {
        i++;
      }
    }

    // Advance data pointer.
    j++;
  }

  // Return true only if both lengths matches.
  return patternLength === n;
}
