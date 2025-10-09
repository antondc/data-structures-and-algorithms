export const longestSubstringWithoutRepeatingCharacters = (s: string): number => {
  let left = 0; // Left window side.
  let currentChars = new Map(); // Indexer for present chars in O(1) retrieval.
  let best = 0; // Result accumulator.

  // Iterate string once
  for (let right = 0; right < s.length; right++) {
    // While string already has current character, remove the first one and shrink window from left.
    while (currentChars.has(s[right])) {
      currentChars.delete(s[left]);
      left++;
    }

    // Window has shrunk until no repetitions occur:
    // Save new character into the map, and update the counter.
    currentChars.set(s[right], right);
    best = Math.max(currentChars.size, best);
  }

  return best;
};
